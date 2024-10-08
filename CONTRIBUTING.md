# Contributing

Relictify is open to contributions. This document contains technical setup details, as well as contributing guidelines.

## Requirements

-   [Git](https://git-scm.com/) if you don't already have it.
-   [Node.js](https://nodejs.org/) 20 or greater.

## Getting Started

Ensure that the requirements stated above are fulfilled.

1. Clone this project `git clone https://github.com/NekoDrone/relictify-app`
2. Install dependencies `npm install`
3. Start the development server at least once to ensure all configuration files are generated properly `npm run dev`

You may also run the following:

```bash
git clone https://github.com/NekoDrone/relictify-app
npm install
npm run dev
```

Alternative for pnpm/yarn users:

```bash
git clone https://github.com/NekoDrone/relictify-app
pnpm install
pnpm dev
```

YMMV for Bun, none of the development team uses Bun.

You may visit the development version of the app at [http://localhost:3000/](http://localhost:3000/).

## Project Structure

This project generally follows the Next.js project structure using the App Router. Routes are placed in the `/src/app` directory, while components are placed in the `/src/components` category.

`/src/shared` for shared entities, `/src/functions` for helpers, and other functions. `/src/providers` for React context providers.

## Commit Guidelines

Before committing, please ensure that Prettier and ESLint are run. A `.prettierrc` file is given in the repository, alongside an `.eslintrc.json` file.

Please ensure that commits follow the [Conventional Commits](https://www.conventionalcommits.org/) pattern. Accepted commit types are `feat`, `fix`, `chore`, `test`, `refactor`, `docs`, `ci`, and `build`.

### Forks and Pull Requests

Commits to `master` are blocked unless made by a core collaborator.

You may fork the project on your own, and make pull requests to the `master` branch accordingly.

For pull requests, please ensure that they follow this convention
`[#{ISSUE_NO}]? {TYPE}: {MESSAGE}`. For example, `[#12] feat: label copy enhancements`, or `fix: character menu reload issue`.

Mentioning the issue number when opening a pull request to `master` will automatically link the PR to it.

### Additional Notes

1. The project uses Tailwind CSS to construct component styles. Please avoid using `@apply` directives unless absolutely necessary.
2. For applying new classes with Tailwind, please ensure that you have the [Tailwind Prettier plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) installed. Prettier will handle the ordering of classes accordingly.

## Issue Filing

For bug reports, feature requests, or other miscellaneous issues, please file it accordingly under the [issues tab](https://github.com/NekoDrone/relictify-app/issues) in the GitHub repository.

### Format

~~Please follow the issue template for bug reporting under `ISSUE_TEMPLATE.md`~~

This project now uses GitHub's Issue templates for both feature requests, and bug reports.

## FAQ

// To be added when questions arise.

## Support

For any additional support, such as general contributing guidelines, please drop the contributors a message on Discord.
