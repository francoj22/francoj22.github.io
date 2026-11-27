# Franco Gutierrez - Portfolio Website

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.5-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Welcome to my personal portfolio website! I'm Franco Gutierrez, a software engineer with a strong focus on software development and automation. I'm currently developing a SaaS application solution for the Fintech Industry.

🔗 **Live Site:** [https://francoj22.github.io](https://francoj22.github.io)

## 🚀 Tech Stack

This portfolio is built with modern web technologies:

- **Frontend Framework:** React 19.1.0
- **Language:** TypeScript 5.8.3
- **Build Tool:** Vite 6.3.5
- **Styling:** TailwindCSS 4.1.5
- **Routing:** React Router DOM 7.6.0
- **Animations:** Animate.css 4.1.1
- **SEO:** React Helmet 6.1.0
- **Deployment:** GitHub Pages via gh-pages
- **Containerization:** Docker & Docker Compose

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Docker** (optional, for containerized development/deployment)
- **Docker Compose** (optional, for multi-container setup)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/francoj22/francoj22.github.io.git
   cd francoj22.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💻 Usage

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Deploy to GitHub Pages

Deploy the application to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## 🐳 Docker Support

This project includes Docker support for both development and production environments.

### Production Deployment with Docker

Build and run the production container:

```bash
# Using Docker Compose
docker-compose up portfolio-prod

# Or using Docker directly
docker build -t francoj22-portfolio .
docker run -p 81:80 francoj22-portfolio
```

Access the application at `http://localhost:81`

### Development with Docker

Run the development environment in a container:

```bash
docker-compose up portfolio-dev
```

Access the development server at `http://localhost:5174`

The development container includes:
- Hot module replacement
- Volume mounting for live code updates
- All development dependencies

## 📁 Project Structure

```
francoj22.github.io/
├── src/                    # Source files
│   ├── assets/            # Static assets (images, CSS, etc.)
│   ├── blogs/             # Blog content files
│   ├── types/             # TypeScript type definitions
│   ├── MainPage.tsx       # Main page component
│   ├── blog.tsx           # Blog component
│   ├── list_of_blogs.tsx  # Blog list component
│   └── main.tsx           # Application entry point
├── public/                # Public static files
├── dist/                  # Production build output (generated)
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── Dockerfile             # Docker production configuration
├── Dockerfile.dev         # Docker development configuration
└── docker-compose.yml     # Docker Compose configuration
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |
| `npm run predeploy` | Pre-deployment build (automatically runs before deploy) |
| `npm run deploy` | Deploy to GitHub Pages |

## 🌟 Features

- **Responsive Design:** Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI:** Built with TailwindCSS and custom animations
- **Blog Section:** Integrated blog functionality
- **SEO Optimized:** Meta tags and React Helmet for better search engine visibility
- **Fast Performance:** Optimized with Vite for lightning-fast builds and HMR
- **Docker Ready:** Containerized for consistent development and deployment

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.ts`.

### TypeScript Configuration

TypeScript settings are split into:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node-specific settings

### ESLint Configuration

Code quality rules are defined in `eslint.config.js` using the latest ESLint flat config format.

## 📄 License

This project is licensed under the SUGI FKMS LTD License.

## 👤 Author

**Franco Gutierrez**
- Email: franco.salazarg@gmail.com
- GitHub: [@francoj22](https://github.com/francoj22)
- Website: [https://francoj22.github.io](https://francoj22.github.io)

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions, feel free to open an issue!

---

Built with ❤️ using React, TypeScript, and Vite
