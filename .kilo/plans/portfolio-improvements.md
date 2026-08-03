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

### 7. Create Detailed Case Study Pages

**Files**: New directories and files

For the top 3 projects, create dedicated detail pages:

#### Structure:
```
ticketing-system/
  index.html
mass-appraisal-tool/
  index.html
report-generator/
  index.html
```

#### Template for each case study page:

Create a new file based on the `about/index.html` structure but with project-specific content:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>[Project Name] - Osa Musa</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../assets/css/main.css" />
        <noscript><link rel="stylesheet" href="../assets/css/noscript.css" /></noscript>
    </head>
    <body class="is-preload">
        <div id="wrapper">
            <header id="header">
                <a href="../" class="logo">Osa Musa</a>
            </header>
            <nav id="nav">
                <ul class="links">
                    <li><a href="../">Home</a></li>
                    <li><a href="../about">About</a></li>
                    <li class="active"><a href="./">[Project Name]</a></li>
                </ul>
                <ul class="icons">
                    <li><a href="https://www.linkedin.com/in/osamusa/" target="_blank" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
                    <li><a href="https://github.com/OsaMusa/" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>
            <div id="main">
                <section class="post">
                    <header class="major">
                        <h1>[Project Name]</h1>
                    </header>
                    
                    <h2>Problem Statement</h2>
                    <p>[Describe the problem this project solved]</p>
                    
                    <h2>Solution Approach</h2>
                    <p>[Explain how you approached solving the problem]</p>
                    
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>[Technology 1]</li>
                        <li>[Technology 2]</li>
                    </ul>
                    
                    <h2>Implementation Details</h2>
                    <p>[Key implementation details, architecture decisions]</p>
                    
                    <h2>Challenges Overcome</h2>
                    <p>[Describe specific challenges and how you addressed them]</p>
                    
                    <h2>Results & Impact</h2>
                    <p>[Quantified results, metrics, business impact]</p>
                    
                    <h2>Code Sample</h2>
                    <pre><code>[Insert relevant code snippet]</code></pre>
                    
                    <ul class="actions special">
                        <li><a href="[live-demo-url]" class="button">View Live</a></li>
                        <li><a href="[github-repo-url]" class="button">View Code</a></li>
                        <li><a href="../" class="button">Back to Home</a></li>
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
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/js/jquery.scrollex.min.js"></script>
        <script src="../assets/js/jquery.scrolly.min.js"></script>
        <script src="../assets/js/browser.min.js"></script>
        <script src="../assets/js/breakpoints.min.js"></script>
        <script src="../assets/js/util.js"></script>
        <script src="../assets/js/main.js"></script>
    </body>
</html>
```

Fill in project-specific content for each of the three case studies.

---

### 8. Add Project Filtering by Category

**Files**: `index.html`, `assets/js/main.js`

#### Step 1: Add category data attributes to each article in `index.html`

Modify each `<article>` in the `.posts` section to include a `data-category` attribute:

```html
<article data-category="fullstack">
    <header>
        <h2>Ticketing System</h2>
    </header>
    ...
</article>

<article data-category="automation">
    <header>
        <h2>Mass Appraisal Tool</h2>
    </header>
    ...
</article>

<article data-category="automation">
    <header>
        <h2>Report Generator</h2>
    </header>
    ...
</article>

<article data-category="automation">
    <header>
        <h2>Outlook Automation</h2>
    </header>
    ...
</article>

<article data-category="automation">
    <header>
        <h2>Appeal Form Automations</h2>
    </header>
    ...
</article>

<article data-category="analysis">
    <header>
        <h2>ROR 2 Run Report Parser</h2>
    </header>
    ...
</article>

<article data-category="analysis">
    <header>
        <h2>Sales Data Analysis</h2>
    </header>
    ...
</article>

<article data-category="visualization">
    <header>
        <h2>Texas Property Values</h2>
    </header>
    ...
</article>
```

Categories: `fullstack`, `automation`, `analysis`, `visualization`

#### Step 2: Add filter buttons above the posts section

In `index.html`, before `<section class="posts">`, add:

```html
<div class="project-filters">
    <ul class="actions">
        <li><a href="#" class="button small active" data-filter="all">All</a></li>
        <li><a href="#" class="button small" data-filter="automation">Automation</a></li>
        <li><a href="#" class="button small" data-filter="analysis">Analysis</a></li>
        <li><a href="#" class="button small" data-filter="visualization">Visualization</a></li>
        <li><a href="#" class="button small" data-filter="fullstack">Full-Stack</a></li>
    </ul>
</div>
```

#### Step 3: Add filtering JavaScript to `assets/js/main.js`

Append to the end of `main.js`:

```javascript
// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.project-filters a[data-filter]');
    const articles = document.querySelectorAll('.posts article');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            articles.forEach(article => {
                if (filter === 'all' || article.getAttribute('data-category') === filter) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});
```

#### Step 4: Add basic styling (optional, in `assets/css/main.css`)

```css
.project-filters {
    margin-bottom: 2em;
    text-align: center;
}

.project-filters .button.active {
    background-color: #f56a6a; /* Adjust to match your theme */
    color: white;
}
```

---

## LOW PRIORITY

### 9. Optimize Images for Performance

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

### 10. Verify Mobile Responsiveness

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
   - Navigation usability
   - Image scaling
3. Fix any issues found in CSS

---

### 11. Add Dark Mode Toggle

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
5. **Case study depth**: For task #7, focus on storytelling - problem, approach, result - rather than just listing technologies
6. **GitHub Pages deployment**: After making changes, commit and push to trigger GitHub Pages rebuild

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
| 7 | New: `ticketing-system/index.html`, `mass-appraisal-tool/index.html`, `report-generator/index.html` |
| 8 | `index.html`, `assets/js/main.js`, `assets/css/main.css` |
| 9 | `images/*`, all HTML files with `<img>` tags |
| 10 | `assets/css/main.css` |
| 11 | `assets/css/main.css`, `index.html`, `about/index.html`, `assets/js/main.js` |
