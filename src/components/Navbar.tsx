import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigation = [
    {
      name: "Home",
      href: "/#home",
    },
    {
      name: "Services",
      href: "/#services",
    },
    {
      name: "Work",
      href: "/#work",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Team",
      href: "/#team",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071225]/85 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobileMenu(false)}
        >
          {/* Temporary logo */}
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-lg font-black text-white">
            X
          </div> */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 overflow-hidden">
        <img
          src="/XentraLab3.png"
          alt="XentraLab logo"
          className="h-full w-full object-contain"
        />
      </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-white">
              XentraLab
            </div>

            <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Innovate • Build • Scale
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] md:flex"
        >
          Get Started

          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Button */}

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#071225] md:hidden">
          <nav className="container-x flex flex-col py-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="border-b border-white/5 py-4 text-slate-200"
              >
                {item.name}
              </a>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-4 rounded-full bg-white px-5 py-3 text-center font-semibold text-slate-950"
            >
              Get Started →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;