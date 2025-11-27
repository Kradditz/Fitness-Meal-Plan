# FitJourney – Fitness & Meal Plan Website

Multi-page responsive website built for **CPTR 331 – Assignment 5**.  
FitJourney helps users pick a training plan, follow matching workouts, see simple meal ideas, read success stories, and contact the “trainer”.

The site is deployed on **GitHub Pages** here:

> https://kradditz.github.io/fitness-plan-and-mal/

---

## 1. Project Overview

FitJourney is a small front-end project that demonstrates:

- Clean multi-page layout using **Skeleton CSS** + custom CSS.
- Consistent navigation and branding across pages.
- Basic JavaScript for:
  - BMI & calorie estimation.
  - Smooth scrolling and small UX enhancements.
- HTML5 form validation on the contact page.
- Basic performance optimisations (lazy loading, CDN via GitHub Pages).

The project is purely front-end (no real backend).  
All data (plans, workouts, testimonials) is static and hard-coded.

---

## 2. Pages & Functionality

### 2.1 Home (`index.html`)
- Hero section with **background image** and call-to-action.
- Short overview of:
  - Workouts
  - Nutrition
  - Tracking (BMI & calories)
- Button that links directly to the “Plans” page.

### 2.2 Plans (`plans.html`)
- Three main training plans:
  - **Starter Plan**
  - **Fat Loss Focus**
  - **Muscle Gain**
- Each plan is displayed as a **clickable card**:
  - Hover effects and teal highlight.
  - Clicking a card takes the user to the **matching workouts section** on the Workouts page (via URL hash).
- Extra explanation section describing how to choose a plan.

### 2.3 Workouts (`workouts.html`)
- “Workouts by Plan” cards:
  - Starter, Fat Loss Focus, Muscle Gain.
- When opened from a specific plan, the related workout card is visually highlighted.
- Each card:
  - Shows weekly frequency.
  - Lists example exercises and training split.
  - Includes a small note about effort and expectations.

### 2.4 Nutrition & Tools (`nutrition.html`)
- Two sample day meal templates:
  - Muscle Gain day.
  - Fat Loss day.
- Basic meal ideas (no strict diet) to match the plans.
- **BMI & Calorie Estimator**:
  - Inputs: height, weight, age, sex, activity level.
  - Calculates:
    - BMI with category (underweight / normal / etc.).
    - Estimated daily calories for:
      - Maintenance
      - Fat loss
      - Muscle gain
  - Results are shown in **larger, easy-to-read boxes**.

### 2.5 Testimonials / Success Stories (`testimonials.html`)
- Three success story cards:
  - **Jade – Starter Plan**
  - **Andre – Fat Loss Focus**
  - **Leah – Muscle Gain**
- Each card:
  - Circular avatar image.
  - Short quote.
  - Card hover effect.
  - Clicking a card smooth-scrolls to an **expanded story section** on the same page.
- Expanded story sections include:
  - Larger but constrained images (with shadows).
  - More detailed text of each person’s journey.
- CTA row:
  - “Want to be the next success story?” + **View Plans** button.

### 2.6 Contact (`contact.html`)
- Simple contact form with HTML5 validation:
  - **Full Name** (required)
  - **Email** (required, type="email")
  - **Address** (required)
  - **Telephone** (required, type="tel")
  - **Message** (required)
- Form is marked `novalidate` in HTML and handled via JavaScript to:
  - Show a feedback message area.
  - Demonstrate validation logic for the assignment.
- All fields are full-width and styled using Skeleton.

---

## 3. Navigation & Layout

- Fixed top navigation bar:
  - Stays visible while scrolling.
  - Contains links: **Home, Plans, Workouts, Nutrition, Testimonials, Contact**.
  - Active page link is highlighted in teal.
- Shared header and footer across all pages.
- **Responsive design**:
  - Layout is built with Skeleton’s grid (`.container`, `.row`, `.columns`).
  - Cards stack vertically on smaller screens.
  - Hero and images resize appropriately.

---

## 4. Technologies Used

- **HTML5**
- **CSS3**
  - [Normalize.css](https://necolas.github.io/normalize.css/)
  - [Skeleton CSS 2.0.4](http://getskeleton.com/)
  - Custom `css/style.css` for:
    - Fixed header
    - Cards
    - Hero section
    - Testimonials layout
    - BMI result boxes
- **JavaScript**
  - `js/main.js` – shared scripts (BMI & calorie calculator, year in footer, etc.).
  - `js/form-validation.js` – contact form validation logic.

---

## 5. Performance & Optimisations

### 5.1 Lazy Loading

To reduce initial load and improve Lighthouse performance:

- Non-critical images (especially those **below the fold**) use:

```html
<img src="img/jade.png"
     alt="Jade after completing the Starter Plan"
     class="story-photo"
     loading="lazy">
