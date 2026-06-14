<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---

name: davidalves1
description: Software engineering portfolio for David Alves.

---

# Design System: davidalves1

## 1. Overview

**Creative North Star: "The Precision Instrument"**

A well-calibrated piece of test equipment has no decoration. Every surface, every marking, every control exists because removing it would cost something. This portfolio operates the same way: a dark, controlled surface that communicates through restraint. The quality of the object proves the quality of the maker.

The palette is near-monochromatic. The type contrast is the move: a display serif that carries authority at the top of the hierarchy, a tightly-tracked sans that handles everything below it. These do not harmonize warmly; they contrast structurally. There is one accent color. It appears ≤10% of any screen. Nothing announces itself except the work.

This system explicitly rejects: off-white backgrounds with purple gradient accents and hero metrics (SaaS cream); skill progress bars, competence radars, and technology icon walls (portfolio maximalism); and editorial-magazine aesthetics applied by reflex (display serif with italic drop caps, ruled separators, small mono labels as section grammar). The distinction between this system and that lane is the register: this is precision-industrial, not literary.

**Key Characteristics:**

- Near-monochromatic dark: depth through tonal variation, not hue variety
- Strong type contrast: display serif for structural authority, tight sans for information
- Elevated through stillness: no entrance animation, no decorative motion; the stillness is the confidence
- One accent, used precisely: its rarity is its meaning
- The work is always the loudest element on the page

## 2. Colors

A Restrained strategy on a dark surface: tinted neutrals carrying one accent color at strict discipline.

### Primary

- **Accent** (hue to be determined at implementation): the single non-neutral color in the system. Applied to one or two interactive or signaling elements per screen. Resist the category reflex toward purple or indigo; those are the first-order training-data defaults for tech portfolios referencing Linear, Stripe, and Figma simultaneously. Reach past that hue. A warm copper, a cool slate-green, or a precise amber are all more specific to this site's identity than another purple.

### Neutral

- **Surface deep** (to be resolved): the primary background. Dark, tinted toward the anchor hue with near-zero chroma. Not `#000`.
- **Surface mid** (to be resolved): secondary backgrounds, code blocks, subtle differentiators.
- **Surface raised** (to be resolved): hover states, active backgrounds, the lightest background surface.
- **Border subtle** (to be resolved): dividers and boundaries. Low contrast against Surface deep.
- **Text primary** (to be resolved): main body and heading text. Not pure `#fff`; tinted slightly toward the anchor hue.
- **Text muted** (to be resolved): secondary labels, metadata, captions.

### Named Rules

**The Single Voice Rule.** One accent color exists. It appears on ≤10% of any given screen. The moment it becomes a background, it stops being an accent and starts being a brand color. This system uses it as a point, not a field.

**The No-Purple Default Rule.** Purple, indigo, and blue-violet are the first-order reflex for engineering portfolios referencing this system's three references. If the chosen accent resolves to purple, interrogate whether it's the actual right choice or the predictable one. A less obvious hue, applied with the same discipline, is more specific to this portfolio.

## 3. Typography

**Display Font:** High-contrast display serif. Architectural, not literary. Should feel closer to a museum label or a precision instrument readout than a magazine spread. [Specific font to be chosen at implementation; avoid the reflex-reject list: Cormorant, Cormorant Garamond, Playfair Display, DM Serif Display, Newsreader, Lora, Crimson Pro.]

**Body Font:** Narrow grotesque or rational geometric sans. Engineered clarity, not warmth. The tracking should feel deliberate: slightly tighter than default on headings, optically correct on body. [Specific font to be chosen at implementation; avoid the reflex-reject list: Inter, DM Sans, Space Grotesk, Plus Jakarta Sans, Instrument Sans, Outfit.]

**Character:** The pairing operates as contrast, not harmony. The serif announces; the sans informs. They should not feel like they came from the same place.

### Hierarchy

- **Display** (heavy or black weight, fluid clamp from approximately 3.5rem to 6rem, tight line-height 0.9–1.0): Hero name and primary hero statement only. One instance per route at most.
- **Headline** (semibold or bold, approximately 1.75–2.25rem, line-height 1.1): Section headings. Uses the display serif.
- **Title** (medium weight, approximately 1.2–1.4rem, line-height 1.2–1.3): Project titles, subsection heads. Transitions to the sans at this level or below.
- **Body** (regular weight, 1rem/16px base, line-height 1.6–1.7, max 65–75ch): All prose. The san. Muted text color for secondary context.
- **Label** (medium weight, 0.75rem, 0.08–0.1em letter-spacing, uppercase): Metadata only: dates, categories, technology tags. Short strings. Never body copy.

### Named Rules

**The Authority Rule.** The display serif appears once per section at most. Repeating it as decorative section grammar, with a small tracked label above every heading, is the template fingerprint this system refuses.

**The Line Length Rule.** Body text never exceeds 75ch. At wider viewports, constrain the prose column; let negative space do the layout work.

## 4. Elevation

Flat by default. This is a still, controlled surface; shadows signal state, not structure. Depth is communicated through tonal layering: Surface deep, Surface mid, and Surface raised at different lightness levels create hierarchy without a shadow vocabulary.

If an element needs a shadow (floating navigation at scroll, a focused input, a tooltip), it is a diffuse dark ambient shadow, never a colored glow. Colored shadows are decoration. They are not used here.

**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is a response to interaction or elevation (floating, focused, lifted), not a stylistic default.

## 5. Components

[Omitted in seed mode. Re-run `/impeccable document` once there is code to capture actual component patterns.]

## 6. Do's and Don'ts

### Do:

- **Do** use tonal layering (different lightness steps of the same hue-tinted neutral) to express depth. Shadows are for state, not structure.
- **Do** let the work carry the page. Projects, blog, and shipped things are the loudest elements; biography copy is the quietest.
- **Do** use the label scale for metadata only: dates, tags, short categorical strings. Never set a sentence in uppercase tracked type.
- **Do** cap prose columns at 65–75ch regardless of viewport width. Negative space is not wasted space.
- **Do** respect `prefers-reduced-motion`. This system is restrained by design; the reduced-motion experience should be indistinguishable from the default.
- **Do** use the display serif for authority: once per section, at display or headline scale. Its restraint is its function.

### Don't:

- **Don't** use off-white backgrounds, purple or blue gradient accents, hero metrics (big number, small label, supporting stats), or identical card grids. This is the SaaS cream this portfolio explicitly refuses.
- **Don't** show skill progress bars, competence radars, percentage meters, or technology icon walls. Let the work prove competence; don't narrate it.
- **Don't** repeat the display serif as section grammar: a tracked uppercase kicker above every heading, plus an italic serif headline, plus a ruled separator is the editorial-magazine lane. This system is precision-industrial, not literary.
- **Don't** use `border-left` greater than 1px as a colored stripe accent on list items, callouts, or cards. Rewrite with background tints or full borders.
- **Don't** apply `background-clip: text` with a gradient. Single solid color only; emphasis through weight and scale.
- **Don't** use decorative glassmorphism (blurred card surfaces used as style). If blur appears, it has a structural reason.
- **Don't** animate entrance motion. The stillness is the design intent; adding staggered reveals introduces choreography this brief explicitly rejects.
- **Don't** use purple or indigo as the accent color by default. That is the first-order category reflex for a portfolio referencing Linear, Stripe, and Figma. Choose specifically, not predictably.
