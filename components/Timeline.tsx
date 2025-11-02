interface TimelineStage {
  title: string;
  focus: string;
  description: string;
  checkpoints: string[];
}

interface TimelineProps {
  stages: TimelineStage[];
}

export function Timeline({ stages }: TimelineProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1.75rem",
      }}
    >
      {stages.map((stage, index) => (
        <div
          key={stage.title}
          style={{
            display: "grid",
            gap: "0.9rem",
            padding: "1.6rem",
            borderRadius: "1.25rem",
            background: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(30, 64, 175, 0.18)",
            backdropFilter: "blur(4px)",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "1.6rem",
              right: "1.6rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#3b82f6",
              background: "rgba(59, 130, 246, 0.08)",
              padding: "0.35rem 0.75rem",
              borderRadius: "999px",
            }}
          >
            Step {index + 1}
          </span>
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: "1.2rem",
                color: "#0f1f3d",
              }}
            >
              {stage.title}
            </h3>
            <p
              style={{
                margin: "0.35rem 0 0",
                color: "#1d4ed8",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Focus: {stage.focus}
            </p>
          </div>
          <p
            style={{
              margin: 0,
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            {stage.description}
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              color: "#1f2937",
              lineHeight: 1.5,
            }}
          >
            {stage.checkpoints.map((checkpoint) => (
              <li key={checkpoint}>{checkpoint}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
