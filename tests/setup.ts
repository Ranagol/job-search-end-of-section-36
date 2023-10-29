/**
 * In this file we configure, whatever the hell installed with this command:
 * npm install –save-dev @testing-library/vue @testing-library/jest-dom @testing-library/user-event
 * All this is regarding the Vue Testing Library, aka VTL
 */
import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";

//Here we adding additional matchers for testing. Example for matcher: toBe. expect() comes from Vitest
expect.extend(matchers);

/**
 * Whenever we render a Vue component, VTL will create a virtual DOM. A virtual DOM is a simulated
 * browser enviroment. The goal is to translate our Vue component into a html webpage in a simulated 
 * DOM. Now this sim. enviroment is going to exists, for further tests too. But we want a new 
 * simulated DOM enviroment for each testing. afterEach() is a function from Vitest.
 * Vitest will run this cleanup function after our every
 * testing. This cleanup() deletes the simulated DOM. So we can create a new simulated DOM for the
 * next testing. Testing in this case is runnung one it() function in our test file.
 */
afterEach(() => {
  cleanup();
});
