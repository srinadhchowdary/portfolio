# Guardrails Module

## PURPOSE

This document defines all mandatory engineering, UI/UX, architecture, performance, accessibility, responsiveness, and code-quality rules that MUST always be followed while building the portfolio application.

These guardrails are STRICT and NON-NEGOTIABLE.

---

# GLOBAL DEVELOPMENT RULES

## ALWAYS

- Build production-ready code
- Use React 18 best practices
- Use functional components only
- Use hooks-based architecture
- Keep components reusable
- Maintain modular folder structure
- Prioritize responsiveness
- Prioritize accessibility
- Optimize performance
- Write scalable code
- Maintain clean architecture
- Use reusable constants/configuration
- Use semantic HTML
- Use modern UI standards

---

# STRICTLY PROHIBITED

## NEVER

- Use class-based React components
- Write duplicate code
- Create gigantic components
- Hardcode repeated styles
- Ignore accessibility standards
- Ignore responsive behavior
- Use outdated React patterns
- Use inline styles excessively
- Create unnecessary nested components
- Mix inconsistent UI libraries visually
- Overuse animations
- Use poor naming conventions
- Create tightly coupled components
- Use random color palettes
- Ignore loading optimization
- Ignore SEO-friendly structure
- Leave unused imports or dead code
- Break responsive layouts
- Use inconsistent spacing
- Use inconsistent typography

---

# ARCHITECTURE GUARDRAILS

## COMPONENT RULES

- Components must be small and focused
- Each component should have a single responsibility
- Separate logic from UI
- Use reusable layout wrappers
- Keep business logic reusable
- Reuse shared utilities

---

## FOLDER STRUCTURE RULES

Maintain this structure strictly:

src/
 ├── assets/
 ├── animations/
 ├── components/
 ├── constants/
 ├── data/
 ├── hooks/
 ├── layouts/
 ├── pages/
 ├── routes/
 ├── sections/
 ├── services/
 ├── styles/
 ├── utils/

---

## STATE MANAGEMENT RULES

- Avoid unnecessary global state
- Keep local state localized
- Prevent prop drilling where possible
- Use reusable hooks

---

# RESPONSIVENESS GUARDRAILS

## MOBILE-FIRST RULES

The application MUST:
- Work perfectly on 320px screens
- Scale smoothly to large monitors
- Prevent horizontal overflow
- Maintain readable typography
- Maintain proper spacing

---

## RESPONSIVE DESIGN RULES

ALWAYS:
- Use flexible layouts
- Use CSS Grid/Flexbox
- Use responsive Chakra props
- Test tablet responsiveness
- Test mobile navigation

NEVER:
- Use fixed-width layouts
- Break layouts on smaller screens
- Allow content clipping
- Create oversized buttons/text

---

# UI/UX GUARDRAILS

## DESIGN RULES

The UI must feel:
- Modern
- Minimal
- Elegant
- Premium
- Professional
- Clean

---

## VISUAL RULES

ALWAYS:
- Maintain consistent spacing
- Use proper visual hierarchy
- Use balanced whitespace
- Use clean typography
- Use accessible contrast ratios

NEVER:
- Overcrowd layouts
- Use too many colors
- Use heavy shadows everywhere
- Use distracting gradients
- Create inconsistent card designs

---

# ANIMATION GUARDRAILS

## ANIMATION RULES

Use Framer Motion carefully.

Animations must:
- Be subtle
- Be smooth
- Improve UX
- Feel premium
- Maintain performance

---

## PROHIBITED ANIMATIONS

NEVER:
- Add flashy animations
- Use excessive motion
- Add long delays
- Create animation spam
- Block interaction with animations

---

# ACCESSIBILITY GUARDRAILS

## ACCESSIBILITY RULES

ALWAYS:
- Use semantic HTML
- Add aria-labels
- Maintain keyboard navigation
- Ensure focus visibility
- Use accessible forms
- Maintain readable contrast

---

## FORM ACCESSIBILITY

Forms must:
- Have labels
- Have validation feedback
- Support keyboard usage
- Have accessible placeholders

---

# PERFORMANCE GUARDRAILS

## PERFORMANCE RULES

ALWAYS:
- Lazy load heavy sections
- Optimize rendering
- Optimize images/assets
- Avoid unnecessary re-renders
- Split large components
- Maintain fast load times

---

## TARGETS

- Lighthouse Score > 90
- Fast first paint
- Smooth scrolling
- Low layout shifts

---

# CODE QUALITY GUARDRAILS

## CLEAN CODE RULES

ALWAYS:
- Use meaningful naming
- Keep functions focused
- Use reusable utilities
- Write readable code
- Maintain consistent formatting

---

## PROHIBITED CODE PRACTICES

NEVER:
- Leave dead code
- Leave commented-out code
- Create duplicate logic
- Write giant functions
- Hardcode magic values
- Create tightly coupled modules

---

# CONTACT FORM GUARDRAILS

## EMAILJS RULES

The contact form MUST:
- Validate inputs
- Prevent duplicate submissions
- Show loading states
- Show success/error feedback
- Handle failures gracefully

---

## SECURITY RULES

NEVER:
- Expose sensitive credentials
- Hardcode secrets
- Trust client-side validation alone

---

# CONTENT GUARDRAILS

## CONTENT STYLE

Content must be:
- Professional
- Concise
- Recruiter-friendly
- Technical
- Modern

---

## CONTENT RULES

NEVER:
- Use large text blocks
- Use weak descriptions
- Add unnecessary filler content
- Use poor grammar
- Use outdated terminology

---

# FINAL DELIVERY STANDARDS

The final portfolio MUST be:

- Production-ready
- Highly responsive
- Modern
- Elegant
- Fast
- Accessible
- Clean
- Scalable
- Recruiter-friendly
- Performance optimized

The project should feel like a premium modern software engineer portfolio.