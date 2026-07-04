import { ArrowDownLeft, ArrowUpRight, Repeat } from "lucide-react";

interface Props {
  onDeposit: () => void;
  onWithdraw: () => void;
  onTransfer: () => void;
}

const PaymentActions = ({
  onDeposit,
  onWithdraw,
  onTransfer,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {/* Deposit */}

      <button
        onClick={onDeposit}
        className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-6 shadow-lg transition duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center">

          <ArrowDownLeft size={36} />

          <h2 className="text-xl font-semibold mt-3">
            Deposit
          </h2>

          <p className="text-green-100 mt-2 text-sm">
            Add funds to your wallet
          </p>

        </div>
      </button>

      {/* Withdraw */}

      <button
        onClick={onWithdraw}
        className="bg-red-600 hover:bg-red-700 text-white rounded-2xl p-6 shadow-lg transition duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center">

          <ArrowUpRight size={36} />

          <h2 className="text-xl font-semibold mt-3">
            Withdraw
          </h2>

          <p className="text-red-100 mt-2 text-sm">
            Withdraw your balance
          </p>

        </div>
      </button>

      {/* Transfer */}

      <button
        onClick={onTransfer}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 shadow-lg transition duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center">

          <Repeat size={36} />

          <h2 className="text-xl font-semibold mt-3">
            Transfer
          </h2>

          <p className="text-blue-100 mt-2 text-sm">
            Send funds securely
          </p>

        </div>
      </button>

    </div>
  );
};

export default PaymentActions;