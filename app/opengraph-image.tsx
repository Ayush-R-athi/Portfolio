import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Ayush Rathi - AI & Full-Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0f0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
            background: "rgba(74,222,128,0.1)",
            border: "1px solid rgba(74,222,128,0.25)",
            borderRadius: 999,
            padding: "8px 18px",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
          <span style={{ color: "#4ade80", fontSize: 16, fontWeight: 500 }}>
            ayushrathi.netlify.app
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Ayush Rathi
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: "#4ade80",
            marginBottom: 24,
            letterSpacing: "-0.5px",
          }}
        >
          AI Enthusiast & Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Final-year B.Tech CSE student at VIT Chennai — building scalable
          full-stack apps with ML, AI, and secure architectures.
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
          {["Machine Learning", "Next.js", "Python", "React"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: "8px 16px",
                color: "rgba(255,255,255,0.7)",
                fontSize: 16,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
