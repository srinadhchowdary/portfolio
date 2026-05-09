# portfolio-update-prompt.md

## Objective

Apply the following UI/UX refinements and structural improvements to the portfolio while maintaining a modern, professional, responsive, and production-ready appearance.

---

# 1. Home Section Photo Update

## Requirements

1. In the Home/Hero section photo area, add the text:
   "@B.srinadh"
2. Position it professionally near the profile image.
3. The username should look modern and aesthetically aligned with the portfolio theme.
4. Use subtle styling:

   * clean typography
   * proper spacing
   * elegant appearance
5. Ensure responsiveness across all screen sizes.

---

# 2. Improve Paragraph/Text Visibility Across All Pages

## Problem

Currently, paragraph and sentence colors are blending with the background, reducing readability.

## Requirements

1. Refactor text colors across all pages:

   * Home
   * Projects
   * Certifications
   * Experience
   * Education
   * Skills
   * Contact/Footer
2. Ensure text color contrasts properly with background colors.
3. Improve readability and accessibility.
4. Maintain a professional and modern color palette.
5. Differentiate:

   * headings
   * subheadings
   * paragraph text
6. Ensure all text remains clearly visible in both dark/light sections.
7. Avoid low-contrast font colors.

---

# 3. Header Navbar & Footer Color Consistency

## Requirements

1. The Header/Navbar background color and Footer "Address Me / Contact / Mailing" section color should be exactly the same.
2. Maintain consistent visual branding between Header and Footer.
3. Ensure the chosen color:

   * looks professional
   * improves readability
   * matches the portfolio theme
4. Keep hover states visually consistent as well.

---

# 4. Education / Experience / Skills Section Restructuring

## Objective

Each major section should visually appear as its own independent parent component.

## Requirements

### Parent Container Structure

The following sections should each have:

* one clearly visible outer container/card
* proper border radius
* shadow/elevation
* spacing from other sections

Apply this structure to:

* Education
* Experience
* Skills

### Internal Child Cards

Inside each parent component:

* individual entries/items should appear as smaller child cards/components
* maintain proper spacing between child cards
* use consistent styling

### Example Structure

Experience Section:
[ Parent Experience Container ]
├── Experience Card 1
├── Experience Card 2
└── Experience Card 3

Education Section:
[ Parent Education Container ]
├── Education Card 1
└── Education Card 2

Skills Section:
[ Parent Skills Container ]
├── Frontend Skills
├── Backend Skills
└── Tools & Platforms

### Styling Requirements

1. Outer parent sections should visibly stand apart from the page background.
2. Border radius should clearly differentiate parent and child containers.
3. Add subtle shadows/elevation.
4. Maintain clean spacing and alignment.
5. Improve section hierarchy and visual grouping.
6. Maintain responsive behavior across all screen sizes.
7. Use professional modern card styling.

---

# Final Expectations

The updated portfolio should:

* improve readability significantly
* maintain consistent theming
* have better section grouping
* look visually structured
* feel modern and premium
* maintain clean responsive UI/UX
* clearly separate parent sections and child components
