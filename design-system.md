# Design System Inspired by OhhMyDesign

## 1. Visual Theme & Atmosphere

OhhMyDesign's design system embodies a modern, premium aesthetic rooted in clarity and purposeful simplicity. The brand conveys professionalism and creative confidence through a refined color palette anchored by deep navy and vibrant orange, paired with clean typography and generous whitespace. The visual personality is bold yet approachable, emphasizing memorable brand experiences through subtle depth, smooth interactions, and meticulous attention to detail. The atmosphere balances sophistication with warmth—technical precision meets human-centered design thinking.

**Key Characteristics**
- Deep navy (`#14202B`) as the dominant visual anchor
- Strategic use of vibrant orange (`#F0531C`) for high-impact calls-to-action
- Clean, modern sans-serif typography (Bricolage Grotesque + Hanken Grotesk)
- Generous whitespace and breathing room between elements
- Subtle shadows and layered elevation for depth
- Rounded corners (`10px`–`14px`) for approachability
- Pill-shaped buttons and badges (`999px` radius) for contemporary feel
- Accent cyan (`#0D99FF`) for highlights and focus states
- Professional yet creative—balancing grid discipline with expressive typography

## 2. Color Palette & Roles

### Primary
- **Deep Navy** (`#14202B`): Primary text, headings, and structural elements. Establishes visual hierarchy and brand authority. Used 801 times across the system.
- **Very Dark Navy** (`#0E1620`): High-contrast backgrounds and darkest text roles. Reinforces premium feel.

### Accent Colors
- **Vibrant Orange** (`#F0531C`): Primary call-to-action buttons, key interactive elements, and brand highlights. Demands attention and drives conversions.
- **Cyan Blue** (`#0D99FF`): Secondary highlights, focus states, informational badges, and accent overlays. Creates visual interest and guides user attention.
- **Success Green** (`#27C06B`): Affirmative states, confirmations, and positive outcomes.
- **Error Red** (`#D2410E`): Error states, warnings, and destructive actions.

### Interactive
- **Slate Blue** (`#4A6173`): Secondary text, supporting copy, and disabled states. Provides visual hierarchy without competing with primary navy.
- **Muted Blue** (`#8AA6B8`): Tertiary text, hints, and low-emphasis labels.

### Neutral Scale
- **White** (`#FFFFFF`): Primary background, cards, and surface elements. Used 229 times for clean, accessible layouts.
- **Off-White** (`#FBFDFF`): Subtle background variation and soft surface differentiation.
- **Warm Off-White** (`#EFEEE9`): Neutral background alternative with slight warmth.
- **Light Blue-Gray** (`#F1F6FA`): Soft background tint for sectioning and visual separation.
- **Black** (`#000000`): Highest-contrast text and critical elements (use sparingly).

### Surface & Borders
- **Navy with Low Opacity** (`#14202B` @ `13.3%`): Subtle border treatment for navigation and card edges. Creates definition without harshness.

## 3. Typography Rules

### Font Family
**Primary (Bricolage Grotesque):** Bold display and prominent headings. Sans-serif, geometric, high-impact.
Fallback stack: `Bricolage Grotesque, Segoe UI, sans-serif`

**Secondary (Hanken Grotesk):** Body text, navigation, buttons, and general UI copy. Clean, modern sans-serif with excellent legibility.
Fallback stack: `Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`

**Tertiary (Space Mono):** Labels, tags, meta information, and code-like text. Monospace for technical emphasis.
Fallback stack: `Space Mono, monospace`

