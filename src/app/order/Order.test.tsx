import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import OrderPage from "./page";
import "@testing-library/jest-dom";

jest.mock("axios");

describe("OrderPage", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders the component and handles loading state", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        id: "7d138fda-001c-4421-b1df-cbb5b8571d20",
        state: "completed",
        charge: {
          status: "unpaid",
          address: "mock-address",
          amount: "1000",
          currency: "USD",
          uri: "mock-uri",
          description: "mock description",
          hosted_checkout_url: "https://mock-hosted-checkout-url.com",
          fiat_value: "50",
        },
      },
    });

    render(<OrderPage />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("displays order information after fetching data", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        id: "7d138fda-001c-4421-b1df-cbb5b8571d20",
        state: "completed",
        charge: {
          status: "unpaid",
          address: "mock-address",
          amount: "1000",
          currency: "USD",
          uri: "mock-uri",
          description: "mock description",
          hosted_checkout_url: "https://mock-hosted-checkout-url.com",
          fiat_value: "50",
        },
      },
    });

    render(<OrderPage />);

    await waitFor(() => {
      expect(screen.getByText("Order Information")).toBeInTheDocument();
      expect(screen.getByText("Order ID:")).toBeInTheDocument();
      expect(
        screen.getByText("7d138fda-001c-4421-b1df-cbb5b8571d20")
      ).toBeInTheDocument();
      expect(screen.getByText("Payment status:")).toBeInTheDocument();
      expect(screen.getByText("unpaid")).toBeInTheDocument();
      expect(screen.getByText("Payment Address:")).toBeInTheDocument();
      expect(screen.getByText("mock-address")).toBeInTheDocument();
      expect(screen.getByText("Amount to Pay:")).toBeInTheDocument();
      expect(screen.getByText("1000")).toBeInTheDocument();
      expect(screen.getByText("Currency:")).toBeInTheDocument();
      expect(screen.getByText("USD")).toBeInTheDocument();
      expect(screen.getByText("Payment URI:")).toBeInTheDocument();
      expect(screen.getByText("mock-uri")).toBeInTheDocument();
      expect(screen.getByText("Description:")).toBeInTheDocument();
      expect(screen.getByText("mock description")).toBeInTheDocument();
      expect(screen.getByText("Hosted Checkout URL:")).toBeInTheDocument();
      expect(
        screen.getByText("https://mock-hosted-checkout-url.com")
      ).toBeInTheDocument();
      expect(screen.getByText("Fiat Value:")).toBeInTheDocument();
      expect(screen.getByText("50")).toBeInTheDocument();
      expect(screen.getByText("State:")).toBeInTheDocument();
      expect(screen.getByText("completed")).toBeInTheDocument();
    });
  });
});
