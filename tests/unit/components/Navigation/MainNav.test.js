import { render, screen } from "@testing-library/vue";

//We have to import the component that we will test
import MainNav from '@/components/Navigation/MainNav.vue';

describe('MainNav', () => {
  it('Displays company name', () => {
    
    /**
     * Here we simulating a component rendering in virtual DOM. This is needed for testing a component.
     */
    render(MainNav);

    /**
     * This will display the html structure of our vue component under testing, in the virtual DOM,
     * in the terminal.
     */
    screen.debug()

  });
});