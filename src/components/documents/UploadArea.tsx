import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

interface Props {
  onUpload: (file: File) => void;
}

const UploadArea = ({ onUpload }: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,

    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },

    maxSize: 10 * 1024 * 1024,

    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        toast.error("Only PDF, DOC, DOCX, XLS and XLSX files under 10MB are allowed.");
        return;
      }

      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-300

      ${
        isDragActive
          ? "border-blue-600 bg-blue-50 scale-[1.01]"
          : "border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50"
      }`}
    >
      <input {...getInputProps()} />

      <Upload
        size={45}
        className="mx-auto text-blue-600 mb-4"
      />

      <h2 className="text-xl font-semibold">
        Drag & Drop Documents
      </h2>

      <p className="text-gray-500 mt-2">
        or click to browse
      </p>

      <p className="text-xs text-gray-400 mt-3">
        PDF, DOC, DOCX, XLS, XLSX (Max 10MB)
      </p>
    </div>
  );
};

export default UploadArea;