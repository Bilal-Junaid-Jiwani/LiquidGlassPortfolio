# Liquid Glass Portfolio Design Guidelines
*Inspired by Apple iOS Aesthetic*

## Design Approach
Reference-based approach drawing from **Apple iOS design language** - specifically the liquid glass morphism aesthetic featuring frosted glass effects, translucent layers, depth hierarchy, and fluid interactions found in iOS 17+ interfaces.

## Core Design Principles
- **Material Depth**: Layered glass surfaces with varying opacity levels
- **Clarity Through Blur**: Frosted glass effects that maintain legibility
- **Spatial Hierarchy**: Z-axis depth through shadows and transparency
- **Fluid Motion**: Smooth, physics-based animations

---

## Typography System

**Font Family**: SF Pro Display (Apple's system font) or Inter as fallback
- **Hero Heading**: 4xl-6xl, weight 700-800, tight letter spacing
- **Section Headings**: 3xl-4xl, weight 700, normal letter spacing  
- **Subsections**: xl-2xl, weight 600
- **Body Text**: base-lg, weight 400-500, relaxed line height (1.6)
- **Captions**: sm-base, weight 500, subtle styling

**Hierarchy**: Large, bold headings with generous spacing between sections. Text maintains strong contrast against frosted backgrounds.

---

## Layout & Spacing System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16, 20, 24**
- Component padding: p-6 to p-8
- Section spacing: py-20 to py-32
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with px-6

**Grid System**: 
- Hero: Single column, centered content
- Projects: 2-column grid (md:grid-cols-2)
- Skills: 3-4 column grid (md:grid-cols-3 lg:grid-cols-4)
- Full-width glass panels with inner containers

---

## Component Library

### Navigation
**Floating Glass Bar**: Translucent navbar with backdrop blur, subtle border, floating 16px from edges on desktop. Sticky positioning with dynamic blur intensity on scroll.
- Height: h-16 to h-20
- Padding: px-6, py-4
- Border radius: rounded-2xl (desktop), full-width on mobile
- Links: Horizontal spacing gap-8, hover state with subtle glow

### Hero Section
**Layered Glass Composition** with depth perception:
- Full viewport height (min-h-screen)
- Centered content with floating glass card containing name/title
- Glass card: Frosted background, rounded-3xl, p-12, soft shadow
- Multiple floating glass elements at different z-indexes
- Subtle gradient background with animated mesh or particles
- CTA buttons with glass treatment

**No large hero image** - rely on glass effects and gradients for visual impact

### Project Cards
**Glass Container Design**:
- Frosted glass card with backdrop blur
- Rounded-2xl borders
- Inner soft glow border (1px semi-transparent)
- Padding: p-6 to p-8
- Hover: Lift effect with enhanced shadow and increased blur
- Image placeholder with rounded-xl, overlay gradient
- Title: text-xl, weight 600
- Description: text-base, 2-3 line clamp
- Tags: Small glass pills with rounded-full

**Grid Layout**: 2-column on desktop (gap-8), single column on mobile

### Skills Section
**Floating Glass Bubbles**:
- Circular or rounded-2xl glass cards
- Semi-transparent backgrounds
- Icon or logo centered
- Skill name below icon
- Percentage ring or proficiency indicator using subtle strokes
- Grid: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Hover: Gentle float animation, enhanced glow

**Category Tabs**: Glass pill buttons with active state showing filled treatment

### Contact Form
**Frosted Glass Inputs**:
- Input fields with glass background, backdrop blur
- Floating labels that animate on focus
- Rounded-xl borders
- Focus state: Enhanced border glow, no color shift
- Padding: p-4
- Submit button: Filled glass treatment with gradient shimmer
- 2-column layout for name/email (desktop), stack on mobile

### Modals
**Full-Screen Glass Overlay**:
- Frosted backdrop (backdrop-blur-xl)
- Centered glass card (max-w-4xl)
- Rounded-3xl with enhanced shadow
- Close button: Floating glass circle, top-right
- Content padding: p-8 to p-12

### Footer
**Translucent Glass Strip**:
- Full-width frosted bar
- Social icons in glass circles
- Links with subtle hover glow
- Copyright text: Small, subtle
- Padding: py-12

---

## Glass Material Specifications

**Backdrop Blur Intensity**:
- Navbar: backdrop-blur-md
- Cards: backdrop-blur-lg  
- Modals: backdrop-blur-xl
- Overlays: backdrop-blur-2xl

**Border Treatment**:
- Inner glow borders (1px semi-transparent white/dark edge)
- Rounded corners: rounded-2xl to rounded-3xl throughout
- No sharp corners anywhere

**Shadow Depth**:
- Floating elements: Soft shadow-xl with subtle glow
- Hover states: Enhanced shadow-2xl
- Layered shadows for depth perception

---

## Animations

**Micro-interactions** (use sparingly):
- Card hover: Transform translateY(-4px), enhanced blur
- Button press: Scale(0.98), slight opacity shift
- Page transitions: Fade with subtle slide (20px)
- Scroll reveals: Gentle fade-in for sections

**Physics**: Smooth easing (ease-out for entrances, ease-in-out for interactions)

---

## Responsive Behavior

**Breakpoints**:
- Mobile: Stack all multi-column layouts
- Tablet (md): 2-column grids
- Desktop (lg): 3-4 column grids, floating navbar

**Mobile Adaptations**:
- Navbar: Full-width, no floating effect
- Hero glass card: Smaller padding (p-8)
- Bottom sheet modals instead of centered
- Larger touch targets (min 44px)

---

## Images

**No primary hero image** - visual impact comes from glass effects, gradients, and layered composition.

**Project Thumbnails**: Placeholder images with 16:9 aspect ratio, rounded-xl corners, overlay gradient for depth. If real projects, use actual screenshots.

**Profile Photo** (About section): Circular glass frame, floating effect, max-w-xs.

---

## Accessibility

- Maintain contrast ratios on frosted backgrounds (test text legibility)
- All interactive elements have clear focus states with visible outline
- Minimum touch target size 44x44px
- Form labels always visible (floating label pattern)
- Backdrop blur fallback for older browsers

---

**Final Notes**: Every surface is a glass material with varying transparency. Consistency in blur intensity, border radius, and shadow depth creates the cohesive liquid glass aesthetic. Avoid flat, opaque elements - embrace translucency and depth throughout.