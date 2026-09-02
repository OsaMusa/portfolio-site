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

### 3. Add Downloadable Resume Link ✅ COMPLETE

**Status**: Resume download button added in header nav and footer on both pages. CSS specificity issue resolved to ensure the button appears white as intended.

**Files**: `index.html`, `about/index.html`, `assets/css/main.css`

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

**Step 4 (PENDING)**: Change resume button color to match inactive nav link text color (`#ffffff`).

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

### 8. Update Navigation with Projects Dropdown ✅ COMPLETE

**Status**: HTML structure implemented across all pages. Dropdown uses category-based navigation with nested active project display. When viewing a case study page, the parent category is shown as active with the current project nested beneath it as a submenu item. This keeps the dropdown compact and scalable.

**Files**: `index.html`, `about/index.html`, all case study pages

Dropdown menu structure for homepage and about page:
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

For case study pages (example: automation/mass-appraisal-tool):
```html
<ul class="links">
    <li><a href="../../../">Home</a></li>
    <li>
        <a href="#" class="dropdown-toggle">Projects</a>
        <ul class="dropdown-menu">
            <li><a href="../../">All Projects</a></li>
            <li class="active">
                <a href="../">Automation</a>
                <ul class="dropdown-submenu">
                    <li class="active"><a href="./">Mass Appraisal Tool</a></li>
                </ul>
            </li>
            <li><a href="../../analysis/">Analysis</a></li>
            <li><a href="../../visualization/">Visualization</a></li>
            <li><a href="../../fullstack/">Full-Stack</a></li>
        </ul>
    </li>
    <li><a href="../../../about/">About</a></li>
</ul>
```

---

### 9. Add CSS for Dropdown Navigation ✅ COMPLETE

**Status**: CSS rules added to `main.css` including z-index fix (`#nav { z-index: 3; }` to render above `#main`), `overflow: visible` on `#nav`, and dropdown hover styles. Nested submenu styling added for active project display under parent category.

**File**: `assets/css/main.css`

Styles for the dropdown menu:

```css
/* Dropdown navigation */
#nav ul.links li {
    position: relative;
}

#nav ul.links li .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    border: 1px solid rgba(210, 215, 217, 0.75);
    min-width: 180px;
    z-index: 9999;
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
    flex-direction: column;
}

#nav ul.links li .dropdown-menu li a {
    display: block;
    padding: 0.5em 1em;
    white-space: nowrap;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-weight: 900;
    color: #1e252d;
}

#nav ul.links li .dropdown-menu li a:hover {
    background: #f5f5f5;
    color: #18bfef !important;
}

/* Active category and submenu styles */
#nav ul.links li .dropdown-menu li.active > a {
    color: #18bfef !important;
}

#nav ul.links li .dropdown-menu li .dropdown-submenu {
    list-style: none;
    padding: 0;
    margin: 0;
}

#nav ul.links li .dropdown-menu li .dropdown-submenu li a {
    padding-left: 2em;
    font-weight: 400;
    text-transform: none;
    font-size: 0.75rem;
}

/* Show dropdown on hover */
#nav ul.links li:hover .dropdown-menu {
    display: block;
}

/* Mobile: stack dropdown items */
@media screen and (max-width: 736px) {
    #nav ul.links li .dropdown-menu {
        position: static;
        border: none;
        padding-left: 1em;
    }

    #nav ul.links li .dropdown-menu li .dropdown-submenu li a {
        padding-left: 3em;
    }
}
```

