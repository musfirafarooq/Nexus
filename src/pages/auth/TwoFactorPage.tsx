import { useNavigate } from "react-router-dom";
import OTPInput from "../../components/auth/OTPInput";

const TwoFactorPage = () => {
  const navigate = useNavigate();

  const handleVerify = (otp: string) => {
    if (otp !== "123456") {
      alert("Invalid OTP");
      return;
    }

    alert("OTP Verified Successfully!");

    const role = localStorage.getItem("userRole");

    if (role === "investor") {
      navigate("/dashboard/investor");
    } else {
      navigate("/dashboard/entrepreneur");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <OTPInput onVerify={handleVerify} />

        <p className="text-center mt-6 text-gray-500">
          Demo OTP:
          <span className="font-bold text-blue-600">
            {" "}
            123456
          </span>
        </p>
      </div>
    </div>
  );
};

export default TwoFactorPage;