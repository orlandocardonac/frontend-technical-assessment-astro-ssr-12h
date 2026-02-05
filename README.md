# Abasa Frontend

Demo project built with Astro, React, and Tailwind CSS to showcase different data-fetching strategies in a modern web app.

## Highlights

- **Authentication** with a demo login screen
- **Product listing** with search and filters
- **Product detail pages** per item
- **Contact page** consuming an external API
- **Responsive design** for mobile and desktop
- **Server-Side Rendering (SSR)** for better performance and SEO

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/orlandocardonac/frontend-technical-assessment-astro-ssr-12h.git
   cd frontend-technical-assessment-astro-ssr-12h
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:4321 in your browser.

## Data Sources

The project demonstrates two data consumption approaches:

### 1) Local JSON files
Product data lives in `src/data/`.
- `items.json`: product list and details
- `users.json`: demo user credentials for authentication

### 2) External API
The contact page fetches data from an external endpoint:
- URL: `https://gist.githubusercontent.com/orlandocc/.../orlandocardona`
- Method: GET
- Response: JSON

## Project Structure

```
/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Reusable React components
│   ├── data/            # Local JSON files
│   ├── layouts/         # Page templates
│   └── pages/           # Application routes
│       ├── index.astro  # Login page
│       ├── home.astro   # Product listing
│       ├── item/        # Product detail pages
│       └── contacto.astro # Contact page
└── package.json
```

## Helpful Commands

| Command               | Action                                         |
|-----------------------|------------------------------------------------|
| `npm install`         | Install dependencies                           |
| `npm run dev`         | Start the dev server                           |
| `npm run build`       | Build for production                           |
| `npm run preview`     | Preview the production build locally           |
| `npm run astro ...`   | Run Astro CLI commands                         |

## Demo Credentials

- **Test user** (dummy login):
  - Email: admin@example.com
  - Password: admin123

> **Note:** Authentication is purely for demonstration. Credentials are not securely validated for production use.