Key fixes applied:
- `#nav { overflow: visible; }` - Allows dropdown to extend below nav bar
- `#nav { z-index: 3; }` - Ensures nav renders above `#main` content area
- `.dropdown-submenu` styles - Indented, smaller font for nested project items

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
        
        <!-- Wrapper -->
        <div id="wrapper">
            
            <!-- Header -->
            <div id="header-placeholder"></div>

            <!-- Nav -->
            <div id="nav-placeholder"></div>

            <!-- Main -->
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
                        <a href="mass-appraisal-tool/" class="image fit"><img src="../../assets/images/mass-appraisal-tool-pic.jpg" alt="" /></a>
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
                        <a href="report-generator/" class="image fit"><img src="../../assets/images/report-generator-pic.jpg" alt="" /></a>
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
                        <a href="outlook-automation/" class="image fit"><img src="../../assets/images/outlook-automation-pic.jpg" alt="" /></a>
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
                        <a href="appeal-form-automations/" class="image fit"><img src="../../assets/images/appeal-form-automations-pic.jpg" alt="" /></a>
                        <p>A set of automations made for filling out large numbers of appeal forms specific to the assessor and appeal type.</p>
                        <ul class="actions special">
                            <li><a href="appeal-form-automations/" class="button">Learn More</a></li>
                        </ul>
                    </article>
                </section>
            </div>
            
            <!-- Footer -->
            <div id="header-placeholder"></div>
        </div>

        <!-- Scripts -->
        <script src="../../assets/js/jquery.min.js"></script>
        <script src="../../assets/js/jquery.scrollex.min.js"></script>
        <script src="../../assets/js/jquery.scrolly.min.js"></script>
        <script src="../../assets/js/browser.min.js"></script>
        <script src="../../assets/js/breakpoints.min.js"></script>
        <script src="../../assets/js/util.js"></script>
        <script src="../../assets/js/main.js"></script>
        <script src="../../assets/js/components.js"></script>
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

### 13. Migrate About Page to Directory Format

**Current file**: `about.html`
**Target**: `/about/index.html`

1. Create `/about/` directory
2. Move `about.html` → `/about/index.html`
3. Update navigation links in all files:
   - `./about` → `/about/`
   - `../about/` stays the same for nested pages
4. Update internal asset paths if needed (should remain `../assets/` from within `/about/index.html`)

---

### 14. Define Projects Overview Page Content

**File**: `/projects/index.html`

Create a comprehensive overview page that:

1. **Mirrors the homepage project grid** with all projects listed
2. **Adds introductory content** at the top explaining the projects section
3. **Groups projects by category** visually with section headers
4. **Includes quick links** to each category landing page

**Content structure**:
```html
<section class="post">
    <header class="major">
        <h1>All Projects</h1>
    </header>
    <p>
        Browse my portfolio organized by category. Each project demonstrates different skills 
        and approaches to solving real-world problems with data and automation.
    </p>
    <ul class="actions special">
        <li><a href="automation/">View Automation Projects</a></li>
        <li><a href="analysis/">View Analysis Projects</a></li>
        <li><a href="visualization/">View Visualization Projects</a></li>
        <li><a href="fullstack/">View Full-Stack Projects</a></li>
    </ul>
</section>

<!-- Then show all projects grouped by category -->
<h2>Automation</h2>
<section class="posts">
    <!-- Automation projects here -->
</section>

<h2>Analysis</h2>
<section class="posts">
    <!-- Analysis projects here -->
</section>

<!-- etc. -->
```

---

### 15. Create Missing Case Study Pages

**Original scope**: 4 missing case study pages

**Decision**: After review, 3 projects were removed from the portfolio:
- ~~**Sales Data Analysis**~~ — Removed (practice project from early learning phase, basic EDA)
- ~~**Texas Property Values**~~ — Removed (similar scope to Housing Prices, redundant)
- ~~**ROR 2 Run Report Parser**~~ — Removed (personal project, not relevant to professional portfolio)

**Remaining**: 1 case study to create
- **US Housing Prices by ZIP** → `/projects/visualization/housing-prices/index.html`

**Additional cleanup completed**:
- Removed "Analysis" category from `projects.json` (now empty)
- Removed "Analysis" link from navigation dropdown
- Deleted `/projects/analysis/` directory
- Orphaned project images were already deleted

Use the same template as existing case studies, including:
- Problem statement
- Solution approach
- Technologies used
- Results & impact metrics
- "View Live" or "View Code" buttons where applicable

---

## LOW PRIORITY

### 16. Optimize Images for Performance

**Directory**: `assets/images/`

**Actions**:
1. Compress all existing images using a tool like TinyPNG, ImageOptim, or Squoosh
2. Convert JPEG/PNG images to WebP format where browser support allows
3. Add `loading="lazy"` attribute to all `<img>` tags that are not in the initial viewport:
   ```html
   <img src="assets/images/ticketing-system-pic.jpg" alt="..." loading="lazy" />
   ```