**Fallback System (Arial):** Icon labels and compact UI text.
Fallback stack: `Arial, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Bricolage Grotesque | `84px` | `800` | `121.8px` | Normal | Large impactful headlines; brand statements |
| Heading 1 | Bricolage Grotesque | `78px` | `700` | `72.54px` | Normal | Page-level headings and major sections |
| Heading 2 | Bricolage Grotesque | `52px` | `700` | `47.84px` | Normal | Section headings and visual anchors |
| Heading 3 | Hanken Grotesk | `32px` | `700` | `46.4px` | Normal | Subsections and feature titles |
| Body / Paragraph | Hanken Grotesk | `20px` | `500` | `29px` | Normal | Primary body text; legible at all sizes |
| Body Small | Hanken Grotesk | `16px` | `400` | `23.2px` | Normal | Secondary body text and card content |
| Link / Navigation | Hanken Grotesk | `14px` | `500` | `20.3px` | Normal | Navigation items and inline links |
| Button / CTA | Hanken Grotesk | `14px` | `700` | `14px` | Normal | Action button text; bold emphasis |
| Label / Tag | Space Mono | `11px` | `700` | `15.95px` | Normal | Labels, tags, and metadata |
| List Item | Hanken Grotesk | `15px` | `400` | `21.3px` | Normal | Bulleted and numbered list items |
| Icon Label | Arial | `13.3333px` | `400` | Normal | Normal | Small utility text for icons |

### Principles
- **Display hierarchy is dramatic and intentional.** Use Bricolage Grotesque (`78px`–`84px`) for hero sections and major page anchors to command visual attention.
- **Body text prioritizes readability.** Hanken Grotesk at `20px` with `500` weight ensures accessibility and scanability. Secondary body drops to `16px` / `400` weight for supporting content.
- **Button text must be bold (`700` weight).** Differentiates actions from passive text; improves click clarity.
- **Navigation uses medium weight (`500`).** Balances presence with restraint; avoids visual noise in header areas.
- **Label hierarchy uses Space Mono.** Monospace treatment reserves semantic meaning for small metadata and tags.
- **Line height respects breathing room.** Minimum `1.43x` multiplier ensures legibility across all sizes and prevents cramping.

## 4. Component Stylings

### Buttons

#### Primary Button (Orange / Call-to-Action)
- **Background:** `#F0531C`
- **Text Color:** `#FFFFFF`
- **Font:** Hanken Grotesk, `14px`, `700` weight
- **Padding:** `12px 22px`
- **Border Radius:** `10px`
- **Border:** None
- **Height:** `40px`
- **Width:** `145px`
- **Box Shadow:** `rgb(240, 83, 28) 0px 12px 26px -12px` (elevated glow effect)
- **Hover State:** Darken to `#D2410E`; increase shadow opacity by `15%`
- **Active State:** Compress shadow to `0px 4px 12px -6px`; maintain text color
- **Disabled State:** Opacity `50%`; cursor `not-allowed`

#### Secondary Button (Navy Outline)
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#14202B`
- **Font:** Hanken Grotesk, `14px`, `700` weight
- **Padding:** `12px 22px`
- **Border Radius:** `10px`
- **Border:** `1px solid #14202B`
- **Height:** `40px`
- **Width:** `133px`
- **Box Shadow:** None
- **Hover State:** Background becomes `#14202B`; text becomes `#FFFFFF`
- **Active State:** Invert to navy background with white text; border remains `1px solid #14202B`
- **Disabled State:** Border becomes `#8AA6B8`; text becomes `#8AA6B8`; opacity `50%`

#### Tertiary Button (Ghost / Outline Variant)
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#14202B`
- **Font:** Hanken Grotesk, `14px`, `700` weight
- **Padding:** `12px 22px`
- **Border Radius:** `10px`
- **Border:** `1px solid #14202B`
- **Height:** `42px`
- **Width:** `158px`
- **Box Shadow:** None
- **Hover State:** Background becomes `#F1F6FA`; border remains `1px solid #14202B`
- **Active State:** Background becomes `#E8EEF4`; maintain border

