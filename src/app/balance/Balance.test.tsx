import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getAddress } from "sats-connect";
import BRC20BalancePage from "./page";
import "@testing-library/jest-dom";

jest.mock("sats-connect", () => ({
  getAddress: jest.fn(),
}));

const mockAxios = new MockAdapter(axios);

describe("BRC20BalancePage", () => {
  beforeEach(() => {
    mockAxios
      .onGet(
        "https://api.ordinalsbot.com/opi/v1/brc20/get_current_balance_of_wallet"
      )
      .reply(200, {
        result: [{ available_balance: 1000000000000000000 }],
      });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders the component correctly and handles the API response", async () => {
    render(<BRC20BalancePage />);
    expect(screen.getByText("BRC20 Token Balance")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Connect a Wallet/i })
    ).toBeInTheDocument();
  });
});
