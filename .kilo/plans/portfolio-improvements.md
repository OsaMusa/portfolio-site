# Portfolio Site Improvement Tasks

## Project Context
- **Site URL**: https://osamusa.github.io/portfolio-site/
- **Template**: HTML5 UP (Massively template)
- **Tech Stack**: HTML, CSS, JavaScript (jQuery), static site on GitHub Pages

---

## HIGH PRIORITY

### 1. Update Hero Section Value Proposition

**File**: `index.html` (around line 16, inside `#intro`)

**Current text**:
```html
<p>Where my projects are just a click away.</p>
```

**Replace with**:
```html
<p>Data Analyst specializing in automation and business intelligence. Leveraging insurance domain expertise to build tools that save hours and drive decisions.</p>
```

**Why**: The current tagline is generic. The new text immediately communicates your unique value proposition combining domain knowledge with technical skills.

---

### 2. Add Quantified Impact Metrics to All Projects

**File**: `index.html` (all `<article>` elements within `.posts` section)

For each project card, add a metrics paragraph before the existing description or integrate metrics into the description:

#### US Average Housing Prices by ZIP
```html
<p>
    <strong>Impact:</strong> Visualizes housing data for 40,000+ ZIP codes across 20+ years of Zillow data. Updated monthly with fresh datasets.
</p>
<p>
    A site with visualizations that show the average home values across the US by zip code since January, 2000...
</p>
```

#### Ticketing System
```html
<p>
    <strong>Impact:</strong> Tracked X+ issues monthly, reduced resolution time by Y%, automated status notifications to reporters.
</p>
<p>
    A system built to track reported issues, who they're assigned to, and send status updates to issue reporters.
</p>
```

#### Mass Appraisal Tool
```html
<p>
    <strong>Impact:</strong> Valuated X properties per cycle with Y% accuracy rate, supporting Z appeal cases annually.
</p>
<p>
    A tool using the company's chosen methodologies to valuate properties against an assessor's proposed value.
</p>
```

#### Report Generator
```html
<p>
    <strong>Impact:</strong> Automated Z hours of manual reporting per week across N reports, eliminating copy-paste errors.
</p>
<p>
    A macro that transfers data (text, images, charts, etc.) from an Excel workbook to a Word document.
</p>
```

#### Outlook Automation
```html
<p>
    <strong>Impact:</strong> Saved Z hours weekly by automating calendar updates for N consultants handling appeal hearings.
</p>
<p>
    A flow that updates consultant Outlook calendars to show upcoming appeal hearings.
</p>
```

#### Appeal Form Automations
```html
<p>
    <strong>Impact:</strong> Processed X forms automatically, reducing manual entry time by Y% and eliminating data entry errors.
</p>
<p>
    A set of automations made for filling out large numbers of appeal forms specific to the assessor and appeal type.
</p>
```

#### ROR 2 Run Report Parser
```html
<p>
    <strong>Impact:</strong> Parses and stores run data from X+ games, enabling trend analysis and performance tracking.
</p>
<p>
    An xml parser that reads Risk of Rain 2 saved run reports and updates the associated relational database.
</p>
```

#### Sales Data Analysis
```html
<p>
    <strong>Impact:</strong> Analyzed 12 months of sales data to identify trends, answer business questions, and inform strategy decisions.
</p>
<p>
    An exploratory data analysis on a year of sales data used to answer business related questions.
</p>
```

#### Texas Property Values
```html
<p>
    <strong>Impact:</strong> Interactive heatmap covering 254 Texas counties, visualizing 5+ years of property value trends.
</p>
<p>
    A heatmap showing the average property value of houses in Texas by county from January, 2015 - June, 2020.
</p>
```

**Note**: Replace X, Y, Z, N with actual numbers if known, or use reasonable estimates based on context.

---

### 3. Add Downloadable Resume Link

**Files**: `index.html`, `about/index.html`

**Step 1**: Create or obtain a PDF resume file named `resume.pdf`

**Step 2**: Add download link in navigation (both pages):

In the `#nav` section, after the icons list, add:
```html
<ul class="actions">
    <li><a href="resume.pdf" download class="button small">Download Resume</a></li>
</ul>
```

**Step 3**: Also add in footer contact section (both pages):
```html
<section>
    <h3>Resume</h3>
    <p><a href="resume.pdf" download>Download PDF</a></p>
</section>
```

---

### 4. Add Technical Skills Section to About Page

**File**: `about/index.html`

