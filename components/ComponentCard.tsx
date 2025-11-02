interface ComponentCardProps {
  name: string;
  role: string;
  details: string;
  highlights?: string[];
}

export function ComponentCard({ name, role, details, highlights }: ComponentCardProps) {
  return (
    <article
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f5f8ff 100%)",
        borderRadius: "1rem",
        padding: "1.5rem",
        boxShadow: "0 18px 45px rgba(33, 80, 152, 0.12)",
        border: "1px solid rgba(59, 130, 246, 0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <div>
        <h3
          style={{
            margin: 0,
            fontSize: "1.25rem",
            color: "#14325f",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            margin: "0.2rem 0 0",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#2563eb",
          }}
        >
          {role}
        </p>
      </div>

      <p
        style={{
          margin: 0,
          lineHeight: 1.6,
          color: "#475569",
        }}
      >
        {details}
      </p>

      {highlights && highlights.length ? (
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.2rem",
            color: "#1f2a44",
            lineHeight: 1.5,
          }}
        >
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
