# Try Jewl - AI-Powered Document Search

A modern, responsive website for jewl.ai's try platform - an AI-powered document assistant that helps users find, analyze, and extract valuable insights from documents through WhatsApp and Telegram.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Zod for form validation

## Features

- **Minimalist Splash Page**: Clean, focused interface with clear CTAs
- **Dual Platform Support**: Direct integration with WhatsApp and Telegram
- **Responsive Design**: Optimized for all device sizes
- **Accessibility First**: ARIA labels, semantic structure, keyboard navigation
- **Performance Optimized**: Fast loading, minimal bundle size

## Project Structure

```
jewl-ai-website-v2/
├── components/             # React components
│   ├── ui/                 # Reusable UI components (shadcn)
│   ├── lib/                # Component utility functions
│   └── Layout.tsx          # Main layout component
├── pages/                  # Next.js pages
│   ├── _app.tsx            # App wrapper
│   └── index.tsx           # Homepage splash page
├── public/                 # Static assets
│   ├── icons/              # Platform icons (WhatsApp, Telegram)
│   └── logo-*.png          # Logo files
├── styles/                 # CSS styles
│   ├── globals.css         # Global styles with Tailwind
│   └── splash.module.css   # Splash page specific styles
├── consolidated-tests/     # Test files
│   ├── splash.test.js      # Main functionality tests
│   ├── a11y.test.js        # Accessibility tests
│   └── responsive.test.js  # Responsive design tests
└── netlify.toml            # Netlify deployment configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run linting
- `npm test` - Run tests

## Testing

We maintain comprehensive test coverage:

- **Splash Tests**: Button functionality, content verification
- **Accessibility Tests**: ARIA compliance, semantic structure
- **Responsive Tests**: Mobile/desktop layout validation

To run tests:
```bash
npm test
```

## Deployment

This project is configured for deployment to Netlify as `try.jewl.netlify.app`.

### Build Settings
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

### Deployment Process
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Configure custom domain: `try.jewl.netlify.app`
4. Automatic deployments on git push

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## License

[MIT](https://choosealicense.com/licenses/mit/)
