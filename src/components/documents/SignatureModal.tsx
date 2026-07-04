import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SignatureModal = ({ open, onClose }: Props) => {
  const sigRef = useRef<SignatureCanvas>(null);

  if (!open) return null;

  const clearSignature = () => {
    sigRef.current?.clear();
  };

  const saveSignature = () => {
    alert("Signature Saved Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl">

        <div className="flex justify-between items-center border-b p-5">

          <h2 className="text-xl font-semibold">
            E-Sign Document
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="p-6">

          <div className="border rounded-lg overflow-hidden">

            <SignatureCanvas
              ref={sigRef}
              penColor="black"
              canvasProps={{
                width: 600,
                height: 250,
                className: "w-full bg-gray-50",
              }}
            />

          </div>

          <div className="flex justify-end gap-3 mt-6">

            <button
              onClick={clearSignature}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Clear
            </button>

            <button
              onClick={saveSignature}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Signature
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SignatureModal;