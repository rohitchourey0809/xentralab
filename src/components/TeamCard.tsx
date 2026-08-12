import type { TeamMember } from "../data/team";
import Reveal from "./Reveal";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <Reveal delay={index * 0.04}>
      <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">

        {/* Profile Image */}
        <div className="aspect-square overflow-hidden bg-[#0b1730]">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="font-semibold text-white">
            {member.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-cyan-300">
            {member.role}
          </p>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            {member.description}
          </p>

          {/* LinkedIn */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"
          >
            in
          </a>

        </div>
      </article>
    </Reveal>
  );
};

export default TeamCard;