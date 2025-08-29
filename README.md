# 🐾 Borzolini Clinic PWA

A Progressive Web Application for managing pet clinic appointments and health tracking. Built with React, TypeScript, Tailwind CSS, and Vite.

## ✨ Features

- **Progressive Web App** - Installable on all devices
- **Responsive Design** - Optimized for mobile and desktop
- **TypeScript** - Full type safety and better developer experience
- **Modern UI** - Built with Tailwind CSS for beautiful, consistent design
- **Client-Side Routing** - Fast navigation with React Router
- **State Management** - TanStack Query for server state management
- **Offline Support** - Service worker for offline functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shayanea/borzolini-pwa.git
cd borzolini-pwa
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # Basic UI components
├── lib/                 # Utility functions and helpers
├── pages/               # Page components
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Dashboard page
│   ├── appointments/   # Appointments management
│   └── profile/        # User profile page
├── routes/              # Routing configuration
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **PWA**: Vite PWA Plugin
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📱 PWA Features

- **Installable** - Add to home screen on mobile devices
- **Offline Support** - Service worker for offline functionality
- **App-like Experience** - Native app feel with web technologies
- **Responsive Design** - Optimized for all screen sizes

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 🌐 API Integration

This PWA is designed to work with the Borzolini Clinic API backend. The API provides:

- User authentication and management
- Pet health records
- Appointment scheduling
- Veterinary consultations
- Health monitoring and alerts

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.
