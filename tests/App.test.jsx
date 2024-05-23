import { render, screen } from "@testing-library/react";
import App from "../src/App";

it("should render the App", () => {
    render(<App />);

    expect(screen.getByText("© 2024 DFCorp")).toBeInTheDocument();
});
