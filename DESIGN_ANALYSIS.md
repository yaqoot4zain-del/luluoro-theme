# Luluoro Design Analysis Document

## Website: luluoro.com

---

## 1. Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Gold | #c9a86c | Buttons, accents, links, price |
| Dark Secondary | #1a1a1a | Footer background, text |
| Accent Gold | #d4af37 | Gradients, highlights |
| White | #FFFFFF | Main background |
| Light Gray | #F5F5F5 | Section backgrounds |
| Text Dark | #1a1a1a | Main text |
| Text Gray | #6B7280 | Secondary text |
| Border Gray | #E5E7EB | Borders, dividers |

---

## 2. Typography

- **Primary Font**: Noto Sans Arabic (for Arabic text)
- **Secondary Font**: System fonts (Segoe UI, sans-serif)
- **Heading Sizes**: 
  - H1: 3xl (text-3xl)
  - H2: 2xl (text-2xl)
  - H3: xl (text-xl)
- **Body**: Base text (text-base)

---

## 3. Layout & Spacing

- **Container**: max-w-7xl, centered
- **Grid**: 4-column on desktop, 2-column on tablet, 1-column on mobile
- **Spacing**: 
  - Section padding: py-16
  - Card gap: 8 (gap-8)
  - Element margin: mb-4 to mb-12

---

## 4. UI Components

### 4.1 Header/Navigation
- Fixed top navigation
- Logo centered
- Main navigation links: SHOP, Collections (dropdown), By Type (dropdown), About Us, Contact Us
- Right side: Country/region selector, Language toggle, Search icon, Login, Cart icon

### 4.2 Hero/Banner Section
- Full-width banner image
- Overlay text with "SHOP NOW" CTA button
- Background: Image with gradient overlay

### 4.3 Product Cards
- Square aspect ratio images (533x533)
- Product name as heading (text-xl, font-bold)
- Vendor name: "LuluOro"
- Price display (regular and sale prices)
- Hover effect: Show second product image

### 4.4 Product Sections (Homepage)
- Section title (H2, centered)
- "View all" link
- 4 products per row on desktop
- Scrollable on mobile

### 4.5 Footer
- 4-column grid layout
- Newsletter signup form
- About, Customer Service, Partner With Us, Categories columns
- Social media icons (Instagram, TikTok, Snapchat)
- Copyright notice
- Country/region and language selectors

---

## 5. Key Features

### 5.1 Collections
- Desert Island 1
- Desert Island 2
- Mini Drops
- LuluOro Iconics

### 5.2 Product Categories
- Necklaces
- Rings
- Earrings
- Bracelets

### 5.3 Visual Effects
- Hover: Image swap on product cards
- Smooth transitions (transition duration-300)
- Gradient backgrounds for luxury feel
- Arabic-inspired patterns in CSS

---

## 6. Salla Icons Equivalents

| Element | Salla Icon |
|---------|------------|
| Search | salla-icon-icon-search |
| Cart | salla-icon-icon-cart |
| User/Account | salla-icon-icon-user |
| Menu (mobile) | salla-icon-icon-menu |
| Arrow | salla-icon-icon-arrow-right/left |
| Phone | salla-icon-icon-phone |
| Email | salla-icon-icon-mail |

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | < 640px | 1-2 |
| Tablet | 640px - 1024px | 2-3 |
| Desktop | > 1024px | 4 |

---

## 8. Action Items for Implementation

1. Create CSS variables matching the color palette
2. Build responsive header with navigation
3. Implement hero/banner section component
4. Create product card partial with hover effects
5. Build homepage with product sections
6. Implement footer with newsletter signup
7. Add mobile-responsive behaviors
8. Polish animations and transitions
