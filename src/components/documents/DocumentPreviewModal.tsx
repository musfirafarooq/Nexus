import { X, FileText } from "lucide-react";
import { DocumentType } from "../../data/documents/documents";

interface Props {
  document: DocumentType | null;
  onClose: () => void;
}

const DocumentPreviewModal = ({
  document,
  onClose,
}: Props) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-5">

          <h2 className="text-xl font-semibold">
            {document.name}
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={22} />
          </button>

        </div>

        {/* Preview */}

        <div className="p-8">

          <div className="border-2 border-dashed rounded-xl h-80 flex flex-col items-center justify-center bg-gray-50">

            <FileText
              size={70}
              className="text-blue-600 mb-4"
            />

            <h3 className="text-2xl font-semibold">
              Document Preview
            </h3>

            <p className="text-gray-500 mt-2">
              {document.name}
            </p>

            <p className="text-gray-400 mt-5">
              PDF / DOC Preview
            </p>

            <p className="text-sm text-gray-400 mt-2">
              (Frontend Mock)
            </p>

          </div>

          <div className="flex justify-end mt-6">

            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DocumentPreviewModal;