4. Ensure image dimensions match their display size to avoid unnecessary downloads

---

### 17. Verify Mobile Responsiveness

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

### 18. Add Dark Mode Toggle

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

## LOWEST PRIORITY

### 19. Add SEO Meta Tags and Structured Data

**Files**: All HTML pages (`index.html`, `about/index.html`, all case study pages)

#### Page-Specific Meta Descriptions

Add unique `<meta name="description">` tags to each page:

**Homepage**:
```html
<meta name="description" content="Portfolio of Osa Musa, a Data Analyst specializing in automation and business intelligence. View projects in Power BI, Python, SQL, and workflow automation." />
```

**About Page**:
```html
<meta name="description" content="Learn about Osa Musa's background in insurance analytics, technical skills, and professional experience as a Business Analyst and Data Analyst." />
```

**Case Study Pages**:
```html
<meta name="description" content="Case study: Ticketing System built with Microsoft Forms, Power Automate, and Power BI to track issues and automate status notifications." />
```

#### Open Graph Tags for Social Sharing

Add to `<head>` of each page:

```html
<meta property="og:title" content="Osa Musa - Data Analyst Portfolio" />
<meta property="og:description" content="View my portfolio of data analysis and automation projects." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://osamusa.github.io/portfolio-site/" />
<meta property="og:image" content="https://osamusa.github.io/portfolio-site/assets/images/[page-specific-image].jpg" />
```

#### Structured Data (JSON-LD)

Add to homepage `<head>`:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Osa Musa",
    "jobTitle": "Data Analyst",
    "url": "https://osamusa.github.io/portfolio-site/",
    "sameAs": [
        "https://www.linkedin.com/in/osamusa/",
        "https://github.com/OsaMusa/"
    ],
    "knowsAbout": ["Data Analysis", "Business Intelligence", "Process Automation", "Power BI", "Python", "SQL"]
}
</script>
```

---

### 20. Create Custom 404 Page

**File**: `/404.html`

GitHub Pages automatically serves `404.html` for missing pages. Create a helpful error page:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Page Not Found - Osa Musa</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
    </head>
    <body class="is-preload">
        <div id="wrapper">
            <header id="header">
                <a href="./" class="logo">Osa Musa</a>
            </header>
            <nav id="nav">
                <ul class="links">
                    <li><a href="/">Home</a></li>
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
            </nav>
            <div id="main">
                <section class="post">
                    <header class="major">
                        <h1>Page Not Found</h1>
                    </header>
                    <p>Sorry, the page you're looking for doesn't exist. It may have been moved or the URL might be incorrect.</p>
                    <p>Here are some helpful links:</p>
                    <ul>
                        <li><a href="/">Return to Home</a></li>
                        <li><a href="/projects/">Browse All Projects</a></li>
                        <li><a href="/about/">Learn About Me</a></li>
                    </ul>
                </section>
            </div>
            <footer id="footer">
                <!-- Footer content -->
            </footer>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/main.js"></script>
    </body>
</html>
```

---

### 21. Migrate to Cloudflare Pages with GitHub Actions

**Goal**: Move hosting from GitHub Pages to Cloudflare Pages to enable making the repository private.

**Deployment method**: Use GitHub Actions workflow instead of Cloudflare's direct Git integration (avoids counting against the 500 builds/month limit).

#### Setup Steps:

