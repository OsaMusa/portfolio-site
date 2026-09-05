// Site root resolved relative to this script's own URL (assets/js/components.js).
// Works at any page depth, locally and on GitHub Pages subpaths.
const SITE_ROOT = document.currentScript
    ? new URL('../..', document.currentScript.src).pathname
    : '/';

// Rewrite root-absolute href/src paths in a container to include the site root
function fixPaths(container) {
    container.querySelectorAll('a[href^="/"]').forEach(link => {
        link.setAttribute('href', SITE_ROOT + link.getAttribute('href').slice(1));
    });
    container.querySelectorAll('img[src^="/"]').forEach(img => {
        img.setAttribute('src', SITE_ROOT + img.getAttribute('src').slice(1));
    });
}

// Load HTML component into placeholder
async function loadComponent(id, url) {
    const target = document.getElementById(id);
    if (!target) return;

    try {
        const response = await fetch(SITE_ROOT + url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const html = await response.text();
        target.innerHTML = html;
        fixPaths(target);
        
        // If loading nav, set active state
        if (id === 'nav-placeholder') {
            await populateNavDropdown();
            setActiveNavLink();

            // Re-populate mobile nav panel since main.js captured empty $nav at init
            if (typeof breakpoints !== 'undefined' && breakpoints.active('<=medium')) {
                $('#navPanel').children('nav').append($('#nav').children());
                $('#navPanel').find('.icons, .icon').addClass('alt');
            }

            // Sync theme toggle icon now that the nav exists in the DOM
            if (typeof window.syncThemeToggle === 'function') {
                window.syncThemeToggle();
            }
        }

        // If loading project buttons, configure them
        if (id === 'prj-btns-placeholder') {
            configureProjectButtons();
        }
    } catch (error) {
        console.error(error);
    }
}

// Populate nav dropdown from centralized data file
async function populateNavDropdown() {
    const dropdown = document.querySelector('#nav .dropdown-menu');
    if (!dropdown) return;

    try {
        const response = await fetch(SITE_ROOT + 'assets/data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects data');
        const data = await response.json();

        dropdown.innerHTML = Object.entries(data.categories)
            .map(([key, category]) =>
                `<li><a href="${SITE_ROOT}projects/${key}/">${category.title}</a></li>`
            )
            .join('');
    } catch (error) {
        console.error('Error populating nav dropdown:', error);
    }
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    
    // Remove any existing active classes
    document.querySelectorAll('#nav .links li').forEach(li => {
        li.classList.remove('active');
    });
    
    // Find the link that matches the current page
    let bestMatch = null;
    let bestMatchLength = 0;
    
    document.querySelectorAll('#nav .links a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        
        // Normalize both paths for comparison
        const normalizedCurrent = currentPath.endsWith('/') ? currentPath : currentPath + '/';
        const normalizedHref = href.endsWith('/') ? href : href + '/';
        
        // Exact match takes priority
        if (normalizedCurrent === normalizedHref) {
            link.parentElement.classList.add('active');
            bestMatch = link;
            bestMatchLength = normalizedHref.length;
        }
        // Partial match: current path starts with href (for nested project pages)
        // Skip the site root to avoid matching every page; only allow partial match for deeper paths
        else if (normalizedHref !== '/' && normalizedHref !== SITE_ROOT && normalizedCurrent.startsWith(normalizedHref) && normalizedHref.length > bestMatchLength) {
            if (bestMatch) bestMatch.parentElement.classList.remove('active');
            link.parentElement.classList.add('active');
            bestMatch = link;
            bestMatchLength = normalizedHref.length;
        }
    });
    
    // Highlight parent dropdown if child is active
    const activeDropdownItem = document.querySelector('.dropdown-menu li.active');
    if (activeDropdownItem) {
        const parentLi = activeDropdownItem.closest('ul.dropdown-menu').closest('li');
        if (parentLi) {
            parentLi.classList.add('active');
        }
    }
}

// Configure project action buttons based on meta tags and URL path
function configureProjectButtons() {
    const githubUrl = document.querySelector('meta[name="project-github"]')?.content;
    const demoUrl = document.querySelector('meta[name="project-demo"]')?.content;

    // Show/hide View Code button
    const viewCodeBtn = document.getElementById('view-code-btn');
    if (viewCodeBtn) {
        if (githubUrl) {
            viewCodeBtn.querySelector('a').href = githubUrl;
            viewCodeBtn.style.display = '';
        } else {
            viewCodeBtn.remove();
        }
    }

    // Show/hide View Live button
    const viewLiveBtn = document.getElementById('view-live-btn');
    if (viewLiveBtn) {
        if (demoUrl) {
            viewLiveBtn.querySelector('a').href = demoUrl;
            viewLiveBtn.style.display = '';
        } else {
            viewLiveBtn.remove();
        }
    }

    // Set category name from URL path
    const backBtn = document.getElementById('back-to-category-btn');
    if (backBtn) {
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        // Expected structure: /projects/{category}/...
        const categoryIndex = pathParts.indexOf('projects');
        let categoryName = 'Projects';
        if (categoryIndex !== -1 && pathParts[categoryIndex + 1]) {
            categoryName = pathParts[categoryIndex + 1]
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        backBtn.querySelector('a').textContent = `Back to ${categoryName}`;
    }
}

// Load homepage projects from centralized data file
async function loadHomepageProjects() {
    const featuredContainer = document.getElementById('featured-container');
    const postsContainer = document.getElementById('homepage-posts');
    if (!featuredContainer && !postsContainer) return;

    try {
        const response = await fetch(SITE_ROOT + 'assets/data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects data');
        const data = await response.json();

        const allProjects = [];
        Object.entries(data.categories).forEach(([categoryKey, category]) => {
            category.projects.forEach(project => {
                allProjects.push({ ...project, _category: categoryKey });
            });
        });

        const homepageProjects = allProjects
            .filter(p => p.homepageOrder !== null)
            .sort((a, b) => a.homepageOrder - b.homepageOrder);

        const featured = homepageProjects.find(p => p.homepageOrder === 1);
        const gridProjects = homepageProjects.filter(p => p.homepageOrder !== 1);

        if (featured && featuredContainer) {
            featuredContainer.innerHTML = `
                <article class="post featured">
                    <header class="major">
                        <h2>
                            <a href="projects/${featured._category}/${featured.slug}/">
                                ${featured.title}
                            </a>
                        </h2>
                        ${featured.impact ? `<p><strong>Impact:</strong> ${featured.impact}</p>` : ''}
                        <p>${featured.description}</p>
                    </header>
                    <a href="projects/${featured._category}/${featured.slug}/" class="image main">
                        <img src="assets/images/featured-project-pic.webp" alt="${featured.title}" />
                    </a>
                    <ul class="actions special">
                        <li><a href="projects/${featured._category}/${featured.slug}/" class="button">Learn More</a></li>
                    </ul>
                </article>
            `;
        }

        if (gridProjects.length > 0 && postsContainer) {
            postsContainer.innerHTML = gridProjects.map(project => `
                <article>
                    <header>
                        <h2>${project.title}</h2>
                    </header>
                    <a href="projects/${project._category}/${project.slug}/" class="image fit">
                        <img src="assets/images/${project.image}" alt="${project.title}" loading="lazy" />
                    </a>
                    ${project.impact ? `<p><strong>Impact:</strong> ${project.impact}</p>` : ''}
                    <p>${project.description}</p>
                    <ul class="actions special">
                        <li><a href="projects/${project._category}/${project.slug}/" class="button">Full Description</a></li>
                    </ul>
                </article>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading homepage projects:', error);
    }
}

// Load category projects from centralized data file
async function loadCategoryProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const projectsIndex = pathParts.indexOf('projects');
    if (projectsIndex === -1 || !pathParts[projectsIndex + 1]) return;

    const categorySlug = pathParts[projectsIndex + 1];

    try {
        const response = await fetch(SITE_ROOT + 'assets/data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects data');
        const data = await response.json();

        const category = data.categories[categorySlug];
        if (!category) {
            console.warn(`No data found for category: ${categorySlug}`);
            return;
        }

        document.getElementById('category-title').textContent = `${category.title} Projects`;
        document.getElementById('category-description').textContent = category.description;

        container.innerHTML = category.projects.map(project => `
            <article>
                <header>
                    <h2>${project.title}</h2>
                </header>
                <a href="${project.slug}/" class="image fit">
                    <img src="../../assets/images/${project.image}" alt="${project.title}" loading="lazy" />
                </a>
                ${project.impact ? `<p><strong>Impact:</strong> ${project.impact}</p>` : ''}
                <p>${project.description}</p>
                <ul class="actions special">
                    <li><a href="${project.slug}/" class="button">Learn More</a></li>
                </ul>
            </article>
        `).join('');
    } catch (error) {
        console.error('Error loading category projects:', error);
    }
}

// Load categories overview from centralized data file
async function loadCategoriesOverview() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    try {
        const response = await fetch(SITE_ROOT + 'assets/data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects data');
        const data = await response.json();

        container.innerHTML = Object.entries(data.categories).map(([key, category]) => `
            <article>
                <header>
                    <h2>${category.title}</h2>
                </header>
                <p>${category.description}</p>
                <p><strong>${category.projects.length} project${category.projects.length !== 1 ? 's' : ''}</strong></p>
                <ul class="actions special">
                    <li><a href="${key}/" class="button">View ${category.title} Projects</a></li>
                </ul>
            </article>
        `).join('');
    } catch (error) {
        console.error('Error loading categories overview:', error);
    }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Fix root-absolute links in static page content (e.g. 404.html)
    fixPaths(document);

    loadComponent('header-placeholder', 'assets/html/header.html');
    loadComponent('nav-placeholder', 'assets/html/nav.html');
    loadComponent('prj-btns-placeholder', 'assets/html/project-buttons.html');
    loadComponent('footer-placeholder', 'assets/html/footer.html');
    loadCategoryProjects();
    loadHomepageProjects();
    loadCategoriesOverview();
});