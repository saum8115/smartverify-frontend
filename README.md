# SmartVerify Frontend

A responsive landing page for SmartVerify, built from the supplied Figma prototype. Includes all visible sections, dropdown and mobile navigation, expandable FAQs, dashboard image previews and a frontend-only demo dialog.

## Tech Stack

- HTML5
- React 19
- TypeScript
- Tailwind CSS v4
- TanStack Start (Vite)

## Design and Functionality Notes

- Figma reference: https://www.figma.com/proto/FsGlBZeeOm0oCjGGIgfhl9/Smart-Verify-website?node-id=0-1
- Images were captured from the publicly viewable prototype, not exported from the original Figma layers. Some icons are approximated with Lucide. Original vector assets and font specifications would be needed for a pixel-perfect production handoff.
- FAQ answers are provisional copy based on the visible page content.
- Demo requests are not submitted or stored. No backend is included.
- Footer and navigation items point to relevant sections of the page. Additional website pages are not included.
- Local copies of all displayed imagery are in `public/design-assets`.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (or Bun)

### Installation and run

```bash
git clone https://github.com/saum8115/smartverify-frontend.git
cd smartverify-frontend
npm install
npm run dev
```

Open the local URL shown in the terminal.

### Other commands

```bash
npm run build   # production build
npm run test    # routing test (Vitest)
```

## Project Structure

```
src/
  components/   Reusable UI components
  routes/       Page routes
  hooks/        Custom hooks
  lib/          Utilities
  test/         Tests
public/
  design-assets/  Local images used in the design
```

## Author

Saumya