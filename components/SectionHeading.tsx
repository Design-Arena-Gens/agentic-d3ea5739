interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header style={{ marginBottom: "1.5rem" }}>
      {eyebrow ? (
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#3b82f6",
            margin: 0,
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        style={{
          fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)",
          margin: "0.35rem 0",
          color: "#12274e",
        }}
      >
        {title}
      </h2>
      {description ? (
        <p
          style={{
            margin: 0,
            maxWidth: "60ch",
            color: "#445269",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
