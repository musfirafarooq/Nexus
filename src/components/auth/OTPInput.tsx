import { useState } from "react";

interface Props {
  onVerify: (otp: string) => void;
}

const OTPInput = ({ onVerify }: Props) => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    onVerify(otp);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">

      <h2 className="text-2xl font-bold text-center">
        Two-Factor Authentication
      </h2>

      <p className="text-gray-500 text-center mt-2">
        Enter the 6-digit OTP sent to your email.
      </p>

      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value.replace(/\D/g, ""))
        }
        placeholder="123456"
        className="w-full mt-6 border rounded-xl px-4 py-3 text-center text-2xl tracking-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleVerify}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Verify OTP
      </button>

      <button
        className="w-full mt-3 text-blue-600 hover:underline"
      >
        Resend OTP
      </button>

    </div>
  );
};

export default OTPInput;