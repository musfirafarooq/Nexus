import DocumentCard from "./DocumentCard";
import { DocumentType } from "../../data/documents/documents";

interface Props {
  documents: DocumentType[];
  onDelete: (id: number) => void;
  onPreview: (document: DocumentType) => void;
  onSign: () => void;
}

const DocumentList = ({
  documents,
  onDelete,
  onPreview,
  onSign,
}: Props) => {
  return (
    <div className="space-y-4">

      {documents.length === 0 ? (

        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No documents uploaded yet.
        </div>

      ) : (

        documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            onDelete={onDelete}
            onPreview={onPreview}
            onSign={onSign}
          />
        ))

      )}

    </div>
  );
};

export default DocumentList;