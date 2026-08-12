import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  to,
  href,
  variant = "primary",
}: ButtonProps) => {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
      : "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]";

  const content = (
    <>
      {children}
      <ArrowRight size={16} />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
};

export default Button;