Insert this section after the intro paragraph (after the closing `</p>` of the main about text) and before the `#experience` section:

```html
<section id="skills">
    <h2>Technical Skills</h2>
    <div class="box alt">
        <div class="row gtr-uniform">
            <div class="col-4 col-12-small">
                <h3>Languages</h3>
                <ul>
                    <li>Python (pandas, numpy)</li>
                    <li>SQL</li>
                    <li>DAX / Power Query M</li>
                    <li>VBA</li>
                    <li>HTML/CSS/JavaScript</li>
                </ul>
            </div>
            <div class="col-4 col-12-small">
                <h3>Tools & Platforms</h3>
                <ul>
                    <li>Power BI</li>
                    <li>Alteryx</li>
                    <li>Power Automate</li>
                    <li>Snowflake</li>
                    <li>Tableau</li>
                    <li>Streamlit</li>
                    <li>Git/GitHub</li>
                </ul>
            </div>
            <div class="col-4 col-12-small">
                <h3>Competencies</h3>
                <ul>
                    <li>Data Visualization</li>
                    <li>Process Automation</li>
                    <li>ETL/ELT Pipelines</li>
                    <li>Statistical Analysis</li>
                    <li>Business Intelligence</li>
                    <li>Requirements Gathering</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

This uses the template's existing grid system (`row`, `col-*` classes) for responsive layout.

---

## MEDIUM PRIORITY

### 5. Add Current Activity/Learning Section

**File**: `about/index.html`

Add this section after the `#credentials` section (before the closing `</div>` of `#main`):

```html
<section id="current-focus">
    <h2>Currently Exploring</h2>
    <p>
        [Update with current focus areas. Examples:]
    </p>
    <ul>
        <li>Advanced SQL patterns and query optimization</li>
        <li>Machine Learning fundamentals and practical applications</li>
        <li>Cloud platforms (AWS/Azure) for data engineering</li>
        <li>[Add your actual current learning focus here]</li>
    </ul>
</section>
```

**Action Required**: Replace placeholder content with your actual current learning activities.

---

### 6. Reorder Projects by Impact

**File**: `index.html` (reorder `<article>` elements within `.posts`)

**Suggested order** (highest impact first):
1. US Average Housing Prices by ZIP (already featured at top)
2. Ticketing System (full-stack application)
3. Mass Appraisal Tool (complex business logic)
4. Report Generator (high ROI automation)
5. Sales Data Analysis (demonstrates analytical thinking)
6. Outlook Automation (practical workflow automation)
7. Appeal Form Automations (domain-specific solution)
8. ROR 2 Run Report Parser (shows personal interest + technical skill)
9. Texas Property Values (visualization showcase)

Move the `<article>` blocks to match this order.

---

### 7. Restructure Site to Directory-Based Format with Category Navigation

**Overview**: Convert flat `.html` files into a structured directory hierarchy under `/projects/` with category-based organization. This enables clean URLs, category landing pages, and improved navigation.

#### New Directory Structure:

```
Root level:
  /index.html (Home - shows all projects)
  /about/index.html
  /resume.pdf

Projects section:
  /projects/
    index.html (overview page showing all projects)
    
    /automation/
      index.html (category landing + filtered project list)
      /mass-appraisal-tool/
        index.html
      /report-generator/
        index.html
      /outlook-automation/
        index.html
      /appeal-form-automations/
        index.html
    
    /analysis/
      index.html (category landing + filtered project list)
      /sales-analysis/
        index.html
      /ror2-parser/
        index.html
    
    /visualization/
      index.html (category landing + filtered project list)
      /housing-prices/
        index.html
      /texas-property-values/
        index.html
    
    /fullstack/
      index.html (category landing + filtered project list)
      /ticketing-system/
        index.html
```

#### Project-to-Category Mapping:

| Project | Category | Path |
|---------|----------|------|
| Ticketing System | fullstack | `/projects/fullstack/ticketing-system/` |
| Mass Appraisal Tool | automation | `/projects/automation/mass-appraisal-tool/` |
| Report Generator | automation | `/projects/automation/report-generator/` |
| Outlook Automation | automation | `/projects/automation/outlook-automation/` |
| Appeal Form Automations | automation | `/projects/automation/appeal-form-automations/` |
| US Housing Prices | visualization | `/projects/visualization/housing-prices/` |
| Sales Data Analysis | analysis | `/projects/analysis/sales-analysis/` |
| Texas Property Values | visualization | `/projects/visualization/texas-property-values/` |
| ROR 2 Parser | analysis | `/projects/analysis/ror2-parser/` |

