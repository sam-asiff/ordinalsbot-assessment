import { render, screen, waitFor } from "@testing-library/react";
import BitcoinBlock from "./BitcoinBlock"; // Adjust the import path as needed
import { getBlock, getBtcPrice } from "@/app/api/api"; // Adjust import as needed

jest.mock("@/app/api/api", () => ({
  getBlock: jest.fn(),
  getBtcPrice: jest.fn(),
}));

describe("BitcoinBlock Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders block info and price when data is fetched successfully", async () => {
    (getBlock as jest.Mock).mockResolvedValue({
      data: [
        {
          id: "00000000000000000008c14f2a4f0e948e5eb4a2b9282a1f8f5eae963ffddf0f",
          height: 123456,
        },
      ],
    });

    (getBtcPrice as jest.Mock).mockResolvedValue({
      data: {
        bpi: {
          USD: {
            rate: "20,000.00",
          },
        },
      },
    });

    render(<BitcoinBlock />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).toBeNull();
    });

    expect(
      screen.getByText(
        /Block Hash: 00000000000000000008c14f2a4f0e948e5eb4a2b9282a1f8f5eae963ffddf0f/i
      )
    ).toBeTruthy();
    expect(screen.getByText(/Block Height: 123456/i)).toBeTruthy();
    expect(screen.getByText(/BTC Price: \$20,000.00/i)).toBeTruthy();
  });

  it("renders loading state initially", () => {
    render(<BitcoinBlock />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });
});
