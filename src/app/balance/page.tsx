"use client";

import React, { useEffect, useState } from "react";
import { AddressPurpose, BitcoinNetworkType, getAddress } from "sats-connect";
import { getBalance } from "../api/api";

const BRC20BalancePage = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await getBalance(address);

        if (response.data?.result && Array.isArray(response.data.result)) {
          const tokenInfo = response.data.result[0];
          setBalance(tokenInfo.available_balance / 10 ** 18);
        } else {
          console.log("No BRC20 balance data found.");
          setBalance(0);
        }
      } catch (error: any) {
        if (error.response.data.error == "no balance found") setBalance(0);
      }
    };

    if (address) {
      fetchBalance();
    }
  }, [address]);

  const handleConnect = async () => {
    await getAddress({
      payload: {
        purposes: [
          AddressPurpose.Ordinals,
          AddressPurpose.Payment,
          AddressPurpose.Stacks,
        ],
        message: "SATS Connect Demo",
        network: {
          type: BitcoinNetworkType.Mainnet,
        },
      },
      onFinish: (response) => {
        setAddress(response.addresses[0].address);
      },
      onCancel: () => alert("Request canceled"),
    });
  };

  return (
    <div className="p-6 m-5 bg-slate-700 rounded-lg shadow-md space-y-4">
      <h1 className="text-3xl font-medium text-slate-100">
        BRC20 Token Balance
      </h1>
      {!address ? (
        <button
          onClick={handleConnect}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Connect a Wallet
        </button>
      ) : (
        <>
          <div className="text-lg font-medium text-slate-100">
            Connected to: <span className="font-bold">{address}</span>
          </div>
          {balance !== null ? (
            <>
              <p className="text-green-600 text-lg">
                BRC20 Available Balance: {balance}
              </p>
              <p className="text-green-600 text-lg">
                BRC20 Transferable Balance: {balance}
              </p>
            </>
          ) : (
            <p className="text-gray-500 text-lg">Loading...</p>
          )}
        </>
      )}
    </div>
  );
};

export default BRC20BalancePage;
