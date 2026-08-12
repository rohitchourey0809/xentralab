import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    // Demo only.
    // Later we will connect this form to a real backend/email service.

    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#071225]">
      <Navbar />

      <main className="pt-20">

        {/* ================================
            HERO
        ================================= */}

        <section className="relative overflow-hidden py-24 sm:py-32">

          <div className="absolute inset-0 grid-background opacity-50" />

          <div className="absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

          <div className="container-x relative">

            <Reveal>

              <div className="max-w-4xl">

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Contact XentraLab
                </p>

                <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">
                    Great Together.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                  Tell us what you&apos;re building. We&apos;ll help turn
                  your vision into a scalable digital solution.
                </p>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ================================
            CONTACT CONTENT
        ================================= */}

        <section className="section-padding pt-0">

          <div className="container-x">

            <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">


              {/* =================================
                  CONTACT FORM
              ================================= */}

              <Reveal>

                <div className="gradient-border rounded-[2rem] bg-white/[0.025] p-6 sm:p-8">

                  <div className="mb-8">

                    <h2 className="text-2xl font-bold text-white">
                      Start Your Project
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Share a few details about your project and our team
                      will get back to you.
                    </p>

                  </div>


                  {/* SUCCESS MESSAGE */}

                  {submitted && (

                    <div className="mb-6 flex items-start gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4">

                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />

                      <div>

                        <p className="font-medium text-white">
                          Inquiry submitted successfully.
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          This is currently a demo form. We can connect
                          it to your real email or CRM later.
                        </p>

                      </div>

                    </div>

                  )}


                  {/* FORM */}

                  <form onSubmit={handleSubmit}>

                    <div className="grid gap-5 sm:grid-cols-2">


                      {/* FULL NAME */}

                      <div>

                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-slate-300"
                        >
                          Full Name *
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-300/40 focus:bg-white/[0.05]"
                        />

                      </div>


                      {/* EMAIL */}

                      <div>

                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-slate-300"
                        >
                          Email *
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-300/40 focus:bg-white/[0.05]"
                        />

                      </div>


                      {/* COMPANY */}

                      <div>

                        <label
                          htmlFor="company"
                          className="text-sm font-medium text-slate-300"
                        >
                          Company
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Company name"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-300/40 focus:bg-white/[0.05]"
                        />

                      </div>


                      {/* PHONE */}

                      <div>

                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-slate-300"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-300/40 focus:bg-white/[0.05]"
                        />

                      </div>


                      {/* SERVICE */}

                      <div>

                        <label
                          htmlFor="service"
                          className="text-sm font-medium text-slate-300"
                        >
                          Service Required
                        </label>

                        <select
                          id="service"
                          name="service"
                          defaultValue=""
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1730] px-4 py-3.5 text-sm text-white outline-none transition focus:border-cyan-300/40"
                        >

                          <option value="" disabled>
                            Select a service
                          </option>

                          <option value="AI Solutions">
                            AI Solutions
                          </option>

                          <option value="Web Development">
                            Web Development
                          </option>

                          <option value="App Development">
                            App Development
                          </option>

                          <option value="UI/UX Design">
                            UI/UX Design
                          </option>

                          <option value="Automation">
                            Automation
                          </option>

                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>

                        </select>

                      </div>


                      {/* BUDGET */}

                      <div>

                        <label
                          htmlFor="budget"
                          className="text-sm font-medium text-slate-300"
                        >
                          Budget
                        </label>

                        <select
                          id="budget"
                          name="budget"
                          defaultValue=""
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1730] px-4 py-3.5 text-sm text-white outline-none transition focus:border-cyan-300/40"
                        >

                          <option value="" disabled>
                            Select budget
                          </option>

                          <option value="Under 5L">
                            Under ₹5L
                          </option>

                          <option value="5L - 10L">
                            ₹5L – ₹10L
                          </option>

                          <option value="10L - 25L">
                            ₹10L – ₹25L
                          </option>

                          <option value="25L+">
                            ₹25L+
                          </option>

                          <option value="Discuss">
                            Prefer to discuss
                          </option>

                        </select>

                      </div>


                      {/* PROJECT DETAILS */}

                      <div className="sm:col-span-2">

                        <label
                          htmlFor="details"
                          className="text-sm font-medium text-slate-300"
                        >
                          Project Details *
                        </label>

                        <textarea
                          id="details"
                          name="details"
                          required
                          rows={7}
                          placeholder="Tell us about your project, goals, requirements and timeline..."
                          className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-300/40 focus:bg-white/[0.05]"
                        />

                      </div>

                    </div>


                    {/* SUBMIT AREA */}

                    <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <p className="max-w-md text-xs leading-5 text-slate-600">
                        By submitting this form, you agree that XentraLab
                        may contact you regarding your project inquiry.
                      </p>

                      <button
                        type="submit"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                      >
                        Send Inquiry

                        <Send size={17} />

                      </button>

                    </div>

                  </form>

                </div>

              </Reveal>


              {/* =================================
                  RIGHT SIDE
              ================================= */}

              <div className="space-y-5">


                {/* GET IN TOUCH */}

                <Reveal>

                  <div className="gradient-border rounded-3xl bg-white/[0.025] p-7">

                    <h2 className="text-xl font-semibold text-white">
                      Get in Touch
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Have an idea, project or business challenge?
                      Let&apos;s talk about how technology can help.
                    </p>


                    {/* EMAIL */}

                    <div className="mt-7 flex gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-300">
                        <Mail size={20} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-wider text-slate-600">
                          Email
                        </p>

                        <a
                          href="mailto:hello@xentralab.com"
                          className="mt-1 block text-sm text-slate-300 hover:text-white"
                        >
                          hello@xentralab.com
                        </a>

                      </div>

                    </div>


                    {/* PHONE */}

                    <div className="mt-6 flex gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-300">
                        <Phone size={20} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-wider text-slate-600">
                          Phone
                        </p>

                        <a
                          href="tel:+919876543210"
                          className="mt-1 block text-sm text-slate-300 hover:text-white"
                        >
                          +91 98765 43210
                        </a>

                      </div>

                    </div>


                    {/* LOCATION */}

                    <div className="mt-6 flex gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-300">
                        <MapPin size={20} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-wider text-slate-600">
                          Location
                        </p>

                        <p className="mt-1 text-sm text-slate-300">
                          India · Working with clients globally
                        </p>

                      </div>

                    </div>

                  </div>

                </Reveal>


                {/* SOCIAL LINKS */}

                <Reveal delay={0.1}>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">

                    <h2 className="text-xl font-semibold text-white">
                      Connect With Us
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Follow XentraLab and stay connected with our
                      latest work, technology and updates.
                    </p>


                    <div className="mt-6 flex gap-3">

                      {/* LINKEDIN */}

                      <a
                        href="#"
                        aria-label="XentraLab LinkedIn"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"
                      >
                        in
                      </a>


                      {/* INSTAGRAM */}

                      <a
                        href="#"
                        aria-label="XentraLab Instagram"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"
                      >
                        IG
                      </a>


                      {/* EMAIL */}

                      <a
                        href="mailto:hello@xentralab.com"
                        aria-label="Email XentraLab"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"
                      >
                        <Mail size={19} />
                      </a>

                    </div>

                  </div>

                </Reveal>


                {/* QUICK CTA */}

                <Reveal delay={0.15}>

                  <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15 p-7">

                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

                    <div className="relative">

                      <p className="text-sm font-semibold text-cyan-300">
                        Smart Solutions. Real Results.
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-white">
                        Have an idea?
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        Let&apos;s turn your idea into a scalable digital
                        product.
                      </p>

                    </div>

                  </div>

                </Reveal>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;