import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import Reveal from "./Reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {
  return (
    <Reveal delay={index * 0.05}>
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">

        {/* Project Image */}
        <div className="aspect-[16/9] overflow-hidden bg-[#0b1730]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Project Content */}
        <div className="p-7">

          <p className="text-xs uppercase tracking-wider text-cyan-300">
            {project.industry}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          {/* Services + CTA */}
          <div className="mt-6 flex items-center justify-between gap-4">

            <span className="text-xs text-slate-500">
              {project.services}
            </span>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-300"
            >
              View Case Study

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

          </div>

        </div>

      </article>
    </Reveal>
  );
};

export default ProjectCard;