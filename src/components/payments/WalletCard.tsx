import { Wallet, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

interface Props {
  balance: number;
}

const WalletCard = ({ balance }: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-blue-100 text-sm uppercase tracking-wider">
            Wallet Balance
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ${balance.toLocaleString()}
          </h1>

        </div>

        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">

          <Wallet size={32} />

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-white/10 rounded-xl p-4">

          <div className="flex items-center gap-2 text-green-300">

            <ArrowDownCircle size={20} />

            <span>Total Received</span>

          </div>

          <h2 className="text-2xl font-semibold mt-2">
            $25,500
          </h2>

        </div>

        <div className="bg-white/10 rounded-xl p-4">

          <div className="flex items-center gap-2 text-red-300">

            <ArrowUpCircle size={20} />

            <span>Total Sent</span>

          </div>

          <h2 className="text-2xl font-semibold mt-2">
            $8,000
          </h2>

        </div>

      </div>

    </div>
  );
};

export default WalletCard;