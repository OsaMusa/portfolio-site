// Load HTML component into placeholder
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
        
        // If loading nav, set active state
        if (id === 'nav-placeholder') {
            setActiveNavLink();

            // Re-populate mobile nav panel since main.js captured empty $nav at init
            if (typeof breakpoints !== 'undefined' && breakpoints.active('<=medium')) {
                $('#navPanel').children('nav').append($('#nav').children());
                $('#navPanel').find('.icons, .icon').addClass('alt');
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
        // Skip root "/" to avoid matching every page; only allow partial match for paths with 2+ segments
        else if (normalizedHref !== '/' && normalizedCurrent.startsWith(normalizedHref) && normalizedHref.length > bestMatchLength) {
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

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', '/assets/html/header.html');
    loadComponent('nav-placeholder', '/assets/html/nav.html');
    loadComponent('prj-btns-placeholder', '/assets/html/project-buttons.html');
    loadComponent('footer-placeholder', '/assets/html/footer.html');
});