import React from "react";
import { CheckCircle, XCircle, User, Building2 } from "lucide-react";

// Local type fallback for CollaborationRequestType to avoid import errors
// Fields based on usage in this component
export interface CollaborationRequestType {
  id: number;
  startup: string;
  entrepreneur: string;
  investor?: string;
  message?: string;
  date?: string;
  status?: string;
}

interface Props {
  request: CollaborationRequestType;
  onAccept: (id: number) => void;
  onReject: (id: number) => void;
}

const CollaborationRequestCard: React.FC<Props> = ({
  request,
  onAccept,
  onReject,
}) => {
  return (
    <div className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Building2 size={20} className="text-blue-600" />
            {request.startup}
          </h2>

          <p className="text-gray-600 mt-3 flex items-center gap-2">
            <User size={16} />
            Entrepreneur:
            <span className="font-medium">
              {request.entrepreneur}
            </span>
          </p>

          <p className="text-gray-600 mt-2">
            Investor:
            <span className="font-medium">
              {" "}
              {request.investor}
            </span>
          </p>

          <p className="mt-3 text-gray-700">
            {request.message}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Requested on: {request.date}
          </p>

        </div>

        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          {request.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => onAccept(request.id)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          <CheckCircle size={18} />
          Accept
        </button>

        <button
          onClick={() => onReject(request.id)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          <XCircle size={18} />
          Reject
        </button>

      </div>

    </div>
  );
};

export default CollaborationRequestCard;