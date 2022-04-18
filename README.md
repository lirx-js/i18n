[![npm (scoped)](https://img.shields.io/npm/v/@lirx/i18n.svg)](https://www.npmjs.com/package/@lirx/i18n)
![npm](https://img.shields.io/npm/dm/@lirx/i18n.svg)
![NPM](https://img.shields.io/npm/l/@lirx/i18n.svg)
![npm type definitions](https://img.shields.io/npm/types/@lirx/i18n.svg)

## @lirx/i18n

This library provides functions to build i18n applications using Observables.

## 📦 Installation

```bash
yarn add @lirx/i18n
# or
npm install @lirx/i18n --save
```

This library supports:

- **common-js** (require): transpiled as es5, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@lirx/i18n](https://cdn.skypack.dev/@lirx/i18n)
