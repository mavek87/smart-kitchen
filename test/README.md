# Test Documentation

### Setup

https://www.youtube.com/watch?v=8Xwq35cPwYg

1) Install vitest
Purpose: run tests in vite 

```
pnpm i -D vitest
```

2) Add test to package.json "scripts" section

``` 
"test": "vitest",
"test:ui": "vitest --ui",
```

3) Add a "test" folder in the project root (next to src) and check if tests are working with this example:

```
import { it, expect, describe } from "vitest";

describe("group", () => {
    it("should", () => {
        expect(1).toBeTruthy();
    })
})
```

p.s. Install vitest-ui when asked by the terminal

4) Install react testing library (https://testing-library.com/docs/react-testing-library/intro/) 
Purpose: test react components

```
pnpm i -D @testing-library/react @testing-library/dom
```

5) Install jsdom
Purpose: Work with the DOM in node

``` 
pnpm i -D jsdom
```

6) Add this as the first row of vite.config.js

``` 
/// <reference types="vitest" />
```

and this inside defineConfig({: 

```
test: {
    environment: 'jsdom'
}`
```

7) Install jest-dom 
Purpose: Set of matchers to writing assertions against the DOM

``` 
pnpm i -D @testing-library/jest-dom
```