1. **Create GitHub Actions workflow** at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to Cloudflare Pages
   
   on:
     push:
       branches:
         - main
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Deploy to Cloudflare Pages
           uses: cloudflare/pages-action@v1
           with:
             apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
             accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
             projectName: your-project-name
             directory: .
   ```

2. **Create Cloudflare Pages project**:
   - Go to Cloudflare dashboard > Workers & Pages > Pages
   - Choose "Direct upload" (not "Connect to Git")
   - Name the project (becomes `your-project-name.pages.dev`)
   - Note the Account ID from the Pages overview

3. **Create Cloudflare API token**:
   - My Profile > API Tokens > Create Token
   - Permissions needed: Account > Cloudflare Pages > Edit
   - Copy the token

4. **Add GitHub repository secrets**:
   - Settings > Secrets and variables > Actions
   - `CLOUDFLARE_API_TOKEN` — the API token
   - `CLOUDFLARE_ACCOUNT_ID` — from Cloudflare dashboard

5. **Make repository private**:
   - After first successful deployment, change repo visibility to private
   - GitHub Actions workflows continue to work with private repos on free tier

6. **Test deployment**:
   - Push to main branch triggers automatic deployment
   - Verify site at `your-project-name.pages.dev`
   - Test all navigation paths and page loads

**Notes**:
- No build process needed (static site)
- Deploy directory is `.` (root)
- Downtime is acceptable since site is under active development

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
9. **SEO is ongoing**: Task #19 provides baseline SEO; continue adding meta descriptions as new projects are created
10. **Priority order**: Complete HIGH PRIORITY tasks first (1-6), then MEDIUM (7-15), then LOW (16-18), then LOWEST (19-21)

---

## QUICK STATUS SUMMARY

| Task | Status | Notes |
|------|--------|-------|
| 1. Hero Section | ✅ Complete | Value proposition updated |
| 2. Impact Metrics | ✅ Complete | Added to all project cards |
| 3. Resume Link | ✅ Complete | Button added and CSS fixed |
| 4. Skills Section | ✅ Complete | Added to About page |
| 5. Current Focus | ✅ Complete | Added to About page |
| 6. Project Reorder | ✅ Complete | Reordered by impact |
| 7. Directory Structure | ✅ Complete | `/projects/` hierarchy created |
| 8. Nav Dropdown HTML | ✅ Complete | Category-based dropdown with nested active project display |
| 9. Nav Dropdown CSS | ✅ Complete | Z-index fix, overflow visible, submenu styles added |
| 10. Case Study Migration | ✅ Complete | 5 existing case studies migrated |
| 11. Category Landing Pages | ✅ Complete | Created 3 category pages (automation, visualization, fullstack) with JS-driven rendering from projects.json. Impact indicators added to all cards. Homepage converted to data-driven rendering with featured project + top grid projects controlled by homepageOrder field. Analysis category removed (empty after project cleanup). |
| 12. Homepage Links | ✅ Complete | Updated to new directory paths |
| 13. About Page Migration | ✅ Complete | Moved to `/about/index.html` |
| 14. Projects Overview Content | ✅ Complete | Created `/projects/index.html` with dynamic category cards loaded from `projects.json`. Intro text hardcoded on page; categories rendered with description, project count, and link to category landing page. |
| 15. Missing Case Studies | ✅ Complete | 3 projects removed (not portfolio-worthy); case study created for US Housing Prices by ZIP |
| 16. Image Optimization | ✅ Complete | Created Node.js compression script (scripts/compress-images.js) that auto-processes all images, skips bg.jpg/overlay.png, uses 1200px for featured images (detected by filename), 800px for others. Added loading="lazy" to all non-featured images in components.js. User needs to run `pnpm install` in scripts/ folder, then `pnpm compress`. Use `pnpm compress:featured <image-name>` to mark an image as featured. |
| 17. Mobile Responsiveness | ❌ Not Started | Test and fix across breakpoints |
| 18. Dark Mode Toggle | ❌ Not Started | Add theme toggle with CSS custom properties |
| 19. SEO Meta Tags | ❌ Not Started | Add meta descriptions, Open Graph tags, structured data |
| 20. Custom 404 Page | ❌ Not Started | Create helpful error page at `/404.html` |
| 21. Cloudflare Pages Migration | ❌ Not Started | Defer until improvement list complete — switch from GitHub Pages to enable private repo |

**Core structural migration is ~75% complete.** The site has the correct directory structure, migrated case studies, updated homepage links, fully functional dropdown navigation with category-based organization, and a projects overview page that dynamically renders all categories. Portfolio trimmed from 9 to 6 projects after assessment. All case studies complete. Next priorities: image optimization, mobile responsiveness testing, and dark mode toggle. Cloudflare Pages migration deferred until all improvements are complete.
