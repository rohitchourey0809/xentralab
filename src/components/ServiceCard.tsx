import {
  ArrowUpRight,
  Brain,
  Code2,
  Smartphone,
  Palette,
  Settings2,
  ChartNoAxesCombined,
} from "lucide-react";

import type { Service } from "../data/services";
import Reveal from "./Reveal";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const icons = [
  Brain,
  Code2,
  Smartphone,
  Palette,
  Settings2,
  ChartNoAxesCombined,
];

const ServiceCard = ({
  service,
  index,
}: ServiceCardProps) => {
  const Icon = icons[index % icons.length];

  return (
    <Reveal delay={index * 0.05}>
      <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.04]">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/5 text-cyan-300">
          <Icon size={22} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {service.description}
        </p>

        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
        >
          Learn More

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

      </article>
    </Reveal>
  );
};

export default ServiceCard;