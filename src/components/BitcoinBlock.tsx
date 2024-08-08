"use client";

import { getBlock, getBtcPrice } from "@/app/api/api";
import React, { useEffect, useState } from "react";

const BitcoinBlock = () => {
  const [blockInfo, setBlockInfo] = useState<any>(null);
  const [priceInfo, setPriceInfo] = useState<any>(null);

  useEffect(() => {
    const fetchBlockAndPrice = async () => {
      const blockResponse = await getBlock();

      const priceResponse: any = await getBtcPrice();

      setBlockInfo(blockResponse.data[0]);
      setPriceInfo(priceResponse?.data?.bpi?.USD?.rate);
    };

    // setInterval(() => {
    fetchBlockAndPrice();
    // }, 10000);
  }, []);

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h2 className="font-bold">Current Bitcoin Block & Price</h2>
      {blockInfo && priceInfo ? (
        <div className="text-slate-200">
          <p>Block Hash: {blockInfo.id}</p>
          <p>Block Height: {blockInfo.height}</p>
          <p>BTC Price: ${priceInfo}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BitcoinBlock;
