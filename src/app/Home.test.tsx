import { render, screen } from "@testing-library/react";
import HomePage from "./page";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  it("renders the component correctly", () => {
    render(<HomePage />);

    expect(screen.getByText("Welcome to OrdinalsBot")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /View BRC20 Balance/i })
    ).toHaveAttribute("href", "/balance");
    expect(
      screen.getByRole("link", { name: /View Order Information/i })
    ).toHaveAttribute("href", "/order");
  });
});
