import { useMemo } from "react";

interface Props {
  password: string;
}

const PasswordStrength = ({ password }: Props) => {
  const strength = useMemo(() => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  }, [password]);

  const labels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-600",
  ];

  return (
    <div className="mt-2">

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

        <div
          className={`h-full ${colors[strength]} transition-all duration-300`}
          style={{
            width: `${(strength + 1) * 20}%`,
          }}
        />

      </div>

      <p className="text-sm text-gray-600 mt-2">
        Strength:{" "}
        <span className="font-semibold">
          {labels[strength]}
        </span>
      </p>

    </div>
  );
};

export default PasswordStrength;