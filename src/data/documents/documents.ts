export interface DocumentType {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadDate: string;
  status: "Draft" | "In Review" | "Signed";
}

export const documents: DocumentType[] = [
  {
    id: 1,
    name: "Business_Plan.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedBy: "Sarah Ahmed",
    uploadDate: "02 July 2026",
    status: "Draft",
  },
  {
    id: 2,
    name: "Pitch_Deck.pptx",
    type: "PPTX",
    size: "5.1 MB",
    uploadedBy: "Michael Lee",
    uploadDate: "03 July 2026",
    status: "In Review",
  },
  {
    id: 3,
    name: "Financial_Report.xlsx",
    type: "XLSX",
    size: "1.8 MB",
    uploadedBy: "Ali Ventures",
    uploadDate: "04 July 2026",
    status: "Signed",
  },
];