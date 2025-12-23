import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary: "bg-primary text-dark hover:bg-primary-dark hover:shadow-gold",
  secondary: "bg-secondary text-white hover:bg-secondary-dark",
  outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark",
  white: "bg-white text-dark hover:bg-gray-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
