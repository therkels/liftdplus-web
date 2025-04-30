import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/components/Home";



describe("Home", () => {
    beforeEach(() => {
        render(<Home />);
    });
    test("renders the home component", () => {
        const homeElement = screen.getByText(/Home/i);
        expect(homeElement).toBeInTheDocument();
    });
    });