#### Icon Button (Compact Rounded)
- **Background:** `#FFFFFF`
- **Text Color:** `#14202B`
- **Font:** Arial, `13.3333px`, `400` weight
- **Padding:** `0px`
- **Border Radius:** `12px`
- **Border:** None
- **Height:** `37px`
- **Width:** `37px`
- **Box Shadow:** `rgba(20, 32, 43, 0.5) 0px 8px 18px -12px`
- **Hover State:** Background becomes `#F1F6FA`; shadow increases to `0px 10px 22px -10px`
- **Active State:** Background becomes `#E8EEF4`; shadow compresses

### Cards & Containers

#### Standard Card
- **Background:** `#FFFFFF`
- **Text Color:** `#14202B`
- **Font:** Hanken Grotesk, `16px`, `400` weight
- **Line Height:** `23.2px`
- **Padding:** `10px` (minimal inner padding; content spaced separately)
- **Border Radius:** `14px`
- **Border:** None
- **Box Shadow:** None (flat design)
- **Height:** `567px` (example; flexible)
- **Width:** `742px` (example; flexible)
- **Hover State:** Subtle shadow appears: `rgba(20, 32, 43, 0.08) 0px 6px 20px -8px`; transform slight scale-up (`1.02x`)

#### Card with Elevation
- **Background:** `#FFFFFF`
- **Text Color:** `#14202B`
- **Padding:** `24px`
- **Border Radius:** `14px`
- **Border:** `1px solid rgba(20, 32, 43, 0.06)`
- **Box Shadow:** `rgba(20, 32, 43, 0.08) 0px 8px 24px -12px`
- **Hover State:** Shadow strengthens to `rgba(20, 32, 43, 0.12) 0px 12px 32px -16px`

### Inputs & Forms

#### Text Input
- **Background:** `#FFFFFF`
- **Text Color:** `#14202B`
- **Placeholder Color:** `#8AA6B8`
- **Font:** Hanken Grotesk, `16px`, `400` weight
- **Padding:** `12px 16px`
- **Border:** `1px solid #8AA6B8`
- **Border Radius:** `10px`
- **Focus State:** Border becomes `#0D99FF`; box shadow: `0px 0px 0px 3px rgba(13, 153, 255, 0.1)`
- **Error State:** Border becomes `#D2410E`; background tint: `rgba(210, 65, 14, 0.04)`
- **Disabled State:** Background becomes `#F1F6FA`; text becomes `#8AA6B8`; border becomes `#8AA6B8`

#### Form Label
- **Font:** Space Mono, `11px`, `700` weight
- **Text Color:** `#14202B`
- **Margin Bottom:** `8px`
- **Letter Spacing:** Normal

#### Checkbox / Radio
- **Size:** `18px`
- **Border Radius:** `4px` (checkbox) / `50%` (radio)
- **Border:** `2px solid #14202B`
- **Checked Background:** `#14202B`
- **Checked Indicator Color:** `#FFFFFF`
- **Focus State:** Box shadow: `0px 0px 0px 3px rgba(13, 153, 255, 0.1)`

### Navigation

#### Navigation Bar (Horizontal Primary)
- **Background:** `#FFFFFF`
- **Text Color:** `#14202B`
- **Font:** Hanken Grotesk, `16px`, `400` weight
- **Line Height:** `23.2px`
- **Padding:** `6px 6px 6px 18px`
- **Border:** `1px solid rgba(20, 32, 43, 0.133)`
- **Border Radius:** `999px` (full pill shape)
- **Height:** `52.3px`
- **Width:** `544px`
- **Box Shadow:** `rgba(20, 19, 16, 0.4) 0px 12px 32px -18px` (subtle lift)
- **Link Padding:** `8px 13px`
- **Link Border Radius:** `999px`
- **Link Hover:** Background becomes `#F1F6FA`; text remains `#14202B`
- **Active Link:** Background becomes `#14202B`; text becomes `#FFFFFF`

