# BRHS Student Hub

A modern, fully functional student resource hub for Bridgewater-Raritan High School. This all-in-one website provides students with easy access to everything they need - from schedules and events to forms and resources.

## Features

### 🏠 **Home Dashboard**
- Today's events and announcements
- Quick access links to all sections
- Modern, intuitive navigation
- Responsive design for mobile and desktop

### 📚 **Media Center**
- Access to research databases (EBSCO, JSTOR, ProQuest, Gale)
- Library catalog search
- Media center webpage and resources
- "In the Know While You Go" newsletter

### 🏆 **Athletics**
- Daily and weekly sports events
- Ticket purchasing (with financial assistance information)
- Athletic forms and requirements
- Coaching staff directory
- Tryout information and schedules
- Panthers Live streaming
- Student handbook
- Panther apparel store

### 👥 **Clubs & Activities**
- Meeting schedules (lunch and after-school)
- Google Classroom codes for clubs
- Student Council events and happenings

### 💼 **Counseling Office**
- Naviance access for career and college planning
- Counselor appointment scheduling
- BRTV daily announcements
- Student handbook

### 📅 **Calendars & Schedules**
- Opening schedules (Regular, Delayed, 4-Hour, Emergency)
- Block rotation calendar (5-day A-E cycle)
- Academic calendar with marking periods
- Important dates and holidays

### ✏️ **Testing Schedule**
- AP Exam dates and times
- SAT and ACT test dates
- State assessment schedules
- Registration information and deadlines

### 🍽️ **Lunch Menus**
- Weekly breakfast and lunch menus
- Dietary information and alternatives
- Meal prices and free lunch program info

### 📋 **Forms**
- Student ID request form
- Lost & Found reporting
- Direct links to Google Forms

### 🎓 **Additional Resources**
- National Honor Society (NHS) information
- Vo-Tech programs and applications
- Graduation requirements and information
- School events calendar

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS transitions and keyframes

## Color Scheme

- **Primary**: Red (#DC2626) - School color
- **Background**: Black (#000000) - Modern, sleek design
- **Accents**: Various shades of red and gray
- **Glassmorphism effects** for cards and components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
brhs/
├── app/                      # Next.js App Router pages
│   ├── athletics/           # Athletics page
│   ├── calendars/           # Calendars & schedules
│   ├── clubs/              # Clubs & activities
│   ├── counseling/         # Counseling office
│   ├── forms/              # Student forms
│   ├── graduation/         # Graduation info
│   ├── lunch-menus/        # Lunch menus
│   ├── media-center/       # Media center resources
│   ├── nhs/                # National Honor Society
│   ├── student-council/    # Student council
│   ├── testing/            # Testing schedule
│   ├── vo-tech/            # Vo-Tech programs
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/              # Reusable components
│   ├── Categories.tsx      # Category grid
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Layout.tsx          # Main layout wrapper
│   ├── QuickLinks.tsx      # Quick access links
│   ├── Sidebar.tsx         # Navigation sidebar
│   └── TodaysEvents.tsx    # Events widget
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Key Features

### Accessibility
- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- High contrast color scheme
- Responsive design for all devices

### Modern Design
- Glassmorphism effects
- Smooth animations and transitions
- Hover effects on interactive elements
- Mobile-first responsive design
- Clean, intuitive interface

### User Experience
- Fast navigation with sidebar
- Search functionality (header)
- Category-based organization
- Quick access buttons
- Clear visual hierarchy

## Customization

### Update Content
All content is currently hardcoded in the page components. To update:

1. Navigate to the relevant page in `app/[section]/page.tsx`
2. Modify the content arrays or text
3. Save and the changes will reflect immediately in development mode

### Change Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#DC2626', // Change this for main color
    dark: '#991B1B',
    light: '#EF4444',
  },
}
```

### Add New Pages
1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Update the sidebar navigation in `components/Sidebar.tsx`

## Future Enhancements

Potential features to add:
- User authentication for personalized content
- Backend CMS for easy content updates
- Real-time event updates
- Push notifications for important announcements
- Calendar integration (Google Calendar, iCal)
- Document uploads and management
- Advanced search functionality
- Multi-language support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for Bridgewater-Raritan High School.

## Support

For questions or issues:
- Email: studenthub@brrsd.k12.nj.us
- Visit the main office during school hours

---

**Built with ❤️ for BRHS Panthers** 🐾