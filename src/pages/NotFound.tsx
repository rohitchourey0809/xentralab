import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#071225] text-white">

      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center px-5 pt-20">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            XentraLab
          </p>

          <h1 className="mt-5 text-7xl font-black tracking-tight sm:text-9xl">
            404
          </h1>

          <h2 className="mt-4 text-2xl font-bold">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
            The page you&apos;re looking for doesn&apos;t exist or may
            have been moved.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Back to Home
            <span>→</span>
          </Link>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default NotFound;