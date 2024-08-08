import axios from "axios";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getOrder = async (id: string) => {
  return await axios.get("https://api.ordinalsbot.com/order", {
    params: {
      id,
    },
    headers: { "x-api-key": apiKey },
  });
};

export const getBalance = async (address: string) => {
  return await axios.get(
    "https://api.ordinalsbot.com/opi/v1/brc20/get_current_balance_of_wallet",
    {
      params: { address },
      headers: { "x-api-key": apiKey },
    }
  );
};

export const getBlock = () => {
  return axios.get("https://blockstream.info/api/blocks");
};

export const getBtcPrice = () => {
  return axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
};