**Note**: Each project is assigned to its strongest category. Cross-references can be added via "See also" links on category pages.

---

### 8. Update Navigation with Projects Dropdown

**Files**: `index.html`, `about/index.html`, all case study pages

Replace the current two-link navigation with a dropdown menu:

**Current nav**:
```html
<ul class="links">
    <li class="active"><a href="./">Home</a></li>
    <li><a href="./about">About</a></li>
</ul>
```

**New nav structure** (for `index.html`):
```html
<ul class="links">
    <li class="active"><a href="/">Home</a></li>
    <li>
        <a href="#" class="dropdown-toggle">Projects</a>
        <ul class="dropdown-menu">
            <li><a href="/projects/">All Projects</a></li>
            <li><a href="/projects/automation/">Automation</a></li>
            <li><a href="/projects/analysis/">Analysis</a></li>
            <li><a href="/projects/visualization/">Visualization</a></li>
            <li><a href="/projects/fullstack/">Full-Stack</a></li>
        </ul>
    </li>
    <li><a href="/about/">About</a></li>
</ul>
```

**For category landing pages**, mark the relevant dropdown item as active:
```html
<li>
    <a href="#" class="dropdown-toggle">Projects</a>
    <ul class="dropdown-menu">
        <li><a href="/projects/">All Projects</a></li>
        <li class="active"><a href="/projects/automation/">Automation</a></li>
        <li><a href="/projects/analysis/">Analysis</a></li>
        ...
    </ul>
</li>
```

**For individual case study pages**, mark both the category and project as appropriate:
```html
<!-- Example for ticketing-system page -->
<li>
    <a href="#" class="dropdown-toggle">Projects</a>
    <ul class="dropdown-menu">
        <li><a href="/projects/">All Projects</a></li>
        <li><a href="/projects/automation/">Automation</a></li>
        <li><a href="/projects/analysis/">Analysis</a></li>
        <li><a href="/projects/visualization/">Visualization</a></li>
        <li class="active"><a href="/projects/fullstack/ticketing-system/">Ticketing System</a></li>
    </ul>
</li>
```

---

### 9. Add CSS for Dropdown Navigation

**File**: `assets/css/main.css`

Add styles for the dropdown menu:

```css
/* Dropdown navigation */
#nav .links {
    position: relative;
}

#nav .links li {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--bg-color, #ffffff);
    border: 1px solid var(--border-color, rgba(210, 215, 217, 0.75));
    min-width: 180px;
    z-index: 1000;
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
}

.dropdown-menu li a {
    display: block;
    padding: 0.5em 1em;
    white-space: nowrap;
}

.dropdown-menu li a:hover {
    background: var(--alt-bg, #f5f5f5);
}

/* Show dropdown on hover */
#nav .links li:hover .dropdown-menu {
    display: block;
}

/* Mobile: stack dropdown items */
@media screen and (max-width: 736px) {
    .dropdown-menu {
        position: static;
        border: none;
        padding-left: 1em;
    }
}
```

---

### 10. Migrate Existing Case Study Content to New Structure

**Source files**: Flat `.html` files at root
**Target**: New directory structure under `/projects/`

For each existing case study page (`ticketing-system.html`, `mass-appraisal-tool.html`, etc.):

1. **Create target directory** (e.g., `/projects/fullstack/ticketing-system/`)
2. **Create `index.html`** based on the existing case study template
3. **Update asset paths** from `assets/` to `../../assets/` (two levels up)
4. **Update navigation links** to reflect new structure
5. **Add "View Live" buttons** where applicable:
   - Housing Prices: Link to Streamlit app
   - Texas Property Values: Link to Tableau visualization
   - Others: Link to GitHub repository if no live demo

