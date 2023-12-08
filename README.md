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

This will have some rules. (WIP)

### Husky

> https://www.npmjs.com/package/husky

# 3. THINGS I LEARNED

### How to have more than one style:

``<h1 role={'presentation'} className={`full-span ${styles.h1}`}> Hello World! </h1>``

### RouterProvider vs ReactRouter

- *`<ReactRouter>`* is NOT the same as `<RouterProvider>`. The first one doesn't let you use `createBrowserRouter` to
  create your paths. For that you should use
  ``ProviderRouter`` instead.

### Testing react router

It's **so different** from Angular. I was used to Angular's way to testing router using ``RouterTestingHarness`` that
was as easy as
adding your routes and that's all. But here you need, in some way, to **mock** the router since it doesn't know the
router context.

Let's see this example:

```
function LogoSessionTemplate() {
	return (
		<div className={styles.container}>
			<Link
				role={'link'}
				className={styles.link}
				to={'/login'}>
				<img
					className={styles.logo}
					alt={'no logged'}
					src={logout}
				/>
			</Link>
		</div>
	)
}
```

The premise of the test is the following: 'user should go to page `/login` when he clicks on the link'.

1. To afford that, first of all we need to **mock** the path:

````
LogoSession.spec.tsx

vi.mock('/login', () => ({
default: () => LoginTemplate,
}))

````

This is because **we are not using our router system**; that is, we dont *really have our ´´routes`` associated with de
router`*
Think in this like a **specific context**. Nothing **directly related** with this context **can be known**, and our
Router does not beloing _directly_
to this space of test. So first, we **mock** the direction to associated with the element we desire to be renderer when
user click on the actual path.

2. In **ReactRouterDocs**

> https://v5.reactrouter.com/web/guides/testing

It speaks about **some advices** you can get because of using ``<Link />`` tag among other ones.

[x] In case you have **multiple routes**,they strongly recommend use ``<MemoryRouter />``.
In chatgpt words:

> Yes, you can use <MemoryRouter> in your React
> tests when you want to simulate different routes and test the rendering
> of components within those routes,
> including what you might refer to as "outlets."
> In the context of React Router, an "outlet" is not a specific React Router
> component but rather a term often used in the React Router documentation and related discussions
> to describe the area of your application where the matched component for a route is rendered.
> This is often the area controlled by the <Switch> component.

One way or another, if you are using <Outlet /> or **multiple routes** you will need this tag.
Anyway, this is not the case so we can remove that instruction.

We'll use `<BrowserRouter>` insted;

````
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={<AppTemplate />}></Route>
					<Route
						path={'/login'}
						element={<LoginTemplate />}></Route>
				</Routes>
			</BrowserRouter>
````

> Docs:
> https://javascript.plainenglish.io/testing-react-router-with-react-testing-library-8e24f7bdca18
> https://medium.com/@Galaxy-Trek/how-to-test-routing-in-react-with-react-testing-library-652ee3b8c512
> https://stackoverflow.com/questions/70654872/how-to-test-react-router-v6-outlet-using-testing-library-react
> https://v5.reactrouter.com/web/guides/testing
> https://testing-library.com/docs/example-react-router/


> Now its time to develop the test.

````
	it('should set path /login when user is not logged and clicks on LogoSessionTemplate', async () => {
		render(
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={<AppTemplate />}></Route>
					<Route
						path={'/login'}
						element={<LoginTemplate />}></Route>
				</Routes>
			</BrowserRouter>
		)

		await userEvent.click(screen.getByRole('link'))

		await waitFor(() => {
			expect(screen.getByRole('form')).toBeInTheDocument()
		})
	})
````

```
render(
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={<AppTemplate />}></Route>
					<Route
						path={'/login'}
						element={<LoginTemplate />}></Route>
				</Routes>
			</BrowserRouter>
		)
```

In this step we configure our 'false' router to ``mock`` the real one.

We want to ensure that some elements are viewed if user changes its path. So:

````
	await userEvent.click(screen.getByRole('link'))
````

First of all we trigger the user's action.

````
		await waitFor(() => {
			expect(screen.getByRole('form')).toBeInTheDocument()
		})
````

Then we wait until the action is complete. After that, we can check if the actual component is rendering what we want.

This is a simple test, but a good first step to start our knowledge on this tests.

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
