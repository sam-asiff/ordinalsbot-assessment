# OrdinalsBot Next.js Project

This project is a Next.js application that connects to a Bitcoin wallet, retrieves BRC20 token balances, and displays order information from the OrdinalsBot API.

## Getting Started

### 1. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the actual API key provided.

### 3. Run the Development Server

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Connecting a Wallet

### 1. Access the Balance Page

Click on "Balance" in the navigation menu or visit `/balance`.

### 2. Connect Your Wallet

- Click the **"Connect a Wallet"** button.
- Select the address with the **"ordinals"** purpose when prompted.
- After successfully connecting, your BRC20 token balance will be displayed.

### 3. View Order Information

Click on "Order" in the navigation menu or visit `/order` to see the relevant details of an order.

After building, deploy to a platform like Vercel or Netlify.

## Additional Information

This project fetches data from the OrdinalsBot API, including BRC20 token balances and order details. Make sure you have a valid API key and wallet connected for full functionality.
# ordinalsbot-assessment