**Example updated case study template** (for `/projects/fullstack/ticketing-system/index.html`):

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Ticketing System - Osa Musa</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../../assets/css/main.css" />
        <noscript><link rel="stylesheet" href="../../assets/css/noscript.css" /></noscript>
    </head>
    <body class="is-preload">
        <div id="wrapper">
            <header id="header">
                <a href="../../" class="logo">Osa Musa</a>
            </header>
            <nav id="nav">
                <ul class="links">
                    <li><a href="../../">Home</a></li>
                    <li>
                        <a href="#" class="dropdown-toggle">Projects</a>
                        <ul class="dropdown-menu">
                            <li><a href="../">All Projects</a></li>
                            <li><a href="../automation/">Automation</a></li>
                            <li><a href="../analysis/">Analysis</a></li>
                            <li><a href="../visualization/">Visualization</a></li>
                            <li class="active"><a href="./">Ticketing System</a></li>
                        </ul>
                    </li>
                    <li><a href="../../about/">About</a></li>
                </ul>
                <ul class="icons">
                    <li><a href="https://www.linkedin.com/in/osamusa/" target="_blank" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
                    <li><a href="https://github.com/OsaMusa/" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>
            <div id="main">
                <section class="post">
                    <header class="major">
                        <h1>Ticketing System</h1>
                        <p style="text-align: center; font-size: x-large;"><b>Project for: </b>Altus Group</p>
                    </header>
                    
                    <h2>Problem</h2>
                    <p>[Existing problem content]</p>
                    
                    <h2>Solution</h2>
                    <p>[Existing solution content]</p>
                    
                    <h2>Result</h2>
                    <p>[Existing result content]</p>
                    
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Microsoft Forms</li>
                        <li>Power Automate</li>
                        <li>SharePoint</li>
                        <li>Power BI</li>
                    </ul>
                    
                    <ul class="actions special">
                        <li><a href="https://github.com/OsaMusa/[repo-name]" target="_blank" class="button">View Code</a></li>
                        <li><a href="../../projects/fullstack/" class="button">Back to Full-Stack</a></li>
                    </ul>
                </section>
            </div>
            <footer id="footer">
                <!-- Same footer as other pages -->
            </footer>
            <div id="copyright">
                <ul>
                    <li>&copy; Osa Musa</li>
                    <li>Design: <a href="https://html5up.net" target="_blank">HTML5 UP</a></li>
                </ul>
            </div>
        </div>
        <script src="../../assets/js/jquery.min.js"></script>
        <script src="../../assets/js/jquery.scrollex.min.js"></script>
        <script src="../../assets/js/jquery.scrolly.min.js"></script>
        <script src="../../assets/js/browser.min.js"></script>
        <script src="../../assets/js/breakpoints.min.js"></script>
        <script src="../../assets/js/util.js"></script>
        <script src="../../assets/js/main.js"></script>
    </body>
