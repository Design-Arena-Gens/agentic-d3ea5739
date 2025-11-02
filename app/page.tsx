import { SectionHeading } from "../components/SectionHeading";
import { ComponentCard } from "../components/ComponentCard";
import { Timeline } from "../components/Timeline";

const railComponents = [
  {
    name: "Fuel Supply & Conditioning Module",
    role: "Delivers clean, temperature-stable fuel to the high-pressure pumps",
    details:
      "Low-pressure transfer pumps draw fuel from the service tank through duplex filters, coalescers, and heaters to ensure viscosity and cleanliness before it reaches the common rail system.",
    highlights: [
      "Supply pressure typically 6–8 bar",
      "Preheating maintains 40–50°C for marine heavy fuel",
      "Automatic filter changeover minimizes downtime",
    ],
  },
  {
    name: "High-Pressure (HP) Fuel Pumps",
    role: "Raise fuel pressure to 1,000+ bar and meter flow into the rail",
    details:
      "Each cylinder bank section drives a plunger pump via a camshaft. Electronic spill valves control delivery volume precisely for each injection event, independent of engine speed.",
    highlights: [
      "Pump modules are grouped per two cylinders",
      "Integrated pressure sensors for closed-loop control",
      "Hydraulic dampers smooth pulsations",
    ],
  },
  {
    name: "Accumulator (Common Rail)",
    role: "Stores and stabilizes high-pressure fuel for instantaneous injection",
    details:
      "A forged steel manifold with segmented rails per cylinder pair. Each segment has pressure transmitters, safety relief, and isolating valves for maintenance or fault response.",
    highlights: [
      "Working pressure range 900–1,400 bar",
      "Nitrogen-charged dampers absorb pressure spikes",
      "Sections can be isolated without stopping engine",
    ],
  },
  {
    name: "Injectors with Servo-Hydraulic Control",
    role: "Atomize fuel directly into the combustion chamber on demand",
    details:
      "Solenoid or valve-controlled injectors use rail pressure to actuate a nozzle needle. Multiple injection events (pre, main, post) are scheduled to shape combustion and reduce emissions.",
    highlights: [
      "Needle lift < 0.3 mm with microsecond precision",
      "Adaptive calibration compensates for wear",
      "Integrated leak-off returns maintain cooling",
    ],
  },
  {
    name: "Engine Control Unit (WECS)",
    role: "Coordinates fuel, air, and safety logic in real time",
    details:
      "The Woodward Engine Control System (WECS) monitors pressures, crank angle, load, and emissions sensors. It modulates each pump spill valve and injector signal to hit target torque and efficiency.",
    highlights: [
      "Model-based control with individual cylinder mapping",
      "Fast CAN bus redundancy for marine classification",
      "Stores diagnostics and trend data for maintenance",
    ],
  },
  {
    name: "Auxiliary Safety & Support Systems",
    role: "Protect hardware and sustain optimal operation",
    details:
      "Includes emergency shut-down valves, double-walled fuel pipes with leak detection, purge circuits for heavy fuel changeover, and slow-turn devices for safe start-up.",
    highlights: [
      "Automatic depressurization on shutdown",
      "Condition-based alarms linked to ship automation",
      "Manual hand priming for post-maintenance bleeding",
    ],
  },
];

