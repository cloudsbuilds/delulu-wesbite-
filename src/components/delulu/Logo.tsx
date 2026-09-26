function Eye({ size }: { size: number }) {
  return (
    <span
      className="relative inline-block rounded-full border-2 border-gold bg-background"
      style={{ width: size, height: size }}
    >
      <span
        className="absolute rounded-full bg-gold"
        style={{
          width: size * 0.42,
          height: size * 0.42,
          left: size * 0.29,
          top: size * 0.32,
        }}
      />
    </span>
  );
}

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const conf = {
    sm: { text: "text-2xl", eye: 11, gap: "gap-[3px]", offset: "-mb-1" },
    md: { text: "text-4xl", eye: 16, gap: "gap-1", offset: "-mb-1.5" },
    lg: { text: "text-6xl sm:text-7xl", eye: 28, gap: "gap-1.5", offset: "-mb-2" },
  }[size];

  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className={`flex ${conf.gap} ${conf.offset}`}>
        <Eye size={conf.eye} />
        <Eye size={conf.eye} />
      </span>
      <span
        className={`${conf.text} font-black tracking-tight text-gold-gradient`}
        style={{ WebkitTextStroke: "0px" }}
      >
        DELULU
      </span>
    </span>
  );
}