</html>
```

---

### 11. Create Category Landing Pages

**Files**: 
- `/projects/index.html`
- `/projects/automation/index.html`
- `/projects/analysis/index.html`
- `/projects/visualization/index.html`
- `/projects/fullstack/index.html`

Each category landing page should:

1. Use the standard page template with proper navigation
2. Include a brief intro describing the category
3. List all projects in that category with thumbnails
4. Link back to the main projects overview

**Example: `/projects/automation/index.html`**:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Automation Projects - Osa Musa</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../../assets/css/main.css" />
        <noscript><link rel="stylesheet" href="../../assets/css/noscript.css" /></noscript>
    </head>
    <body class="is-preload">
        <div id="wrapper">
            <header id="header">
                <a href="../../" class="logo">Osa Musa</a>
            </header>
            <nav id="nav">
                <ul class="links">
                    <li><a href="../../">Home</a></li>
                    <li>
                        <a href="#" class="dropdown-toggle">Projects</a>
                        <ul class="dropdown-menu">
                            <li><a href="../">All Projects</a></li>
                            <li class="active"><a href="./">Automation</a></li>
                            <li><a href="../analysis/">Analysis</a></li>
                            <li><a href="../visualization/">Visualization</a></li>
                            <li><a href="../fullstack/">Full-Stack</a></li>
                        </ul>
                    </li>
                    <li><a href="../../about/">About</a></li>
                </ul>
                <ul class="icons">
                    <li><a href="https://www.linkedin.com/in/osamusa/" target="_blank" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
                    <li><a href="https://github.com/OsaMusa/" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>
            <div id="main">
                <section class="post">
                    <header class="major">
                        <h1>Automation Projects</h1>
                    </header>
                    <p>
                        These projects focus on streamlining workflows, reducing manual effort, and building tools that save time. 
                        From report generation to calendar management, each automation delivers measurable efficiency gains.
                    </p>
                </section>
                
                <section class="posts">
                    <!-- Mass Appraisal Tool -->
                    <article>
                        <header>
                            <h2>Mass Appraisal Tool</h2>
                        </header>
                        <a href="mass-appraisal-tool/" class="image fit"><img src="../../images/mass-appraisal-tool-pic.jpg" alt="" /></a>
                        <p>A tool using the company's chosen methodologies to valuate properties against an assessor's proposed value.</p>
                        <ul class="actions special">
                            <li><a href="mass-appraisal-tool/" class="button">Learn More</a></li>
                        </ul>
                    </article>
                    
                    <!-- Report Generator -->
                    <article>
                        <header>
                            <h2>Report Generator</h2>
                        </header>
                        <a href="report-generator/" class="image fit"><img src="../../images/report-generator-pic.jpg" alt="" /></a>
                        <p>A macro that transfers data (text, images, charts, etc.) from an Excel workbook to a Word document.</p>
                        <ul class="actions special">
                            <li><a href="report-generator/" class="button">Learn More</a></li>
                        </ul>
                    </article>
                    
                    <!-- Outlook Automation -->
                    <article>
                        <header>
                            <h2>Outlook Automation</h2>
                        </header>
                        <a href="outlook-automation/" class="image fit"><img src="../../images/outlook-automation-pic.jpg" alt="" /></a>
                        <p>A flow that updates consultant Outlook calendars to show upcoming appeal hearings.</p>
                        <ul class="actions special">
                            <li><a href="outlook-automation/" class="button">Learn More</a></li>
                        </ul>
                    </article>
                    
                    <!-- Appeal Form Automations -->
                    <article>
                        <header>
                            <h2>Appeal Form Automations</h2>
                        </header>
                        <a href="appeal-form-automations/" class="image fit"><img src="../../images/appeal-form-automations-pic.jpg" alt="" /></a>
                        <p>A set of automations made for filling out large numbers of appeal forms specific to the assessor and appeal type.</p>
                        <ul class="actions special">
                            <li><a href="appeal-form-automations/" class="button">Learn More</a></li>
                        </ul>
                    </article>
                </section>
            </div>
            <footer id="footer">
                <!-- Footer content -->
            </footer>
            <div id="copyright">
                <ul>
                    <li>&copy; Osa Musa</li>
                    <li>Design: <a href="https://html5up.net" target="_blank">HTML5 UP</a></li>
                </ul>
            </div>
        </div>
        <script src="../../assets/js/jquery.min.js"></script>
        <script src="../../assets/js/jquery.scrollex.min.js"></script>
        <script src="../../assets/js/jquery.scrolly.min.js"></script>
        <script src="../../assets/js/browser.min.js"></script>
        <script src="../../assets/js/breakpoints.min.js"></script>
        <script src="../../assets/js/util.js"></script>
        <script src="../../assets/js/main.js"></script>
    </body>
</html>
```

---

### 12. Update Homepage Links to New Structure

**File**: `index.html`

Update all project card links to point to the new directory structure:

**Before**:
```html
<a href="./ticketing-system" class="image fit">...</a>
<ul class="actions special">
    <li><a href="./ticketing-system" class="button">Full Description</a></li>
</ul>
```

**After**:
```html
<a href="projects/fullstack/ticketing-system/" class="image fit">...</a>
<ul class="actions special">
    <li><a href="projects/fullstack/ticketing-system/" class="button">Full Description</a></li>
</ul>
```

Apply this pattern to all project cards, updating paths to match their category:

| Project | New Link |
|---------|----------|
| Ticketing System | `projects/fullstack/ticketing-system/` |
| Mass Appraisal Tool | `projects/automation/mass-appraisal-tool/` |
| Report Generator | `projects/automation/report-generator/` |
| Outlook Automation | `projects/automation/outlook-automation/` |
| Appeal Form Automations | `projects/automation/appeal-form-automations/` |
| Housing Prices | `projects/visualization/housing-prices/` |
| Sales Data Analysis | `projects/analysis/sales-analysis/` |
| Texas Property Values | `projects/visualization/texas-property-values/` |
| ROR 2 Parser | `projects/analysis/ror2-parser/` |

Also update the featured project link:

**Before**:
```html
<a href="https://github.com/OsaMusa/avg-sfr-val-zip-st" target="_blank" class="image main">...</a>
<ul class="actions special">
    <li><a href="https://average-us-home-value-by-zip.streamlit.app/" target="_blank" class="button">Visit Site</a></li>
    <li><a href="https://github.com/OsaMusa/avg-sfr-val-zip-st" target="_blank" class="button">Visit Repository</a></li>
</ul>
```

**After** (add case study page):
```html
<a href="projects/visualization/housing-prices/" class="image main">...</a>
<ul class="actions special">
    <li><a href="projects/visualization/housing-prices/" class="button">Learn More</a></li>
    <li><a href="https://average-us-home-value-by-zip.streamlit.app/" target="_blank" class="button">Visit Live</a></li>
</ul>
```

