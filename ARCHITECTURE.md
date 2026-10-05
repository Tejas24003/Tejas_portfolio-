# React portfolio architecture

## Component and stylesheet graph

```mermaid
flowchart TD
    Main["src/main.jsx<br/>React root + StrictMode"]
    App["src/App.jsx<br/>theme state"]
    GlobalCSS["src/index.css<br/>Tailwind + global rules"]

    subgraph Components["src/Components"]
        Navbar["Navbar/Navbar.jsx"]
        Hero["Hero/Hero.jsx"]
        About["About.jsx"]
        Modal["Modal.jsx"]
        Project["Project.jsx<br/>capabilities"]
        Projects["Projects.jsx<br/>project index"]
        Footer["Footer.jsx"]
        Json["Json.jsx<br/>project records"]
        NavbarCSS["Navbar/Navbar.css"]
        ReadmoreCSS["Readmore.css"]
    end

    Main -->|"mounts"| App
    Main -.->|"imports global styles"| GlobalCSS
    App -->|"renders"| Navbar
    App -->|"renders"| Hero
    App -->|"renders"| Project
    App -->|"renders"| Projects
    App -->|"renders"| Footer
    Hero -->|"renders"| About
    Hero -.->|"conditionally renders when Contact is opened"| Modal
    Projects -->|"reads project records"| Json
    Navbar -.->|"imports stylesheet"| NavbarCSS
    Project -.->|"imports stylesheet"| ReadmoreCSS
    Projects -.->|"imports stylesheet"| ReadmoreCSS
    GlobalCSS -.->|"global styles available to rendered tree"| App
```

Solid arrows show rendering or data flow; dashed arrows show stylesheet or global-style dependencies.

## Direct component dependencies

| File | Component/data dependencies | CSS |
| --- | --- | --- |
| `src/main.jsx` | Renders `App` inside React `StrictMode` | Imports `src/index.css` |
| `src/App.jsx` | `Navbar`, `Hero`, `Project`, `Projects`, `Footer` | Uses Tailwind utility classes; global Tailwind setup comes from `src/index.css` |
| `src/Components/Navbar/Navbar.jsx` | None | Imports `src/Components/Navbar/Navbar.css`; also uses Tailwind utility classes |
| `src/Components/Hero/Hero.jsx` | `About`; conditionally renders `Modal` | Uses Tailwind utility classes |
| `src/Components/About.jsx` | None | Uses Tailwind utility classes |
| `src/Components/Modal.jsx` | None | Uses Tailwind utility classes |
| `src/Components/Project.jsx` | None | Imports `src/Components/Readmore.css`; also uses Tailwind utility classes |
| `src/Components/Projects.jsx` | Reads records from `src/Components/Json.jsx` | Imports `src/Components/Readmore.css`; also uses Tailwind utility classes |
| `src/Components/Footer.jsx` | None | Uses Tailwind utility classes |
| `src/Components/Json.jsx` | Project records and image assets; not a rendered component | None |

`src/index.css` is the global entry point for Tailwind and shared CSS rules. `main.jsx` also imports `createBrowserRouter`, but does not use it; the current app is mounted directly without a router.
