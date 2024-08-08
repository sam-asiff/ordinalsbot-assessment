import React from "react";
import Link from "next/link";
import BitcoinBlock from "@/components/BitcoinBlock";

const HomePage = () => {
  return (
    <div className="p-6 m-5 bg-slate-700 rounded-lg shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-slate-100">
        Welcome to OrdinalsBot
      </h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/balance"
              className="text-slate-200 hover:text-blue-500 underline"
            >
              View BRC20 Balance
            </Link>
          </li>
          <li>
            <Link
              href="/order"
              className="text-slate-200 hover:text-blue-500 underline"
            >
              View Order Information
            </Link>
          </li>
        </ul>
      </nav>
      <BitcoinBlock />
    </div>
  );
};

export default HomePage;
