import { TransactionType } from "../../data/payments/transactions";

interface Props {
  transactions: TransactionType[];
}

const TransactionTable = ({ transactions }: Props) => {
  const getStatusStyle = (status: TransactionType["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">
        Transaction History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">Date</th>

            <th className="text-left py-3">Sender</th>

            <th className="text-left py-3">Receiver</th>

            <th className="text-left py-3">Amount</th>

            <th className="text-left py-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((transaction) => (

            <tr
              key={transaction.id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="py-4">
                {transaction.date}
              </td>

              <td className="py-4">
                {transaction.sender}
              </td>

              <td className="py-4">
                {transaction.receiver}
              </td>

              <td className="py-4 font-semibold text-blue-600">
                ${transaction.amount.toLocaleString()}
              </td>

              <td className="py-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                    transaction.status
                  )}`}
                >
                  {transaction.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TransactionTable;