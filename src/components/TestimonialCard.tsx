import { Star } from "lucide-react";
import type { Testimonial } from "../data/testimonials";
import Reveal from "./Reveal";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <Reveal delay={index * 0.05}>
      <blockquote className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7">

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({
            length: testimonial.rating,
          }).map((_, starIndex) => (
            <Star
              key={starIndex}
              size={15}
              className="fill-current text-cyan-300"
            />
          ))}
        </div>

        {/* Testimonial */}
        <p className="mt-6 text-sm leading-7 text-slate-300">
          &quot;{testimonial.message}&quot;
        </p>

        {/* Client */}
        <footer className="mt-7 border-t border-white/10 pt-5">

          <p className="font-semibold text-white">
            {testimonial.name}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {testimonial.role} · {testimonial.company}
          </p>

        </footer>

      </blockquote>
    </Reveal>
  );
};

export default TestimonialCard;