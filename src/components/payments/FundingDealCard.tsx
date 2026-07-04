import { HandCoins, ArrowRight, CheckCircle } from "lucide-react";

interface Props {
  investor: string;
  entrepreneur: string;
  amount: number;
}

const FundingDealCard = ({
  investor,
  entrepreneur,
  amount,
}: Props) => {
  const handleFund = () => {
    alert(
      `Funding Successful!\n\n${investor} funded $${amount.toLocaleString()} to ${entrepreneur}.`
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <HandCoins className="text-green-600" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Funding Deal
          </h2>

          <p className="text-gray-500">
            Investor → Entrepreneur
          </p>
        </div>

      </div>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <div>
            <p className="text-sm text-gray-500">
              Investor
            </p>

            <h3 className="font-semibold text-lg">
              {investor}
            </h3>
          </div>

          <ArrowRight className="text-blue-600" />

          <div className="text-right">
            <p className="text-sm text-gray-500">
              Entrepreneur
            </p>

            <h3 className="font-semibold text-lg">
              {entrepreneur}
            </h3>
          </div>

        </div>

        <div className="bg-blue-50 rounded-xl p-5">

          <p className="text-gray-500">
            Funding Amount
          </p>

          <h1 className="text-4xl font-bold text-blue-600 mt-2">
            ${amount.toLocaleString()}
          </h1>

        </div>

        <button
          onClick={handleFund}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
        >
          <CheckCircle size={20} />
          Confirm Funding
        </button>

      </div>

    </div>
  );
};

export default FundingDealCard;