# Docs

[Styles](#1-styles)

# 1. Styles
# 2. Configuration


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

### Prettier

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


# 3. PROBLEMS I FOUND

- `expect is not defined`

This happens when using vitest because jest use **globals** to define its expect. So we need to follow
this step: https://github.com/vitest-dev/vitest/issues/1504#issuecomment-1159668988. 

Create a `setup.ts` file and add the following:

````
import matchers = require('@testing-library/jest-dom/matchers')
import { expect } from 'vitest'

expect.extend(matchers)

````

Also add to our ``vitest.config.ts`` (if you dont have it, create it)
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
```npm install jsdom```

and then put this on *each* testing file you have:

````
/**
 * @vitest-environment jsdom
 */
````

Should look like this:


```
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App.tsx";
import {describe, expect, it} from "vitest";

/**
 * @vitest-environment jsdom
 */
describe('App', () =>{
    it('should render Hello World', () => {
        render(<App  />);

        expect(screen.getByRole('presentation')).toBeInTheDocument();
    })
})
```

This solves the error.

> Docs: https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl

