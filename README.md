# Rijksmuseum


## Installation

```javascript
npm install
npm run dev
```

This project required at least node@22 to run.
It has not been tester with lower versions.

## Unit tests

```javascript
npm run test
```

## ToDo

A prioritized list of actions that would improve DX, quality, production readiness or my curiosity

- Why alias are not working...
- Add eslint rules to organize import at top of files
- Add playwright for e2e tests
- Add CI workflow to deploy website
- Improve css variable management
- Add stylelint configuration
- Add Remix (react router v7) for SSR
- Use tool to reduce image size
- Improve monorepo management with turboRepo
- Add more workspace to share configuration (typescript, eslint, lint-staged...)
- Add Storybook for library components
- Add a custom render for RTL (https://testing-library.com/docs/react-testing-library/setup/#custom-render)
- Api key should be kept in a vault

## Few words 

I think it took me 12 hours to bring this project to life.

It may sound quite a lot for an interview test, but i though it was a good opportunity
for me test libraries i never use like vite and vitest, or to use last version of react router,
that would allow me to make ssr after some customization.

I make the project a monorepo, to allow me to have separate and reusable libraries.

Maybe i will add few commits in the future to take advantage of what i've done and add a playwright
workspace and some SSR via Remix (react router v7).

I don't add much comment, because i think the code speak by itself. I hope you will find it too.