const operationStages = [
  {
    title: "Fuel Preparation & Delivery",
    focus: "Clean, conditioned fuel at stable pressure",
    description:
      "Heavy fuel oil is circulated through settling, service, and day tanks. Duplex filtration and automatic backflushing remove particulates while heating skids keep viscosity within injector tolerances.",
    checkpoints: [
      "Transfer pumps feed the booster module",
      "Viscosity controller modulates steam heaters",
      "Final fine filters safeguard HP pump elements",
    ],
  },
  {
    title: "High-Pressure Generation",
    focus: "Create and stabilize rail pressure",
    description:
      "Cam-driven HP pumps take suction fuel and compress it. An electronically controlled spill valve vents surplus fuel back to the return line, letting the WECS match rail pressure to load demand.",
    checkpoints: [
      "Rail pressure sensor feedback -> WECS",
      "Hydraulic damper absorbs plunger pulsations",
      "Relief valve protects against overpressure",
    ],
  },
  {
    title: "Injection Sequencing",
    focus: "Deliver precise fuel quantity per cylinder",
    description:
      "For each combustion cycle, the WECS calculates pulse patterns based on crank-angle encoders. Injectors receive high-pressure fuel, lift hydraulically, and atomize charge with optimized spray geometry.",
    checkpoints: [
      "Pilot injection stabilizes ignition delay",
      "Main injection achieves target mean effective pressure",
      "Post injection trims NOx and soot formation",
    ],
  },
  {
    title: "Combustion Feedback & Optimization",
    focus: "Close the loop on performance and emissions",
    description:
      "Cylinder pressure sensors, exhaust temperature probes, and shaft power meters feed back to the WECS. Adaptive maps adjust rail pressure, phasing, and multiple injection splits to balance efficiency.",
    checkpoints: [
      "Knock or rough running triggers derate logic",
      "Cylinder balancing maintains uniform load",
      "Trend analysis flags injector or pump wear",
    ],
  },
  {
    title: "Shutdown & Safe Depressurization",
    focus: "Return system to safe standby state",
    description:
      "During slow turning or emergency stop, the WECS commands spill valves fully open, closes isolating valves, and vents the rail. Fuel changeover to distillate uses purge circuits to eliminate heavy fuel residue.",
    checkpoints: [
      "Rail pressure < 5 bar before maintenance",
      "Leak detection confirms double-wall integrity",
      "Event log stored for technical superintendent",
    ],
  },
];

const diagnosticHighlights = [
  {
    label: "Pressure Stability",
    detail:
      "Maintain rail pressure within ±30 bar during load transients to avoid torque droop and injector hammering.",
  },
  {
    label: "Injector Return Flow",
    detail:
      "Monitor leak-off for each injector; rising flow indicates needle-seat wear or control valve erosion.",
  },
  {
    label: "Pump Spill Valve Response",
    detail:
      "Command-response lag greater than 2 ms suggests sticking valves or contaminated fuel, prompting inspection.",
  },
  {
    label: "Air & Vent Management",
    detail:
      "Automatic vent valves purge entrained air after maintenance; trapped bubbles cause pressure oscillation and misfire.",
  },
];

