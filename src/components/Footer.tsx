import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-16">

      <div className="container-x grid gap-12 pb-12 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">

        {/* Brand */}

        <div>
          <div className="text-xl font-bold text-white">
            XentraLab
          </div>

          <p className="mt-2 text-sm text-cyan-300">
            Innovate • Build • Scale
          </p>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
            Engineering the Next Generation of Digital Innovation.
            Smart Solutions. Real Results.
          </p>
        </div>


        {/* Company */}

        <div>
          <h3 className="font-semibold text-white">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-500">

            <a
              href="/#about"
              className="block transition hover:text-white"
            >
              About
            </a>

            <a
              href="/#team"
              className="block transition hover:text-white"
            >
              Team
            </a>

            <a
              href="/#work"
              className="block transition hover:text-white"
            >
              Work
            </a>

            <Link
              to="/contact"
              className="block transition hover:text-white"
            >
              Contact
            </Link>

          </div>
        </div>


        {/* Services */}

        <div>
          <h3 className="font-semibold text-white">
            Services
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-500">

            <a
              href="/#services"
              className="block transition hover:text-white"
            >
              AI Solutions
            </a>

            <a
              href="/#services"
              className="block transition hover:text-white"
            >
              Web Development
            </a>

            <a
              href="/#services"
              className="block transition hover:text-white"
            >
              App Development
            </a>

            <a
              href="/#services"
              className="block transition hover:text-white"
            >
              UI/UX Design
            </a>

            <a
              href="/#services"
              className="block transition hover:text-white"
            >
              Automation
            </a>

            <a
              href="/#services"
              className="block transition hover:text-white"
            >
              Digital Marketing
            </a>

          </div>
        </div>


        {/* Connect */}

        <div>
          <h3 className="font-semibold text-white">
            Connect
          </h3>

          <div className="mt-4 space-y-4 text-sm text-slate-500">

            {/* LinkedIn */}

            <a
              href="#"
              aria-label="XentraLab LinkedIn"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-xs font-bold">
                in
              </span>

              LinkedIn
            </a>


            {/* Instagram */}

            <a
              href="#"
              aria-label="XentraLab Instagram"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-[10px] font-bold">
                IG
              </span>

              Instagram
            </a>


            {/* Email */}

            <a
              href="mailto:hello@xentralab.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={17} />

              hello@xentralab.com
            </a>

          </div>
        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-white/10 py-6">

        <div className="container-x flex flex-col justify-between gap-2 text-xs text-slate-600 sm:flex-row">

          <span>
            © 2026 XentraLab. All rights reserved.
          </span>

          <span>
            Smart Solutions. Real Results.
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;