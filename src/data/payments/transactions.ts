export interface TransactionType {
  id: number;
  sender: string;
  receiver: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

export const transactions: TransactionType[] = [
  {
    id: 1,
    sender: "Ali Ventures",
    receiver: "Business Nexus",
    amount: 5000,
    status: "Completed",
    date: "10 July 2026",
  },
  {
    id: 2,
    sender: "Future Capital",
    receiver: "Business Nexus",
    amount: 12000,
    status: "Pending",
    date: "12 July 2026",
  },
  {
    id: 3,
    sender: "Sarah Ahmed",
    receiver: "Business Nexus",
    amount: 2500,
    status: "Completed",
    date: "15 July 2026",
  },
  {
    id: 4,
    sender: "Tech Investors",
    receiver: "Business Nexus",
    amount: 8000,
    status: "Failed",
    date: "18 July 2026",
  },
];