"use client";

import React, { useEffect, useState } from "react";
import { getOrder } from "../api/api";

const OrderPage = () => {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response: any = await getOrder(
        "7d138fda-001c-4421-b1df-cbb5b8571d20"
      );

      setOrder(response.data);
    };

    fetchOrder();
  }, []);

  return (
    <div className="p-6 m-5 bg-slate-700 text-white rounded-lg shadow-lg space-y-4">
      <h1 className="bg-slate-800 p-4 rounded-md text-2xl font-semibold border-b-2 border-gray-500">
        Order Information
      </h1>
      {order ? (
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Order ID:</p>
            <p>{order.id}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Payment status:</p>
            <span
              className={`px-2 py-1 rounded-md ${
                order.status === "unpaid"
                  ? "bg-green-400 text-black"
                  : "bg-yellow-400 text-black"
              }`}
            >
              {order.charge.status}
            </span>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Payment Address:</p>
            <p>{order.charge.address}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Amount to Pay:</p>
            <p>{order.charge.amount}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Currency:</p>
            <p>{order.charge.currency}</p>
          </div>
          <div className="flex flex-col space-y-2 bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Payment URI:</p>
            <p className="break-words overflow-hidden">{order.charge.uri}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Description:</p>
            <p>{order.charge.description}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Hosted Checkout URL:</p>
            <a
              className="hover:underline"
              href={order.charge.hosted_checkout_url}
            >
              {order.charge.hosted_checkout_url}
            </a>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">Fiat Value:</p>
            <p>{order.charge.fiat_value}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="font-bold">State:</p>
            <p>{order.state}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default OrderPage;
