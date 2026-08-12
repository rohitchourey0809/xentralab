import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import StatsCard from "../components/StatsCard";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TeamCard from "../components/TeamCard";
import TestimonialCard from "../components/TestimonialCard";

import { stats } from "../data/stats";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { team } from "../data/team";
import { testimonials } from "../data/testimonials";

import {
  Check,
  Sparkles,
  Brain,
  Code2,
  Smartphone,
  Palette,
  Settings2,
  ChartNoAxesCombined,
} from "lucide-react";


const Home = () => {
  const serviceIcons = [
    Brain,
    Code2,
    Smartphone,
    Palette,
    Settings2,
    ChartNoAxesCombined,
  ];

  const reasons = [
    "Cutting-Edge Technology",
    "Result-Driven Approach",
    "Scalable Solutions",
    "Transparent Communication",
    "On-Time Delivery",
    "Long-Term Partnership",
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand the client's business, goals and challenges.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "Define the right technology and product strategy.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Create intuitive and engaging digital experiences.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Develop, test and optimize the solution.",
    },
    {
      number: "05",
      title: "Launch & Scale",
      description:
        "Launch the product and continuously improve it.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#071225] text-white">
      <Navbar />

      <main>

        {/* =========================================
            HERO
        ========================================= */}

        <section
          id="home"
          className="relative min-h-screen overflow-hidden pt-20"
        >
          {/* Background */}

          <div className="absolute inset-0 grid-background opacity-50" />

          <div className="absolute left-[-180px] top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute right-[-150px] top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

          <div className="container-x relative flex min-h-[calc(100vh-80px)] items-center py-20">

            <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

              {/* Hero Content */}

              <Reveal>

                <div className="max-w-3xl">

                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-medium text-cyan-200">
                    <Sparkles size={14} />
                    Innovate • Build • Scale
                  </div>

                  <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

                    Engineering the Next Generation of{" "}

                    <span className="gradient-text">
                      Digital Innovation
                    </span>

                  </h1>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                    We innovate, build and scale digital products that
                    drive real business growth.
                  </p>

                  {/* Services */}

                  <div className="mt-7 flex flex-wrap gap-2">

                    {[
                      "AI Solutions",
                      "Web Development",
                      "App Development",
                      "UI/UX Design",
                      "Automation",
                      "Digital Marketing",
                    ].map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400"
                      >
                        {service}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                    <Button to="/contact">
                      Start Your Project
                    </Button>

                    <Button
                      to="/#work"
                      variant="secondary"
                    >
                      Explore Our Work
                    </Button>

                  </div>

                </div>

              </Reveal>


              {/* Hero Visual */}

              <Reveal delay={0.15}>

                <div className="relative mx-auto w-full max-w-xl">

                  <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-[80px]" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl">

                    <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1730] p-6">

                      {/* Window */}

                      <div className="flex items-center gap-2 border-b border-white/10 pb-5">

                        <span className="h-3 w-3 rounded-full bg-white/20" />
                        <span className="h-3 w-3 rounded-full bg-white/20" />
                        <span className="h-3 w-3 rounded-full bg-white/20" />

                      </div>

                      {/* Visual */}

                      <div className="py-12">

                        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/20 bg-gradient-to-br from-blue-500/20 to-violet-500/20">

                          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-500 text-4xl font-black">
                            X
                          </div>

                        </div>

                        <p className="mt-7 text-center text-sm font-semibold text-white">
                          Smart Technology
                        </p>

                        <p className="mt-2 text-center text-xs text-slate-500">
                          Built for growth. Designed for scale.
                        </p>

                      </div>

                      {/* Bottom */}

                      <div className="grid grid-cols-3 gap-3">

                        {["AI", "WEB", "APP"].map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center text-xs font-semibold text-slate-400"
                          >
                            {item}
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </Reveal>

            </div>

          </div>
        </section>


        {/* =========================================
            STATS
        ========================================= */}

        <section className="border-y border-white/10 bg-white/[0.015]">

          <div className="container-x grid grid-cols-2 md:grid-cols-4">

            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                stat={stat}
                index={index}
              />
            ))}

          </div>

        </section>


        {/* =========================================
            SERVICES
        ========================================= */}

        <section
          id="services"
          className="section-padding"
        >

          <div className="container-x">

            <SectionTitle
              eyebrow="Our Services"
              title="Everything you need to build, grow and automate."
              description="From intelligent AI solutions to high-performance digital products, XentraLab combines technology, creativity and strategy to solve real business problems."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => {
                const Icon = serviceIcons[index];

                return (
                  <div key={service.title} className="relative">

                    <ServiceCard
                      service={service}
                      index={index}
                    />

                    {/* Icon override is handled by ServiceCard */}
                   {Icon && <Icon />}

                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================================
            WHY XENTRALAB
        ========================================= */}

        <section className="section-padding bg-white/[0.015]">

          <div className="container-x">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <Reveal>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Why Choose XentraLab?
                  </p>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    Technology built around your business.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                    We don't just build software. We understand your
                    goals, solve complex problems and create scalable
                    technology that supports long-term growth.
                  </p>

                  <div className="mt-8">

                    <Button to="/contact">
                      Let's Work Together
                    </Button>

                  </div>

                </div>

              </Reveal>


              <div className="grid gap-4 sm:grid-cols-2">

                {reasons.map((reason, index) => (

                  <Reveal
                    key={reason}
                    delay={index * 0.05}
                  >

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">

                        <Check size={18} />

                      </div>

                      <h3 className="mt-4 text-sm font-semibold text-white">
                        {reason}
                      </h3>

                    </div>

                  </Reveal>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            WORK
        ========================================= */}

        <section
          id="work"
          className="section-padding"
        >

          <div className="container-x">

            <SectionTitle
              eyebrow="Our Work"
              title="Turning ideas into digital experiences that make an impact."
              description="Explore selected examples of products, platforms and digital experiences created with technology and business outcomes in mind."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">

              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            ABOUT
        ========================================= */}

        <section
          id="about"
          className="section-padding bg-white/[0.015]"
        >

          <div className="container-x">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <Reveal>

                <div className="relative">

                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">

                    <div className="grid grid-cols-2 gap-4">

                      <div className="rounded-2xl border border-white/10 bg-[#0b1730] p-6">
                        <Code2 className="text-cyan-300" />
                        <p className="mt-5 text-sm font-semibold">
                          Engineering
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-[#0b1730] p-6">
                        <Brain className="text-cyan-300" />
                        <p className="mt-5 text-sm font-semibold">
                          Intelligence
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-[#0b1730] p-6">
                        <Palette className="text-cyan-300" />
                        <p className="mt-5 text-sm font-semibold">
                          Experience
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-[#0b1730] p-6">
                        <Settings2 className="text-cyan-300" />
                        <p className="mt-5 text-sm font-semibold">
                          Automation
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </Reveal>


              <Reveal delay={0.1}>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    About XentraLab
                  </p>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    Building Digital Solutions That Move Businesses Forward
                  </h2>

                  <p className="mt-6 text-base leading-8 text-slate-400">
                    XentraLab is a digital technology agency focused on
                    building innovative, scalable and high-impact
                    solutions for modern businesses.
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-400">
                    From AI-powered systems and websites to mobile
                    applications, automation and digital experiences,
                    we combine technology, creativity and strategy to
                    turn ideas into reality.
                  </p>

                  <div className="mt-8">

                    <Button to="/contact">
                      Let's Build Something Great
                    </Button>

                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </section>


        {/* =========================================
            PROCESS
        ========================================= */}

        <section className="section-padding">

          <div className="container-x">

            <SectionTitle
              eyebrow="How We Work"
              title="A simple process. Built for great results."
              description="From the first conversation to launch and beyond, we work collaboratively to turn ideas into scalable digital products."
              center
            />

            <div className="mt-14 grid gap-5 md:grid-cols-5">

              {process.map((step, index) => (

                <Reveal
                  key={step.number}
                  delay={index * 0.05}
                >

                  <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.025] p-6">

                    <span className="text-sm font-bold text-cyan-300">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            TEAM
        ========================================= */}

        <section
          id="team"
          className="section-padding bg-white/[0.015]"
        >

          <div className="container-x">

            <SectionTitle
              eyebrow="Meet the XentraLab Team"
              title="People behind the technology."
              description="A multidisciplinary team combining technology, creativity, operations and business expertise."
              center
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {team.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            TESTIMONIALS
        ========================================= */}

        <section className="section-padding">

          <div className="container-x">

            <SectionTitle
              eyebrow="What Our Clients Say"
              title="Built on trust and results."
              description="Demo testimonials are currently shown for presentation purposes. Replace them with verified client testimonials before launch."
              center
            />

            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  index={index}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            MAIN CTA
        ========================================= */}

        <section className="section-padding">

          <div className="container-x">

            <Reveal>

              <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/20 via-[#10255a] to-violet-500/20 p-8 sm:p-12 lg:p-16">

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-[100px]" />

                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

                <div className="relative max-w-3xl">

                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Start Something Great
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                    Have an Idea? Let&apos;s Build It.
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    Tell us what you&apos;re building. We&apos;ll help
                    turn your vision into a scalable digital solution.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <Button to="/contact">
                      Start Your Project
                    </Button>

                    <Button
                      to="/contact"
                      variant="secondary"
                    >
                      Contact Us
                    </Button>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;