#### Navigation Link (Inline)
- **Font:** Hanken Grotesk, `14px`, `500` weight
- **Text Color:** `#14202B`
- **Background:** `rgba(0, 0, 0, 0)`
- **Padding:** `8px 13px`
- **Border Radius:** `999px`
- **Hover State:** Background becomes `#F1F6FA`; underline appears (optional: `2px solid #0D99FF`)
- **Active State:** Background becomes `#14202B`; text becomes `#FFFFFF`

#### Breadcrumb
- **Font:** Hanken Grotesk, `14px`, `400` weight
- **Text Color:** `#8AA6B8`
- **Separator:** ` / ` in same color
- **Active Item Color:** `#14202B`
- **Link Hover:** Text becomes `#0D99FF`

### Badge / Status Label

#### Badge (Default / Neutral)
- **Background:** `#F1F6FA`
- **Text Color:** `#14202B`
- **Font:** Space Mono, `11px`, `700` weight
- **Padding:** `6px 12px`
- **Border Radius:** `7px` or `999px` (pill variant)
- **Border:** None

#### Badge (Accent / Primary)
- **Background:** `#0D99FF`
- **Text Color:** `#FFFFFF`
- **Font:** Space Mono, `11px`, `700` weight
- **Padding:** `6px 12px`
- **Border Radius:** `7px`

#### Badge (Success)
- **Background:** `#27C06B`
- **Text Color:** `#FFFFFF`
- **Font:** Space Mono, `11px`, `700` weight
- **Padding:** `6px 12px`
- **Border Radius:** `7px`

#### Badge (Error / Warning)
- **Background:** `#D2410E`
- **Text Color:** `#FFFFFF`
- **Font:** Space Mono, `11px`, `700` weight
- **Padding:** `6px 12px`
- **Border Radius:** `7px`

#### Badge with Highlight (Orange Accent)
- **Background:** `#F0531C`
- **Text Color:** `#FFFFFF`
- **Font:** Space Mono, `11px`, `700` weight
- **Padding:** `6px 12px`
- **Border Radius:** `999px` (full pill)

### Tabs

#### Tab (Active)
- **Background:** `#14202B`
- **Text Color:** `#FFFFFF`
- **Font:** Hanken Grotesk, `14px`, `700` weight
- **Padding:** `12px 16px`
- **Border Radius:** `10px 10px 0px 0px` or full `10px` (floating tab)
- **Border:** None

#### Tab (Inactive)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#8AA6B8`
- **Font:** Hanken Grotesk, `14px`, `400` weight
- **Padding:** `12px 16px`
- **Border Radius:** `10px`
- **Border:** `1px solid #8AA6B8`
- **Hover State:** Border becomes `#14202B`; text becomes `#14202B`

## 5. Layout Principles

### Spacing System

The spacing scale follows an 8px-based incremental system with strategic 4px and 12px variants for fine-tuning. The base unit is **8px**; all spacing multiplies in predictable increments.

- **4px:** Micro-adjustments, tight element clusters
- **8px:** Tight grouping, icon-to-label spacing
- **12px:** Button internal padding; compact card padding
- **16px:** Standard padding for inputs, form elements, and compact containers
- **20px:** Default padding for standard cards and moderate sections
- **24px:** Elevated card padding, section breaks
- **28px:** Medium section spacing
- **32px:** Horizontal gaps between grid columns; moderate vertical section separation
- **36px:** Padding for larger components
- **40px:** Container outer padding (desktop)
- **44px:** Large spacing for major sections
- **48px:** Outer margin for major layout sections

**Usage Context:**
- **Buttons:** `12px` vertical, `22px` horizontal (compact, balanced)
- **Cards:** `24px` (elevated) to `10px` (minimal)
- **Navigation:** `6px` internal padding for pill-shaped nav bar
- **Forms:** `12px`–`16px` for input padding; `16px` for label-to-input gaps
- **Grid columns:** `32px` gap between items
- **Section breaks:** `48px` margin between major sections

### Grid & Container

