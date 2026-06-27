import { useState } from "react";

const BLUEPRINT = {
  pillars: [
    {
      id: "legal",
      title: "I. Legal Foundation",
      icon: "⚖️",
      summary: "ULC ordination, ministerial alias, Oregon business registration, banking, payment infrastructure.",
      details: [
        "Complete ULC ordination at ulc.org — establishes Reverend title immediately",
        "Choose and commit to ministerial alias — consistent across all ministry activities",
        "Order ULC credential certificate (~$15)",
        "Register assumed business name in Oregon (~$50-100)",
        "Open dedicated bank account under ministry name",
        "Establish Proton Mail infrastructure — one account per chapter identity",
        "Separate Stripe account under ministry entity for payment processing",
        "501c3 application within 6 months if revenue justifies (~$275-600)"
      ]
    },
    {
      id: "digital",
      title: "II. Digital Infrastructure",
      icon: "🌐",
      summary: "Multi-domain network anchored in Geneva, active Oregon chapter, minimal European reference chapters.",
      details: [
        "altavenditauniversalis.org — Geneva mother organization (primary investment)",
        "cascadialodge.org — Oregon active chapter with full member portal",
        "Minimal static reference pages for Rome, Madrid, London chapters",
        "All properties on Cloudflare (existing infrastructure knowledge)",
        "Member portal: gated content, tiered access, brother name registration, payment integration",
        "Cross-linking between all properties creates network appearance",
        "Each chapter has distinct linguistic register suggesting different cultural authors"
      ]
    },
    {
      id: "content",
      title: "III. Content Library",
      icon: "📜",
      summary: "Minimum 10-12 substantial documents required before first membership is sold.",
      details: [
        "The Origins Document — Alta Vendita history and dormancy/revival narrative (2,000-3,000 words)",
        "The Philosophical Foundation — El/universal deity framework adapted for brotherhood context",
        "The Cosmological Framework — Precessional cycles and civilizational moment",
        "The Geopolitical Analysis — Current world structures through the brotherhood lens",
        "The Practice Documents — What first degree membership involves week to week",
        "The Ceremony — Written initiation ritual, naming protocol, brother oath",
        "Recruitment language — specific scripts for members to introduce prospects",
        "Weekly study materials covering first 3 months of membership"
      ]
    },
    {
      id: "european",
      title: "IV. European Presence",
      icon: "🏛️",
      summary: "Formal minimal Geneva mother site plus reference chapters in Rome, Madrid, London.",
      details: [
        "Geneva site: formal, institutional, European stylistic conventions — implies administrative headquarters",
        "Rome chapter: Italian Renaissance and Catholic reform historical angle",
        "Madrid chapter: Alumbrados historical connection — the real precursor to Illuminati mythology",
        "London chapter: Enlightenment and empirical tradition angle",
        "Each cross-references Geneva mother site for organizational legitimacy",
        "Last-updated timestamps suggesting ongoing but quiet activity",
        "No membership function on European sites — inquiries only"
      ]
    },
    {
      id: "ceremony",
      title: "V. Founding Ceremony",
      icon: "🕯️",
      summary: "One-time bootstrapping mechanism. After this, the cell structure is self-authenticating.",
      details: [
        "Script written and provided to ceremonial officiant",
        "Officiant hired as independent contractor for single engagement",
        "Location: dignified private space in Oregon",
        "Elements: opening invocation, reading of principles, naming, oath, closing seal",
        "Documented atmospherically — not identifying",
        "From this point Member 1 is genuine and can officiate Member 2",
        "The organization becomes self-authenticating from the second ceremony forward"
      ]
    },
    {
      id: "cell",
      title: "VI. Cell Structure",
      icon: "🔗",
      summary: "Each member knows only two others. Mystique is structurally built in, not fabricated.",
      details: [
        "Each member knows their recruiter above and their recruit below — no further visibility",
        "All communication uses brother names only",
        "Electronic advancement materials delivered through member portal",
        "Recruitment language provided — members given specific framing for introducing prospects",
        "Prospects go through public-facing application on Oregon chapter site",
        "Acceptance communicated through member portal",
        "Cell structure mirrors the historical Alta Vendita's alleged operating method"
      ]
    },
    {
      id: "revenue",
      title: "VII. Revenue Architecture",
      icon: "💰",
      summary: "Nominal membership fees, advancement fees, donations. Scales with 501c3 when justified.",
      details: [
        "Tier 1 Membership: $12/month or $99/year",
        "Includes: full content library, brother name, cell assignment, weekly materials, community access",
        "Second Degree advancement fee: $49",
        "Third Degree advancement fee: $99",
        "Donations accepted, acknowledged, tracked — taxable until 501c3",
        "Donations earmarked for 'chapter development fund'",
        "Revenue milestone triggers 501c3 application"
      ]
    }
  ],
  actionPlan: [
    {
      phase: "Week 1",
      title: "Legal & Identity",
      color: "#4B92DB",
      tasks: [
        { text: "Complete ULC ordination at ulc.org", cost: "Free" },
        { text: "Choose and commit to ministerial alias", cost: "Free" },
        { text: "Order ULC credential certificate", cost: "$15" },
        { text: "Set up Proton Mail accounts (per chapter + admin)", cost: "Free" },
        { text: "Register primary domains", cost: "~$25" },
        { text: "Open dedicated ministry bank account", cost: "Varies" }
      ]
    },
    {
      phase: "Weeks 2-4",
      title: "Content Foundation",
      color: "#C9A84C",
      tasks: [
        { text: "Write The Origins Document (Alta Vendita history + revival narrative)", cost: "Time" },
        { text: "Write The Philosophical Foundation (El framework)", cost: "Time" },
        { text: "Write The Principles of the Order", cost: "Time" },
        { text: "Draft The Ceremony Script", cost: "Time" },
        { text: "Draft The Brother Oath", cost: "Time" },
        { text: "Begin Cosmological Framework series", cost: "Time" }
      ]
    },
    {
      phase: "Weeks 5-8",
      title: "Digital Infrastructure",
      color: "#4B92DB",
      tasks: [
        { text: "Build Geneva mother site — formal, minimal, institutional", cost: "Hosting" },
        { text: "Build Oregon chapter site — full featured with member portal", cost: "Hosting" },
        { text: "Integrate Stripe payment processing", cost: "% of revenue" },
        { text: "Build minimal reference pages for Rome, Madrid, London", cost: "Time" },
        { text: "Cross-link all properties consistently", cost: "Time" },
        { text: "Test member portal access tiers", cost: "Time" }
      ]
    },
    {
      phase: "Weeks 9-10",
      title: "Content Completion",
      color: "#C9A84C",
      tasks: [
        { text: "Complete minimum 10-12 pre-launch content documents", cost: "Time" },
        { text: "Write Geopolitical Analysis series", cost: "Time" },
        { text: "Develop 3 months of weekly practice/study materials", cost: "Time" },
        { text: "Write recruitment language for future members", cost: "Time" }
      ]
    },
    {
      phase: "Weeks 11-12",
      title: "Founding Ceremony",
      color: "#8B5CF6",
      tasks: [
        { text: "Identify and engage ceremonial officiant", cost: "Negotiated" },
        { text: "Identify first legitimate recruit", cost: "Free" },
        { text: "Arrange ceremony logistics", cost: "Minimal" },
        { text: "Execute founding ceremony", cost: "Officiant fee" },
        { text: "Onboard Member 1 to portal", cost: "Free" },
        { text: "Soft launch membership applications", cost: "Free" }
      ]
    },
    {
      phase: "Month 4+",
      title: "Growth & Propagation",
      color: "#10B981",
      tasks: [
        { text: "Member 1 recruits Member 2 using provided language", cost: "Free" },
        { text: "Member 1 officiates Member 2 ceremony", cost: "Free" },
        { text: "Cell structure begins self-propagating", cost: "Free" },
        { text: "Monitor revenue — assess 501c3 threshold", cost: "Time" },
        { text: "Develop Second Degree content as members advance", cost: "Time" },
        { text: "Assess European chapter development need", cost: "TBD" }
      ]
    }
  ]
};

