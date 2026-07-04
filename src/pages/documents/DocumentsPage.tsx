import { useState } from "react";
import { Upload } from "lucide-react";

import { Card, CardHeader, CardBody } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

import UploadArea from "../../components/documents/UploadArea";
import DocumentList from "../../components/documents/DocumentList";
import DocumentPreviewModal from "../../components/documents/DocumentPreviewModal";
import SignatureModal from "../../components/documents/SignatureModal";

import {
  documents as initialDocuments,
  DocumentType,
} from "../../data/documents/documents";

const DocumentsPage = () => {
  const [documents, setDocuments] =
    useState<DocumentType[]>(initialDocuments);

  const [previewDocument, setPreviewDocument] =
    useState<DocumentType | null>(null);

  const [showSignature, setShowSignature] =
    useState(false);

  const handleUpload = (file: File) => {
    const extension =
      file.name.split(".").pop()?.toUpperCase() || "FILE";

    const newDocument: DocumentType = {
      id: Date.now(),
      name: file.name,
      type: extension,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadedBy: "Current User",
      uploadDate: new Date().toLocaleDateString(),
      status: "Draft",
    };

    setDocuments((prev) => [newDocument, ...prev]);
  };

  const handleDelete = (id: number) => {
    setDocuments((prev) =>
      prev.filter((doc) => doc.id !== id)
    );
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Documents
          </h1>

          <p className="text-gray-500 mt-1">
            Upload and manage your documents.
          </p>
        </div>

        <Button leftIcon={<Upload size={18} />}>
          Upload
        </Button>

      </div>

      <Card>

        <CardHeader>
          <h2 className="text-xl font-semibold">
            Upload Documents
          </h2>
        </CardHeader>

        <CardBody>
          <UploadArea onUpload={handleUpload} />
        </CardBody>

      </Card>

      <DocumentList
        documents={documents}
        onDelete={handleDelete}
        onPreview={setPreviewDocument}
        onSign={() => setShowSignature(true)}
      />

      <DocumentPreviewModal
        document={previewDocument}
        onClose={() => setPreviewDocument(null)}
      />

      <SignatureModal
        open={showSignature}
        onClose={() => setShowSignature(false)}
      />

    </div>
  );
};

export { DocumentsPage };