export default function Page() {
  return (
    <main>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1100px",
          display: "grid",
          gap: "3.5rem",
        }}
      >
        <section
          style={{
            position: "relative",
            padding: "3.5rem clamp(1rem, 4vw, 3rem)",
            background:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.16) 0%, rgba(76, 29, 149, 0.12) 100%)",
            borderRadius: "2rem",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(15, 23, 42, 0.15)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(59, 130, 246, 0.3), transparent 45%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "1.5rem" }}>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e0e8ff",
              }}
            >
              MAN 32/36/48 Family – Fuel System Deep Dive
            </p>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 3vw + 1.8rem, 3.8rem)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Common Rail Operation on the MAN 36/48 Marine Diesel Engine
            </h1>
            <p
              style={{
                margin: 0,
                color: "rgba(241, 245, 255, 0.92)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "70ch",
              }}
            >
              A structured walk-through of each subsystem—from low-pressure conditioning to injector actuation—showing how MAN&#39;s electronically controlled common rail architecture delivers efficient, clean propulsion power for medium-speed vessels.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {[
                {
                  title: "Engine Speed Range",
                  value: "500–514 rpm",
                },
                {
                  title: "Brake Mean Effective Pressure",
                  value: "~20 bar",
                },
                {
                  title: "Rail Pressure",
                  value: "900–1,400 bar",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(15, 23, 42, 0.4)",
                    color: "#e2e8f0",
                    padding: "1rem 1.4rem",
                    borderRadius: "1rem",
                    minWidth: "170px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "rgba(226, 232, 240, 0.75)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      margin: "0.35rem 0 0",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="System Overview"
            title="Why the MAN 36/48 Uses Common Rail Fueling"
            description="Common rail decouples injection pressure and timing from engine speed. Electronic control enables flexible combustion shaping, lower specific fuel consumption, and compliance with Tier II/III emission rules."
          />
          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              background: "#ffffff",
              borderRadius: "1.75rem",
              padding: "2rem clamp(1rem, 3vw, 2.4rem)",
              boxShadow: "0 18px 40px rgba(15, 23, 42, 0.12)",
              border: "1px solid rgba(148, 163, 184, 0.25)",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "0.75rem",
                color: "#1f2a44",
              }}
            >
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Unlike traditional jerk-pump systems, the MAN 36/48 maintains high-pressure fuel in a shared accumulator. Each injector draws precisely metered fuel on demand, so the engine can execute pilot, main, and post injections irrespective of crankshaft speed. This improves combustion stability during slow steaming and rapid load changes while reducing smoke, NO<sub>x</sub>, and particulate matter.
              </p>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                The architecture is modular: each cylinder pair has its own high-pressure pump and rail section. Redundancy and isolation valves allow continued operation even if one module is taken offline, a key requirement for classification societies and vessel uptime.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {diagnosticHighlights.map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "1.2rem",
                    borderRadius: "1rem",
                    border: "1px solid rgba(37, 99, 235, 0.2)",
                    background: "linear-gradient(180deg, rgba(59, 130, 246, 0.08), rgba(37, 99, 235, 0.02))",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      color: "#1d4ed8",
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      margin: "0.6rem 0 0",
                      color: "#334155",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Hardware Breakdown"
            title="Core Common Rail Components and Their Function"
            description="Each module is purpose-designed to condition, pressurize, store, deliver, and control fuel with marine-grade safety redundancy."
          />
          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {railComponents.map((component) => (
              <ComponentCard key={component.name} {...component} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="System Operation"
            title="Step-by-Step Flow Through the Fuel System"
            description="From bunker tank to combustion chamber, each step builds on the previous to produce controlled high-energy injection events."
          />
          <Timeline stages={operationStages} />
        </section>

        <section>
          <SectionHeading
            eyebrow="Support Architecture"
            title="Key Supporting Subsystems"
            description="These subsystems ensure reliability at sea, enabling transparent operation and fast recovery from disturbances."
          />
          <div
            style={{
              display: "grid",
              gap: "1.2rem",
              background: "#ffffff",
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: "0 15px 35px rgba(30, 64, 175, 0.15)",
              border: "1px solid rgba(191, 219, 254, 0.6)",
            }}
          >
            <div style={{ display: "grid", gap: "0.35rem" }}>
              <h3 style={{ margin: 0, color: "#1d4ed8" }}>Electronic Control & Sensors</h3>
              <p style={{ margin: 0, color: "#334155", lineHeight: 1.6 }}>
                Dual-redundant WECS controllers read crank angle, rail pressure, cylinder pressure, exhaust temperature, and knock sensors. Controller area network (CAN) loops with hot-standby functionality keep the system online if one ECU fails.
              </p>
            </div>
            <div style={{ display: "grid", gap: "0.35rem" }}>
              <h3 style={{ margin: 0, color: "#1d4ed8" }}>Fuel Changeover & Purge</h3>
              <p style={{ margin: 0, color: "#334155", lineHeight: 1.6 }}>
                Prior to entering emission control areas, operators switch from heavy fuel oil to marine gas oil. Automatic changeover units gradually mix fuels, flush the rail with distillate, and verify viscosity before high-pressure injection resumes.
              </p>
            </div>
            <div style={{ display: "grid", gap: "0.35rem" }}>
              <h3 style={{ margin: 0, color: "#1d4ed8" }}>Safety & Classification Compliance</h3>
              <p style={{ margin: 0, color: "#334155", lineHeight: 1.6 }}>
                Double-walled high-pressure pipes route leak-off to monitoring manifolds. If fuel is detected, the system commands emergency shutdown, vents the rail, and isolates affected sections in line with SOLAS and class rules.
              </p>
            </div>
            <div style={{ display: "grid", gap: "0.35rem" }}>
              <h3 style={{ margin: 0, color: "#1d4ed8" }}>Condition-Based Maintenance</h3>
              <p style={{ margin: 0, color: "#334155", lineHeight: 1.6 }}>
                Vibration sensors on HP pumps, injector leak-off meters, and rail pressure trend logs feed the ship&#39;s integrated automation system. Predictive analytics trigger maintenance windows before wear leads to power loss.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Operational Guidance"
            title="Best Practices for Engineers on Watch"
            description="Daily routines that preserve efficiency, reliability, and class compliance."
          />
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              {
                title: "Start-Up",
                points: [
                  "Warm through the booster module until fuel temperature stabilizes",
                  "Vent HP pumps and rails using automated bleed valves",
                  "Verify rail pressure ramp matches WECS target profile",
                ],
              },
              {
                title: "During Operation",
                points: [
                  "Log rail pressure, exhaust temps, and leak-off flows every watch",
                  "Balance cylinders by adjusting WECS load-dependent setpoints",
                  "Monitor pump case temperature for cooling flow sufficiency",
                ],
              },
              {
                title: "Shutdown & Maintenance",
                points: [
                  "Execute automatic depressurization sequence before opening piping",
                  "Use nitrogen blankets when storing injectors to prevent corrosion",
                  "Calibrate pressure sensors quarterly to maintain control accuracy",
                ],
              },
            ].map((card) => (
              <article
                key={card.title}
                style={{
                  background: "#ffffff",
                  padding: "1.5rem",
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(15, 76, 129, 0.15)",
                  boxShadow: "0 12px 24px rgba(15, 23, 42, 0.12)",
                  display: "grid",
                  gap: "0.75rem",
                }}
              >
                <h3 style={{ margin: 0, color: "#0f1f3d" }}>{card.title}</h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.2rem",
                    color: "#334155",
                    lineHeight: 1.6,
                  }}
                >
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Failure Modes"
            title="Troubleshooting Symptoms and Corrective Actions"
            description="Link observed alarms to root causes in the common rail chain to guide rapid recovery."
          />
          <div
            style={{
              overflowX: "auto",
              borderRadius: "1.5rem",
              border: "1px solid rgba(30, 64, 175, 0.2)",
              background: "#ffffff",
              boxShadow: "0 14px 30px rgba(30, 64, 175, 0.14)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "720px",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(59, 130, 246, 0.12)", color: "#0f1f3d" }}>
                  {[
                    "Alarm / Symptom",
                    "Likely Source",
                    "Immediate Action",
                    "Long-Term Remedy",
                  ].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        textAlign: "left",
                        padding: "1rem 1.2rem",
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    alarm: "Rail pressure oscillation >±60 bar",
                    source: "Air ingress after maintenance or failed damper",
                    action: "Initiate automatic venting; verify damper gas charge",
                    remedy: "Inspect non-return valves, refill damper accumulator",
                  },
                  {
                    alarm: "High injector leak-off flow",
                    source: "Needle seat erosion or control valve sticking",
                    action: "Switch affected cylinder to backup pump rail",
                    remedy: "Overhaul injector, analyze fuel cleanliness records",
                  },
                  {
                    alarm: "HP pump temperature rising",
                    source: "Insufficient lubrication from leak-off or clogged cooling",
                    action: "Reduce load, inspect cooling water and leak-off lines",
                    remedy: "Replace pump elements, flush supply circuit",
                  },
                  {
                    alarm: "Cylinder pressure imbalance",
                    source: "Faulty pressure sensor or WECS cylinder map drift",
                    action: "Cross-check with exhaust temps and adjust trim",
                    remedy: "Run cylinder balance routine, recalibrate sensors",
                  },
                  {
                    alarm: "Emergency shutdown triggered by leak detection",
                    source: "Double-walled pipe breach or injector return hose split",
                    action: "Confirm depressurization and isolate section",
                    remedy: "Renew piping, pressure-test before restart",
                  },
                ].map((row) => (
                  <tr key={row.alarm} style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.25)" }}>
                    <td style={{ padding: "0.9rem 1.2rem", color: "#0f172a", fontWeight: 600 }}>
                      {row.alarm}
                    </td>
                    <td style={{ padding: "0.9rem 1.2rem", color: "#334155" }}>{row.source}</td>
                    <td style={{ padding: "0.9rem 1.2rem", color: "#1d4ed8" }}>{row.action}</td>
                    <td style={{ padding: "0.9rem 1.2rem", color: "#334155" }}>{row.remedy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer
          style={{
            marginTop: "1rem",
            padding: "2rem 0 0",
            borderTop: "1px solid rgba(148, 163, 184, 0.3)",
            color: "#475569",
            fontSize: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          This guide distills MAN Diesel & Turbo documentation, class requirements, and shipboard best practices into a compact reference for engineering officers preparing for watch, maintenance, or troubleshooting.
        </footer>
      </div>
    </main>
  );
}
