import { useState } from "react";
import WalletCard from "../../components/payments/WalletCard";
import PaymentActions from "../../components/payments/PaymentActions";
import FundingDealCard from "../../components/payments/FundingDealCard";
import TransactionTable from "../../components/payments/TransactionTable";

import {
  transactions,
  TransactionType,
} from "../../data/payments/transactions";

const PaymentsPage = () => {
  const [walletBalance, setWalletBalance] = useState(25000);

  const [transactionHistory] =
    useState<TransactionType[]>(transactions);

  const handleDeposit = () => {
    alert("Deposit Successful (Mock)");
    setWalletBalance((prev) => prev + 1000);
  };

  const handleWithdraw = () => {
    alert("Withdrawal Successful (Mock)");
    setWalletBalance((prev) => prev - 1000);
  };

  const handleTransfer = () => {
    alert("Transfer Successful (Mock)");
    setWalletBalance((prev) => prev - 500);
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Payments
        </h1>

        <p className="text-gray-500 mt-1">
          Manage wallet, transactions and funding deals.
        </p>

      </div>

      {/* Wallet */}

      <WalletCard
        balance={walletBalance}
      />

      {/* Actions */}

      <PaymentActions
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onTransfer={handleTransfer}
      />

      {/* Funding */}

      <FundingDealCard
        investor="Ali Ventures"
        entrepreneur="Business Nexus"
        amount={5000}
      />

      {/* Transactions */}

      <TransactionTable
        transactions={transactionHistory}
      />

    </div>
  );
};

export default PaymentsPage;