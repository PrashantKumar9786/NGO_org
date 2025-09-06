# Kalam: Ek Swakchik Sanstha - NGO Website

A modern, responsive website for Kalam: Ek Swakchik Sanstha, built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Comprehensive**: Complete NGO website with all essential pages
- **Accessible**: Built with accessibility best practices

## Pages

1. **Home Page**: Hero section, impact counters, mission/vision preview, gallery
2. **About Page**: Mission, vision, motivation, work areas, operational areas, registrations
3. **Programs Page**: Comprehensive program showcase with categories and detailed modals
4. **Contact Page**: Contact information, form, and office details

## Programs Covered

- Women Empowerment
- Health Awareness
- Skill Development
- Clean India
- Environment Awareness
- Khelo India
- Road Safety
- Voter Awareness
- Legal Awareness
- Poverty Alleviation
- Educational Tour
- Samuhik Vivah

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Icons** for icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kalam-ngo
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Counter.tsx          # Animated counter component
│   └── Gallery.tsx          # Image gallery component
├── pages/
│   ├── Home.tsx             # Landing page
│   ├── About.tsx            # About page
│   ├── Programs.tsx         # Programs page
│   └── Contact.tsx           # Contact page
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Customization

### Colors

The website uses a custom color scheme defined in `tailwind.config.js`:

- Primary: Blue shades (#3b82f6, etc.)
- Secondary: Green shades (#22c55e, etc.)

### Content

All content is hardcoded in the components. To update:

1. Edit the respective page components
2. Update images in the Gallery component
3. Modify contact information in the Contact page

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use TailwindCSS classes
- Custom animations are defined in `tailwind.config.js`

## Features Implemented

✅ **Landing Page**: Hero section with animated background, impact counters, gallery
✅ **About Page**: Mission, vision, motivation, work areas, operational areas, registrations
✅ **Programs Page**: Grid layout with categories, modal details, comprehensive program information
✅ **Contact Page**: Contact form, office information, social media links
✅ **Responsive Design**: Mobile-first approach with responsive breakpoints
✅ **Animations**: Smooth transitions and hover effects using Framer Motion
✅ **Navigation**: Sticky navbar with scroll effects and mobile menu
✅ **SEO**: Proper meta tags and semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Kalam: Ek Swakchik Sanstha. All rights reserved.

## Support

For any questions or support, please contact:

- Email: info@kalamngo.org
- Phone: +91 9876543210