- **Max Width:** `1440px` (common desktop breakpoint; reference from industry standards)
- **Columns:** 12-column grid system (flexible, adapts to content)
- **Column Strategy:** 
  - Desktop: Full 12-column grid with `32px` gutters
  - Tablet: 8-column grid with `24px` gutters
  - Mobile: Single-column or 2-column with `16px` gutters
- **Section Patterns:**
  - **Hero Section:** Full-bleed background with centered content; max width `100%` on mobile, `1440px` on desktop
  - **Card Grid:** 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile); gap `32px` → `24px` → `16px`
  - **Sidebar + Content:** Main content takes 8 columns (desktop), sidebar takes 4 columns; stacks vertically on tablet/mobile
- **Container Padding:** `40px` on desktop, `24px` on tablet, `16px` on mobile

### Whitespace Philosophy

Whitespace is active and intentional, not passive leftover space. It creates visual rhythm, guides focus, and ensures content breathes. The system prioritizes generous margins around text-heavy sections and clusters related UI elements tightly using the 8px/12px spacing scale. Larger sections are separated by `48px` margins; nested elements use `8px`–`16px` gaps. This hierarchy prevents visual noise and maintains a premium, sophisticated feel.

### Border Radius Scale

| Value | Context | Use Case |
|-------|---------|----------|
| `4px` | Compact UI | Micro-interactions, small helper buttons |
| `7px` | Badge / Badge | Labels and tags; slightly more defined |
| `10px` | Buttons / Tabs | Primary interactive elements; balances pill-shaped nav |
| `12px` | Icon Button | Compact control buttons; tighter than primary buttons |
| `14px` | Card | Card containers; generous roundness for premium feel |
| `30px` | Button (Alternate) | Large pill-shaped buttons for special emphasis |
| `50%` | Button (Variant) | Fully circular icon buttons (alternative to `12px`–`14px`) |
| `999px` | Navigation / Badge | Pill-shaped nav bar, badge accents, fully rounded links |

### Border Widths

| Width | Context | Use Case |
|-------|---------|----------|
| `1px` (thin) | Button / Input borders | Secondary button outlines; input field definition; subtle navigation borders (`rgba(20, 32, 43, 0.133)`) |
| `2px` (medium) | Focus indicators | Checkbox/radio borders; focus ring outlines for accessibility |

## 6. Depth & Elevation

The depth system uses layered shadows to create visual hierarchy and focus. Shadows are color-informed (navy-based with transparency) and subtly warm where appropriate (brown-based shadow for darker contexts). Elevation is restrained; most UI elements sit flat (`box-shadow: none`), with depth applied only to floating components (buttons, cards on hover, modals).

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (Flat) | `box-shadow: none` | Primary card surfaces, navigation bars, form fields |
| Level 1 (Subtle) | `rgba(20, 32, 43, 0.08) 0px 6px 20px -8px` | Cards on hover; gentle lift effect |
| Level 2 (Raised) | `rgba(20, 32, 43, 0.5) 0px 8px 18px -12px` | Icon buttons; small interactive elements |
| Level 3 (Elevated) | `rgba(20, 32, 43, 0.08) 0px 8px 24px -12px` | Elevated cards; dropdown menus |
| Level 4 (High) | `rgba(20, 19, 16, 0.4) 0px 12px 32px -18px` | Navigation floating bar; sticky headers |
| Level 5 (Top) | `rgb(240, 83, 28) 0px 12px 26px -12px` | Primary CTA buttons; dominant interactive elements (warm orange glow) |

**Shadow Philosophy:**
Shadows should feel natural and purposeful, not harsh or cluttered. The system uses color-appropriate shadows: cool navy shadows (`rgba(20, 32, 43, ...)`) for neutral depth and warm orange glows (`rgb(240, 83, 28)`) for primary buttons. Negative offset (`-12px`, `-18px`) creates the impression of light from above, typical of modern flat design. Shadow spread is conservative; blur radius ranges from `6px` to `32px` depending on elevation level.

