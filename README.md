# Docs

<h4>

[1. Styles](#1-styles)

[2. Configuration](#2-configuration)

[3. Things learned]

[4. Problems I found](#3-problems-i-found)

</h4>

# 1. Styles

### Media queries

- Mobile: 600px
- Tablet: 900px
- Desktop: Ahead from 900px

### System column

- Mobile: 4 columns
- Tablet: 8 columns
- Desktop: 12 columns

### Margins

- Mobile: 0.5rem;
- Tablet and Desktop: 0.75rem;

# 2. Configuration

### a) Prettier

> https://prettier.io/docs/en/install.html

- RULES:

```
{
  "useTabs": true,
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "quoteProps": "consistent",
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "css",
  "singleAttributePerLine": true
}

```

### b) React Router Dom

- *`<ReactRouter>`* is NOT the same as `<RouterProvider>`. The first one doesn't let you use `createBrowserRouter` to
  create your paths. For that you should use
  ``ProviderRouter`` instead.

# 3. THINGS I LEARNED

### How to have more than one style:

``<h1 role={'presentation'} className={`full-span ${styles.h1}`}> Hello World! </h1>``

# 4. PROBLEMS I FOUND

- `expect is not defined`

This happens when using vitest because jest use **globals** to define its expect. So we need to follow
this step: https://github.com/vitest-dev/vitest/issues/1504#issuecomment-1159668988.

Create a `setup.ts` file and add the following:

```
import matchers = require('@testing-library/jest-dom/matchers')
import { expect } from 'vitest'

expect.extend(matchers)

```

Also add to our `vitest.config.ts` (if you dont have it, create it)
this configuration:

```
export default mergeConfig(viteConfig, defineConfig({
test: {
globals: true,
setupFiles: ['./setup.ts'],
},
}))
```

This error will be solved.

- `document is not defined`

This happens because the test is running in the **DOM** `environment`, not in the **node**. So it needs
to know this environment.

First of all install jsdom:
`npm install jsdom`

and then put this on _each_ testing file you have:

```
/**
 * @vitest-environment jsdom
 */
```

Should look like this:

```
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import AppTemplate from "./App.template.tsx";
import {describe, expect, it} from "vitest";

/**
 * @vitest-environment jsdom
 */
describe('AppTemplate', () =>{
    it('should render Hello World', () => {
        render(<AppTemplate  />);

        expect(screen.getByRole('presentation')).toBeInTheDocument();
    })
})
```

This solves the error.

> Docs: https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl
