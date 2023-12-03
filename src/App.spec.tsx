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