---

## LOW PRIORITY

### 13. Optimize Images for Performance

**Directory**: `images/`

**Actions**:
1. Compress all existing images using a tool like TinyPNG, ImageOptim, or Squoosh
2. Convert JPEG/PNG images to WebP format where browser support allows
3. Add `loading="lazy"` attribute to all `<img>` tags that are not in the initial viewport:
   ```html
   <img src="images/ticketing-system-pic.jpg" alt="..." loading="lazy" />
   ```
4. Ensure image dimensions match their display size to avoid unnecessary downloads

---

### 14. Verify Mobile Responsiveness

**Actions**:
1. Test site on multiple screen sizes:
   - 320px (small mobile)
   - 375px (iPhone SE)
   - 768px (tablet)
   - 1024px (small desktop)
2. Check for:
   - Horizontal overflow/scrolling
   - Touch targets minimum 44x44px
   - Text readability without zooming
   - Navigation usability (especially dropdown on mobile)
   - Image scaling
3. Fix any issues found in CSS

---

### 15. Add Dark Mode Toggle

**Files**: `assets/css/main.css`, `index.html`, `about/index.html`, `assets/js/main.js`

#### Step 1: Add CSS custom properties to `assets/css/main.css`

At the top of the file, define light mode variables:

```css
:root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --heading-color: #000000;
    --link-color: #f56a6a;
    --border-color: rgba(210, 215, 217, 0.75);
    --alt-bg: #f5f5f5;
}
```

Add dark mode override:

```css
@media (prefers-color-scheme: dark) {
    :root:not([data-theme]) {
        --bg-color: #1a1a1a;
        --text-color: #c0c0c0;
        --heading-color: #ffffff;
        --link-color: #f56a6a;
        --border-color: rgba(255, 255, 255, 0.2);
        --alt-bg: #2a2a2a;
    }
}

[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #c0c0c0;
    --heading-color: #ffffff;
    --link-color: #f56a6a;
    --border-color: rgba(255, 255, 255, 0.2);
    --alt-bg: #2a2a2a;
}
```

Then replace hardcoded colors throughout the CSS with var() references.

#### Step 2: Add toggle button to header

In both `index.html` and `about/index.html`, add to the `#header` or `#nav` section:

```html
<button id="theme-toggle" aria-label="Toggle dark mode">
    <i class="fa fa-moon-o"></i>
</button>
```

#### Step 3: Add toggle JavaScript to `assets/js/main.js`

```javascript
// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

themeToggle?.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = this.querySelector('i');
    if (newTheme === 'dark') {
        icon.className = 'fa fa-sun-o';
    } else {
        icon.className = 'fa fa-moon-o';
    }
});
```

---

## Implementation Notes

1. **Test after each change**: Deploy to GitHub Pages incrementally and verify changes render correctly
2. **Backup before major edits**: Keep a copy of original files before restructuring
3. **Numbers matter**: For task #2, use real metrics where possible. If exact numbers aren't available, use reasonable estimates
4. **Content accuracy**: For task #5, update with your actual current learning activities
5. **Case study depth**: Focus on storytelling - problem, approach, result - rather than just listing technologies
6. **GitHub Pages deployment**: After making changes, commit and push to trigger GitHub Pages rebuild
7. **Path consistency**: All internal links should use trailing slashes for directories (e.g., `/projects/automation/` not `/projects/automation`)
8. **Asset paths**: Remember that case study pages in subdirectories need `../../` to reach root-level assets

---

## Quick Reference: File Locations

| Task | Primary Files |
|------|--------------|
| 1 | `index.html` |
| 2 | `index.html` |
| 3 | `index.html`, `about/index.html`, `resume.pdf` |
| 4 | `about/index.html` |
| 5 | `about/index.html` |
| 6 | `index.html` |
| 7 | Entire site structure |
| 8 | `index.html`, `about/index.html`, all case study pages |
| 9 | `assets/css/main.css` |
| 10 | All existing `.html` files → new `/projects/` subdirectories |
| 11 | New: `/projects/index.html`, `/projects/*/index.html` |
| 12 | `index.html` |
| 13 | `images/*`, all HTML files with `<img>` tags |
| 14 | `assets/css/main.css` |
| 15 | `assets/css/main.css`, `index.html`, `about/index.html`, `assets/js/main.js` |
