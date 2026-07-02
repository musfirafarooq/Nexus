import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  onSave: (meeting: any) => void;
}

const AvailabilityModal = ({
  isOpen,
  onClose,
  selectedDate,
  onSave,
}: Props) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSave = () => {
    if (!title || !start || !end) {
      alert("Please fill all fields.");
      return;
    }

    const meeting = {
      id: Date.now(),
      title,
      start: `${selectedDate}T${start}`,
      end: `${selectedDate}T${end}`,
    };

    onSave(meeting);

    setTitle("");
    setStart("");
    setEnd("");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6">

        <h2 className="text-2xl font-bold mb-5">
          Add Meeting Availability
        </h2>

        <p className="mb-4 text-gray-500">
          Selected Date: {selectedDate}
        </p>

        <input
          type="text"
          placeholder="Meeting Title"
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="time"
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />

        <input
          type="time"
          className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default AvailabilityModal;