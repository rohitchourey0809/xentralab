import type { Stat } from "../data/stats";
import Reveal from "./Reveal";

interface StatsCardProps {
  stat: Stat;
  index: number;
}

const StatsCard = ({ stat, index }: StatsCardProps) => {
  return (
    <Reveal delay={index * 0.05}>
      <div className="border-r border-white/10 px-5 py-8 text-center last:border-r-0">
        <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {stat.value}
        </div>

        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
          {stat.label}
        </p>
      </div>
    </Reveal>
  );
};

export default StatsCard;