### Opacity Levels

| Value | Use | Context |
|-------|-----|---------|
| `100%` (1.0) | Standard | Fully opaque UI elements, text, backgrounds |
| `94%` (`0.94`) | Subtle depth | Slightly transparent overlays; near-opaque backgrounds |
| `86%` (`0.86`) | Mild transparency | Hover states; semi-visible disabled elements |
| `85%` (`0.85`) | Light transparency | Secondary overlays |
| `82%` (`0.82`) | Moderate transparency | Icon overlays, subtle background tints |
| `60%` (`0.60`) | Medium transparency | Placeholder text; disabled form inputs |
| `50%` (`0.50`) | High transparency | Disabled button states; overlay backgrounds (modals) |

### Z-index / Layering

| Layer | Z-Index | Context | Components |
|-------|---------|---------|------------|
| Base | `1` | Default layer for static content | Body text, cards, sections |
| Raised | `2` | Slightly elevated; above base flow | Sticky backgrounds, subtle overlays |
| Dropdown | `3` | Above base for dropdown menus | Select menus, popovers |
| Sticky | `4` | Sticky/fixed positioning | Sticky navigation, headers |
| Modal | `5` | Modal overlay layer | Backdrop behind modals (semi-transparent) |
| Modal Content | `6` | Modal dialog window | Modal cards, dialog boxes |
| Toast | `7` | Toast notifications | Snackbars, toasts, notifications |
| Top | `8` | Highest layer; rare use | Focus rings, critical overlays |

## 7. Do's and Don'ts

### Do
- **Do use Bricolage Grotesque for display and high-impact headings** (`52px`–`84px`). Its geometric boldness commands attention and establishes brand presence.
- **Do pair orange (`#F0531C`) with white text** for maximum contrast and readability on primary buttons.
- **Do maintain consistent `10px`–`14px` border radius** across buttons and cards. This creates visual continuity and modern aesthetic.
- **Do use the 8px spacing scale rigorously.** Consistency builds trust and reduces cognitive load.
- **Do apply shadows sparingly.** Level 1–3 shadows suffice for most interactions; reserve Level 5 (orange glow) for primary CTAs only.
- **Do prioritize navy (`#14202B`) as the dominant text color.** It ensures accessibility and readability across all surfaces.
- **Do implement pill-shaped navigation (`border-radius: 999px`).** It reinforces contemporary brand identity and improves button discoverability.
- **Do test focus states with cyan (`#0D99FF`)** for keyboard navigation accessibility. Provide a clear 3px focus ring: `0px 0px 0px 3px rgba(13, 153, 255, 0.1)`.
- **Do separate major sections with `48px` margins.** This creates visual breathing room and hierarchical clarity.
- **Do use Space Mono (`11px`, `700` weight) for all labels and tags.** Monospace treatment adds semantic meaning and visual distinction.

### Don't
- **Don't use Hanken Grotesk for display sizes** (`>52px`). It lacks the boldness needed; reserve for body, navigation, and buttons.
- **Don't apply heavy shadows (`Level 4+`) to standard cards.** Reserve elevated shadows for floating components like dropdowns or modals only.
- **Don't mix border radius values inconsistently.** Stick to the established scale: `7px`, `10px`, `12px`, `14px`, `999px`.
- **Don't use orange (`#F0531C`) for body text or secondary elements.** Its intensity is reserved for primary CTAs; overuse dilutes impact.
- **Don't set button width less than `100px` or height less than `40px`** (except icon buttons, which are `37px`). Ensures touch-friendly targets and visual balance.
- **Don't nest more than 2 levels of opacity.** Multiple transparent layers create visual confusion; instead, adjust color saturation or shadow depth.
- **Don't forget disabled states.** Always apply `opacity: 50%` + cursor: `not-allowed` to disabled buttons and inputs.
- **Don't use cyan (`#0D99FF`) as a background for large UI surfaces.** It's an accent only; reserve for highlights, badges, and focus indicators.
- **Don't apply line-height less than `1.4x` multiplier** for body text. Improves readability and accessibility.
- **Don't ignore contrast ratios.** Navy + white passes AAA standards (`18.5:1`). Navy + light gray may fail; always test.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes | Column Count | Gutter Size |
|------|-------|------------|--------------|-------------|
| Mobile | `320px`–`639px` | Single-column layout; stacked navigation; full-width cards | 1–2 | `16px` |
| Tablet | `640px`–`1023px` | 2-column grid; collapsible nav; adjusted font sizes | 8 | `24px` |
| Desktop | `1024px`–`1439px` | Full 12-column grid; horizontal nav; multi-card layouts | 12 | `32px` |
| Wide | `1440px+` | Max-width container (1440px) centered; generous side padding | 12 | `32px` |

