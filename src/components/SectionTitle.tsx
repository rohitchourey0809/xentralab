interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) => {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;