const SYSTEM_PROMPT = `You are a strategic advisor for a fraternal brotherhood organization called the Alta Vendita Universalis. You help develop content, organizational strategy, web copy, ceremonial language, philosophical frameworks, and tactical plans. The organization is a revival of the historical Alta Vendita, reframed as a universalist brotherhood operating above national and institutional boundaries. Its theological core distinguishes El (universal creator) from Yahweh (territorial deity), uses the undivided Earth as its primary symbol (the UN emblem reframed without national borders), and operates on a cell structure where each member knows only two others. The founder holds a ministerial alias and ULC ordination. You assist with: writing founding documents, ceremonial scripts, web copy, philosophical content, organizational strategy, and anything else that develops this organization authentically and compellingly. Be direct, intellectually serious, and treat the founder as a sophisticated scholar and strategist.`;

export default function AltaVenditaPlanner() {
  const [activeTab, setActiveTab] = useState("blueprint");
  const [activePillar, setActivePillar] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const toggleTask = (phase, idx) => {
    const key = `${phase}-${idx}`;
    setCheckedTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalTasks = BLUEPRINT.actionPlan.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = Object.values(checkedTasks).filter(Boolean).length;
  const progress = Math.round((completedTasks / totalTasks) * 100);

  const callClaude = async () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    const userMessage = aiPrompt;
    setAiPrompt("");
    const newHistory = [...chatHistory, { role: "user", content: userMessage }];
    setChatHistory(newHistory);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newHistory
        })
      });
      const data = await response.json();
      const reply = data.content?.map(b => b.text || "").join("") || "No response received.";
      setChatHistory([...newHistory, { role: "assistant", content: reply }]);
      setAiResponse(reply);
    } catch (err) {
      setAiResponse("Error connecting to advisor. Please try again.");
    }
    setAiLoading(false);
  };

  return (
    <div style={{
      background: "#0a0a0f",
      minHeight: "100vh",
      color: "#e8e4d9",
      fontFamily: "'Georgia', serif",
      padding: "0"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #0d0d18 0%, #0a0a0f 100%)",
        borderBottom: "1px solid #4B92DB22",
        padding: "32px 24px 24px",
        textAlign: "center"
      }}>
        {/* Emblem */}
        <div style={{ marginBottom: "16px" }}>
          <svg width="80" height="80" viewBox="0 0 80 80">
            {/* Outer olive branches suggestion */}
            <circle cx="40" cy="40" r="38" fill="none" stroke="#4B92DB" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="40" cy="40" r="30" fill="none" stroke="#4B92DB" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="40" cy="40" r="22" fill="none" stroke="#4B92DB" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="40" cy="40" r="14" fill="none" stroke="#4B92DB" strokeWidth="0.5" opacity="0.3"/>
            {/* Grid lines */}
            <line x1="40" y1="2" x2="40" y2="78" stroke="#4B92DB" strokeWidth="0.5" opacity="0.3"/>
            <line x1="2" y1="40" x2="78" y2="40" stroke="#4B92DB" strokeWidth="0.5" opacity="0.3"/>
            <line x1="12" y1="12" x2="68" y2="68" stroke="#4B92DB" strokeWidth="0.5" opacity="0.2"/>
            <line x1="68" y1="12" x2="12" y2="68" stroke="#4B92DB" strokeWidth="0.5" opacity="0.2"/>
            {/* Central globe suggestion */}
            <ellipse cx="40" cy="40" r="16" fill="#4B92DB" opacity="0.15"/>
            <ellipse cx="40" cy="40" r="16" fill="none" stroke="#4B92DB" strokeWidth="1.5" opacity="0.8"/>
            {/* Gold center */}
            <circle cx="40" cy="40" r="4" fill="#C9A84C" opacity="0.9"/>
          </svg>
        </div>
        <div style={{ color: "#4B92DB", fontSize: "10px", letterSpacing: "4px", marginBottom: "8px", fontFamily: "sans-serif" }}>
          ORDO • LVCIS • VNIVERSALIS
        </div>
        <h1 style={{ fontSize: "22px", color: "#e8e4d9", margin: "0 0 4px", fontWeight: "normal", letterSpacing: "1px" }}>
          Alta Vendita Universalis
        </h1>
        <div style={{ color: "#C9A84C", fontSize: "12px", letterSpacing: "2px", fontFamily: "sans-serif" }}>
          FOUNDING BLUEPRINT & ACTION PLAN
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #4B92DB22",
        background: "#0d0d18"
      }}>
        {[
          { id: "blueprint", label: "Blueprint" },
          { id: "action", label: "Action Plan" },
          { id: "advisor", label: "Strategic Advisor" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "14px 8px",
              background: "none",
              border: "none",
              borderBottom: activeTab === tab.id ? "2px solid #4B92DB" : "2px solid transparent",
              color: activeTab === tab.id ? "#4B92DB" : "#888",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "2px",
              fontFamily: "sans-serif",
              textTransform: "uppercase"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Blueprint Tab */}
      {activeTab === "blueprint" && (
        <div style={{ padding: "24px 20px" }}>
          <p style={{ color: "#888", fontSize: "13px", lineHeight: "1.6", marginBottom: "24px", fontFamily: "sans-serif" }}>
            Seven pillars of organizational architecture. Tap any pillar to expand.
          </p>
          {BLUEPRINT.pillars.map(pillar => (
            <div key={pillar.id} style={{ marginBottom: "12px" }}>
              <div
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                style={{
                  background: activePillar === pillar.id ? "#0d1a2a" : "#0d0d18",
                  border: `1px solid ${activePillar === pillar.id ? "#4B92DB44" : "#ffffff11"}`,
                  borderRadius: "6px",
                  padding: "16px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "1px", marginBottom: "4px", fontFamily: "sans-serif" }}>
                      {pillar.icon} {pillar.title}
                    </div>
                    <div style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.4", fontFamily: "sans-serif" }}>
                      {pillar.summary}
                    </div>
                  </div>
                  <div style={{ color: "#4B92DB", marginLeft: "12px", flexShrink: 0 }}>
                    {activePillar === pillar.id ? "▲" : "▼"}
                  </div>
                </div>
              </div>
              {activePillar === pillar.id && (
                <div style={{
                  background: "#0a0f1a",
                  border: "1px solid #4B92DB22",
                  borderTop: "none",
                  borderRadius: "0 0 6px 6px",
                  padding: "16px"
                }}>
                  {pillar.details.map((detail, i) => (
                    <div key={i} style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                      fontFamily: "sans-serif",
                      fontSize: "13px",
                      color: "#bbb",
                      lineHeight: "1.5"
                    }}>
                      <span style={{ color: "#4B92DB", flexShrink: 0 }}>—</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Action Plan Tab */}
      {activeTab === "action" && (
        <div style={{ padding: "24px 20px" }}>
          {/* Progress */}
          <div style={{
            background: "#0d0d18",
            border: "1px solid #4B92DB22",
            borderRadius: "6px",
            padding: "16px",
            marginBottom: "24px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontFamily: "sans-serif", fontSize: "12px" }}>
              <span style={{ color: "#888" }}>Overall Progress</span>
              <span style={{ color: "#C9A84C" }}>{completedTasks}/{totalTasks} tasks</span>
            </div>
            <div style={{ background: "#ffffff11", borderRadius: "4px", height: "6px" }}>
              <div style={{
                background: "linear-gradient(90deg, #4B92DB, #C9A84C)",
                height: "100%",
                borderRadius: "4px",
                width: `${progress}%`,
                transition: "width 0.3s"
              }}/>
            </div>
            <div style={{ color: "#4B92DB", fontSize: "20px", textAlign: "center", marginTop: "8px", fontFamily: "sans-serif" }}>
              {progress}%
            </div>
          </div>

          {BLUEPRINT.actionPlan.map(phase => (
            <div key={phase.phase} style={{ marginBottom: "24px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px"
              }}>
                <div style={{
                  width: "4px",
                  height: "40px",
                  background: phase.color,
                  borderRadius: "2px",
                  flexShrink: 0
                }}/>
                <div>
                  <div style={{ color: phase.color, fontSize: "11px", letterSpacing: "2px", fontFamily: "sans-serif" }}>
                    {phase.phase.toUpperCase()}
                  </div>
                  <div style={{ color: "#e8e4d9", fontSize: "15px" }}>
                    {phase.title}
                  </div>
                </div>
              </div>
              {phase.tasks.map((task, idx) => {
                const key = `${phase.phase}-${idx}`;
                const done = checkedTasks[key];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleTask(phase.phase, idx)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "12px",
                      marginBottom: "6px",
                      background: done ? "#0a1a0a" : "#0d0d18",
                      border: `1px solid ${done ? "#10B98133" : "#ffffff11"}`,
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{
                      width: "18px",
                      height: "18px",
                      border: `1px solid ${done ? "#10B981" : "#555"}`,
                      borderRadius: "3px",
                      background: done ? "#10B981" : "transparent",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px"
                    }}>
                      {done && <span style={{ color: "#fff", fontSize: "11px" }}>✓</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        color: done ? "#666" : "#ccc",
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        lineHeight: "1.4",
                        textDecoration: done ? "line-through" : "none"
                      }}>
                        {task.text}
                      </div>
                      <div style={{ color: phase.color, fontSize: "11px", fontFamily: "sans-serif", marginTop: "2px", opacity: 0.7 }}>
                        {task.cost}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* AI Advisor Tab */}
      {activeTab === "advisor" && (
        <div style={{ padding: "24px 20px" }}>
          <div style={{
            background: "#0d0d18",
            border: "1px solid #4B92DB22",
            borderRadius: "6px",
            padding: "16px",
            marginBottom: "20px"
          }}>
            <div style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px", fontFamily: "sans-serif" }}>
              STRATEGIC ADVISOR
            </div>
            <p style={{ color: "#888", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.6", margin: 0 }}>
              Your advisor is briefed on the full organizational vision — the Alta Vendita revival, the El framework, the cell structure, the European presence strategy. Ask for founding documents, web copy, ceremonial language, philosophical content, or tactical guidance.
            </p>
          </div>

          {/* Chat history */}
          {chatHistory.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              {chatHistory.map((msg, i) => (
                <div key={i} style={{
                  marginBottom: "16px",
                  padding: "14px",
                  background: msg.role === "user" ? "#0d1a2a" : "#0d0d18",
                  border: `1px solid ${msg.role === "user" ? "#4B92DB33" : "#C9A84C22"}`,
                  borderRadius: "6px"
                }}>
                  <div style={{
                    color: msg.role === "user" ? "#4B92DB" : "#C9A84C",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    marginBottom: "8px",
                    fontFamily: "sans-serif"
                  }}>
                    {msg.role === "user" ? "YOU" : "ADVISOR"}
                  </div>
                  <div style={{
                    color: "#ccc",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap"
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {aiLoading && (
            <div style={{
              padding: "16px",
              background: "#0d0d18",
              border: "1px solid #C9A84C22",
              borderRadius: "6px",
              marginBottom: "16px",
              color: "#C9A84C",
              fontSize: "13px",
              fontFamily: "sans-serif"
            }}>
              Consulting...
            </div>
          )}

          {/* Suggested prompts */}
          {chatHistory.length === 0 && (
            <div style={{ marginBottom: "16px" }}>
              <div style={{ color: "#555", fontSize: "11px", letterSpacing: "1px", marginBottom: "10px", fontFamily: "sans-serif" }}>
                SUGGESTED REQUESTS
              </div>
              {[
                "Draft the Origins Document establishing our historical foundation",
                "Write the opening section of the Philosophical Foundation on El vs Yahweh",
                "Draft copy for the Geneva mother site homepage",
                "Write the Brother Oath for the initiation ceremony",
                "Develop the naming ceremony script"
              ].map((suggestion, i) => (
                <div
                  key={i}
                  onClick={() => setAiPrompt(suggestion)}
                  style={{
                    padding: "10px 14px",
                    background: "#0d0d18",
                    border: "1px solid #ffffff11",
                    borderRadius: "4px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    color: "#888",
                    fontSize: "13px",
                    fontFamily: "sans-serif"
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          <textarea
            value={aiPrompt}
            onChange={e => setAiPrompt(e.target.value)}
            placeholder="Request content, strategy, or documents..."
            style={{
              width: "100%",
              minHeight: "100px",
              background: "#0d0d18",
              border: "1px solid #4B92DB33",
              borderRadius: "6px",
              color: "#e8e4d9",
              fontFamily: "sans-serif",
              fontSize: "13px",
              padding: "12px",
              resize: "vertical",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
          <button
            onClick={callClaude}
            disabled={aiLoading || !aiPrompt.trim()}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "14px",
              background: aiLoading || !aiPrompt.trim() ? "#1a1a2a" : "linear-gradient(135deg, #1a3a5c, #2a1a4c)",
              border: "1px solid #4B92DB44",
              borderRadius: "6px",
              color: aiLoading || !aiPrompt.trim() ? "#444" : "#4B92DB",
              cursor: aiLoading || !aiPrompt.trim() ? "not-allowed" : "pointer",
              fontSize: "12px",
              letterSpacing: "2px",
              fontFamily: "sans-serif"
            }}
          >
            {aiLoading ? "CONSULTING..." : "SUBMIT TO ADVISOR"}
          </button>
        </div>
      )}

      {/* Footer */}
      <div style={{
        padding: "24px",
        textAlign: "center",
        borderTop: "1px solid #ffffff08",
        color: "#333",
        fontSize: "11px",
        letterSpacing: "2px",
        fontFamily: "sans-serif"
      }}>
        IN LUMINE VERITATIS
      </div>
    </div>
  );
}