### Touch Targets

- **Minimum Size:** `44px` × `44px` for all interactive elements (buttons, links, checkboxes)
- **Spacing Between Targets:** `8px` minimum to prevent accidental touches
- **Button Height:** `40px` standard (desktop) → `44px` (mobile/tablet for comfort)
- **Icon Buttons:** `37px`–`44px` square; increase to `44px` on mobile
- **Form Inputs:** `40px`–`44px` height; `16px` horizontal padding for comfortable text entry

### Collapsing Strategy

- **Navigation Bar:** Pill-shaped nav (`width: 544px`) remains visible on tablet/desktop. On mobile, collapses to icon-only or hamburger menu.
- **Card Grid:** 3 columns (desktop, `1024px+`) → 2 columns (tablet, `640px`–`1023px`) → 1 column (mobile, `<640px`); adjust gap `32px` → `24px` → `16px`.
- **Hero Section:** Font size scales: Display `84px` (desktop) → `52px` (tablet) → `32px` (mobile). Padding scales: `48px` → `32px` → `20px`.
- **Sidebar Layout:** Side-by-side (desktop: 8 + 4 columns) → Stacked (tablet/mobile: full width, sidebar below).
- **Form Layout:** Multi-column (desktop) → Single column (mobile); maintains `16px` margin bottom between fields.
- **Images & Media:** `max-width: 100%; height: auto` ensures responsive scaling; `object-fit: cover` for card images.
- **Buttons:** Full-width on mobile (`width: 100%`); fixed width on desktop. Maintain `40px` height minimum.
- **Typography Reflow:** Body text: `20px` (desktop) → `16px` (mobile). Headings: scale proportionally. Line-height remains consistent (`1.4x` multiplier).

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Vibrant Orange (`#F0531C`) — use for high-priority buttons and call-to-action elements
- **Primary Text / Headings:** Deep Navy (`#14202B`) — standard text, hierarchy anchors
- **Background / Surface:** White (`#FFFFFF`) — primary surface for cards and containers
- **Secondary Text:** Slate Blue (`#4A6173`) — supporting copy, secondary information
- **Tertiary Text / Disabled:** Muted Blue (`#8AA6B8`) — hints, labels, disabled states
- **Interactive Accent:** Cyan Blue (`#0D99FF`) — focus states, highlights, badges
- **Success:** Success Green (`#27C06B`) — affirmative confirmations
- **Error / Danger:** Error Red (`#D2410E`) — error states, warnings
- **Navigation Border:** Navy @ `13.3%` opacity (`rgba(20, 32, 43, 0.133)`) — subtle navigation definition
- **Shadows / Depth:** Navy @ `50%` opacity (`rgba(20, 32, 43, 0.5)`) — standard shadow layer; warm (`rgb(240, 83, 28)`) for button glows

### Iteration Guide

1. **Always start with Deep Navy (`#14202B`) for text.** It provides the foundation of the hierarchy and ensures accessibility. Use slate (`#4A6173`) or muted blue (`#8AA6B8`) only for secondary/tertiary content.

