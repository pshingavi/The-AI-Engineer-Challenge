# Frontend - AI Mental Coach Chat Interface

A modern Next.js chat interface with an ARC Prize-inspired theme, designed to work with the FastAPI backend.

## Features

- 🎨 **ARC Prize-inspired Theme**: Clean, minimal, dark design matching the ARC Prize aesthetic
- 💬 **Real-time Chat Interface**: Smooth, responsive chat experience
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast & Modern**: Built with Next.js 16, React 19, and Tailwind CSS 4
- 🔄 **Auto-scroll**: Automatically scrolls to latest messages
- ⏳ **Loading States**: Visual feedback during API calls

## Prerequisites

- Node.js 20.9.0 or higher (required for Next.js 16)
- npm or yarn package manager
- The FastAPI backend running on `http://localhost:8000`

## Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## Running the Development Server

1. Make sure the FastAPI backend is running (see `../api/README.md` for instructions).

2. Start the Next.js development server:

```bash
npm run dev
```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically reload when you make changes to the code.

## Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   ├── ChatInterface.tsx   # Main chat container component
│   │   ├── ChatMessage.tsx     # Individual message component
│   │   └── ChatInput.tsx       # Message input component
│   ├── globals.css             # Global styles and theme
│   ├── layout.tsx              # Root layout with fonts and metadata
│   └── page.tsx                # Home page (renders ChatInterface)
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## API Integration

The frontend communicates with the FastAPI backend at `http://localhost:8000/api/chat`.

**Request Format:**
```json
{
  "message": "Your message here"
}
```

**Response Format:**
```json
{
  "reply": "AI assistant response"
}
```

## Customization

### Theme Colors

The theme is configured in `app/globals.css` using CSS variables:

- `--background`: Main background color (`#0a0a0a`)
- `--foreground`: Primary text color (`#ededed`)
- `--accent`: Primary accent color (`#0066ff`)
- `--border`: Border colors (`#1a1a1a`)

### Typography

The app uses Inter font family for a clean, modern look. You can change this in `app/layout.tsx`.

## Building for Production

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Troubleshooting

### Backend Connection Issues

If you see connection errors:
1. Ensure the FastAPI backend is running on `http://localhost:8000`
2. Check that CORS is properly configured in the backend
3. Verify the API endpoint URL in `app/components/ChatInterface.tsx`

### Node Version Issues

If you encounter Node.js version errors:
1. Ensure you have Node.js 20.9.0 or higher installed
2. Consider using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions
3. Check your Node version with: `node --version`

## Tech Stack

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **Inter Font**: Modern, clean typography

## Development Notes

- The chat interface is fully client-side rendered for optimal performance
- Messages are stored in component state (not persisted)
- The backend URL is hardcoded to `http://localhost:8000` - update for production deployment
- All styling follows the ARC Prize aesthetic with dark theme and minimal design
