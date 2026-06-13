# SGSC Company Site Design

Date: 2026-06-13

## Goal

Build a responsive corporate website for SGSC, an aerospace and defense company focused on aircraft platform and airframe-related products. The site should emphasize company credibility, defense-grade technical capability, and a concise product overview.

## Decisions

- Site type: corporate introduction site.
- Industry: aerospace and defense.
- Product focus: aircraft platform and airframe-related products.
- Visual direction: defense technology credibility.
- Language support: Korean and English language toggle.
- Product detail level: simple product cards.
- Technical approach: React/Vite single page app.

## Page Structure

The site is a single page app with these sections:

1. Hero
   - SGSC brand signal.
   - Aerospace and defense positioning.
   - Primary message about mission-ready aircraft platform technology.
   - CTA for product overview or contact.

2. Capabilities
   - Core capabilities such as development, manufacturing, integration, and lifecycle support.
   - Short, credibility-focused copy rather than long marketing text.

3. Products
   - Simple card layout.
   - Each card includes product name, one-line description, category label, and a visual placeholder.
   - Initial placeholder products:
     - Airframe Structure Module
     - Mission Platform Assembly
     - UAV Platform Component
     - Aircraft Integration Kit

4. About
   - Short company introduction.
   - Emphasis on reliability, technical execution, and platform-level capability.

5. Contact
   - Business inquiry call to action.
   - Use `mailto:` rather than a non-functional form.
   - If no real address is provided, use a clearly replaceable placeholder such as `contact@sgsc.co.kr`.

6. Footer
   - SGSC name.
   - Small navigation links.
   - Copyright line.

## Visual Design

The design should feel restrained, technical, and credible.

- Main palette: dark navy, charcoal, white text, calm blue accents.
- Avoid decorative gradients, oversized marketing cards, or playful styling.
- Use thin lines, grid details, technical labels, and compact metadata to suggest aerospace and defense precision.
- Use text logo treatment for SGSC until a real logo is provided.
- Use CSS-based technical panels and aircraft/platform-inspired placeholders until real product imagery is available.

## Responsive Behavior

Desktop:

- Wide hero layout with strong visual hierarchy.
- Two-column hero or capability areas where appropriate.
- Four product cards in a grid.
- Dense but readable corporate information flow.

Tablet:

- Product cards move to two columns.
- Split sections stack where needed.
- Navigation remains readable without crowding.

Mobile:

- Navigation collapses behind a menu button.
- Product cards move to one column.
- Hero headline is sized to avoid overflow.
- CTA buttons and language toggle remain reachable and readable.

## Language Handling

The site supports Korean and English through a top navigation language toggle.

- Use React state for current language.
- Keep text content in a local content module.
- No external i18n library is required for the first version.
- All major visible text must switch between Korean and English:
  - Navigation
  - Hero copy
  - CTA labels
  - Capability section
  - Product cards
  - About section
  - Contact section
  - Footer text

## Technical Structure

Use a Vite React app with a small file structure:

- `src/main.jsx`: app entry.
- `src/App.jsx`: page composition and language state.
- `src/content.js`: Korean and English copy, capabilities, and product data.
- `src/App.css`: responsive layout and visual styling.

Keep the first version simple. Do not add routing, backend APIs, CMS integration, or form submission behavior.

## Verification

After implementation, verify:

- Dependencies install and the app runs locally.
- Production build completes.
- Korean and English language toggle changes all major page copy.
- Desktop layout presents hero, capability, product, about, and contact sections cleanly.
- Mobile layout has no text overlap, horizontal overflow, or broken product cards.
- Navigation works across responsive breakpoints.

## Out of Scope

- Real product images.
- Real SGSC logo file.
- Product detail pages.
- Backend contact form.
- CMS or admin editing.
- SEO/content strategy beyond basic page structure and copy.