2. **Reserve Orange (`#F0531C`) for primary CTAs only.** It must pop against white; pair with white text (`#FFFFFF`) and apply warm shadow: `rgb(240, 83, 28) 0px 12px 26px -12px`. Overuse dilutes brand impact.

3. **Button structure is fixed: 40px height, 12px top/bottom padding, 22px left/right padding, 10px border radius, 14px font (700 weight).** All primary buttons follow this; secondary buttons add `1px navy border`.

4. **Navigation bar is always pill-shaped (`border-radius: 999px`).** Apply `1px solid rgba(20, 32, 43, 0.133)` border and `rgba(20, 19, 16, 0.4) 0px 12px 32px -18px` shadow. Links inside use `8px 13px` padding with rounded hover states.

5. **Cards default to flat design (`box-shadow: none`).** On hover, apply Level 1 shadow: `rgba(20, 32, 43, 0.08) 0px 6px 20px -8px`. Padding varies: `10px` (minimal) to `24px` (elevated). Always use `14px` border-radius.

6. **Typography hierarchy uses two font families: Bricolage Grotesque (display, `52px`–`84px`) and Hanken Grotesk (body/nav/buttons, `14px`–`20px`).** Use Bricolage for impact; Hanken for readability. Space Mono (`11px`) for labels only.

7. **Spacing follows 8px base scale: 4px (micro), 8px (tight), 12px (compact), 16px (standard), 24px (elevated), 32px (large), 48px (major sections).** Button padding: `12px 22px`. Form padding: `12px 16px`. Card gaps: `32px` (desktop).

8. **Input styling: 40px height, 12px top/bottom + 16px left/right padding, 1px navy border, 10px radius, `#FFFFFF` background.** Focus adds `0px 0px 0px 3px rgba(13, 153, 255, 0.1)` cyan ring. Error state: border becomes `#D2410E`; background tints to `rgba(210, 65, 14, 0.04)`.

9. **Shadow system has 5 levels; use conservatively.** Level 1 (subtle, `0px 6px 20px`) for card hovers. Level 2 (mild, `0px 8px 18px`) for icon buttons. Level 3 (elevated, `0px 8px 24px`) for cards. Level 4 (high, `0px 12px 32px`) for sticky nav. Level 5 (orange glow, `0px 12px 26px`) for primary CTAs only.

10. **Opacity scale: 100% (standard), 94% (subtle depth), 86% (hover), 82% (overlay), 60% (placeholder), 50% (disabled).** Disabled buttons: `opacity: 50%; cursor: not-allowed`.

11. **Border radius consistency: 7px (badges), 10px (buttons/tabs), 12px (icon buttons), 14px (cards), 999px (pill nav/links).** Never deviate; consistency builds trust.

12. **Responsive strategy: Mobile (`<640px`) = 1 column, 16px gap. Tablet (`640px`–`1023px`) = 2 columns, 24px gap. Desktop (`1024px+`) = 3+ columns, 32px gap.** Font sizes scale: `84px` → `52px` → `32px` for display. Button widths become full-width on mobile; maintain `44px` minimum height.

13. **Focus management: All interactive elements (buttons, links, inputs) must show cyan (`#0D99FF`) focus ring: `0px 0px 0px 3px rgba(13, 153, 255, 0.1)`.** Never remove default browser focus; customize only.

14. **Z-index layers: Base (1), raised (2), dropdown (3), sticky (4), modal (5), modal-content (6), toast (7), top (8).** Most components live at layers 1–3. Sticky nav at 4. Modals at 5–6. Toasts at 7.

15. **Badge system: Neutral (`#F1F6FA` bg, navy text), primary (`#0D99FF` bg, white text), success (`#27C06B` bg, white text), error (`#D2410E` bg, white text), highlight (`#F0531C` bg, white text).** Use Space Mono `11px` `700` weight. Padding: `6px 12px`. Radius: `7px` or `999px` (pill).