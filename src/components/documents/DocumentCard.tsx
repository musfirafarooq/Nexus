import {
  Download,
  Trash2,
  FileText,
  Eye,
  PenTool,
} from "lucide-react";

import { DocumentType } from "../../data/documents/documents";

interface Props {
  document: DocumentType;
  onDelete: (id: number) => void;
  onPreview: (document: DocumentType) => void;
  onSign: () => void;
}

const statusColors = {
  Draft: "bg-yellow-100 text-yellow-700",
  "In Review": "bg-blue-100 text-blue-700",
  Signed: "bg-green-100 text-green-700",
};

const DocumentCard = ({
  document,
  onDelete,
  onPreview,
  onSign,
}: Props) => {
  const handleDownload = () => {
    alert(`Downloading ${document.name}`);
  };

  return (
    <div className="bg-white rounded-xl shadow border p-5 flex items-center justify-between hover:shadow-md transition">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
          <FileText className="text-blue-600" size={24} />
        </div>

        <div>

          <h2 className="font-semibold text-lg">
            {document.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {document.type} • {document.size}
          </p>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
              statusColors[
                document.status as keyof typeof statusColors
              ]
            }`}
          >
            {document.status}
          </span>

          <p className="text-gray-400 text-xs mt-2">
            Uploaded by {document.uploadedBy} • {document.uploadDate}
          </p>

        </div>

      </div>

      <div className="flex gap-2">

        <button
          onClick={() => onPreview(document)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          title="Preview"
        >
          <Eye size={18} />
        </button>

        <button
          onClick={handleDownload}
          className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
          title="Download"
        >
          <Download size={18} />
        </button>

        <button
          onClick={onSign}
          className="p-2 rounded-lg bg-green-100 hover:bg-green-200"
          title="Sign"
        >
          <PenTool size={18} />
        </button>

        <button
          onClick={() => onDelete(document.id)}
          className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
};

export default DocumentCard;