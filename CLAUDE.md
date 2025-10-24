# Claude Development Guidelines

## Component Library
We use **shadcn-svelte** for all UI components. Never use native HTML elements directly.

- Always use shadcn-svelte components instead of `<div>`, `<button>`, `<input>`, etc.
- If a component is not installed, add it using the shadcn-svelte CLI:
  ```bash
  pnpm dlx shadcn-svelte@latest add <component-name>
  ```
- Check the [shadcn-svelte documentation](https://www.shadcn-svelte.com/) for component usage and available options.

## Package Manager
We use **pnpm**, not npm.

- All package management commands should use `pnpm` instead of `npm`
- Examples:
  - `pnpm install` (not `npm install`)
  - `pnpm add <package>` (not `npm install <package>`)
  - `pnpm dev` (not `npm run dev`)

## Development Server
Never run the dev server unless explicitly requested by the user.

- Do not start the development server with `pnpm dev` unless the user specifically asks you to
