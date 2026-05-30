"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function AboutUs() {
  return (
    <div style={{ padding: "40px 8%", color: "#fff", fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
        <motion.h1 variants={fadeUp} style={{ fontSize: "3rem", fontWeight: 800, background: "linear-gradient(90deg, #fff, #888)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "10px" }}>
          Computer Society of India
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontSize: "1.2rem", color: "#00a4ff", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "40px" }}>
          Student Chapter • MKU
        </motion.p>
        
        <motion.div variants={fadeUp} style={{ fontSize: "2rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "40px", color: "#eee" }}>
          Build. Break. Innovate. <span style={{ color: "#00a4ff" }}>Repeat.</span>
        </motion.div>

        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#aaa", maxWidth: "800px", marginBottom: "20px" }}>
          We exist to turn curious students into builders. CSI MKU bridges the gap between classroom theory and industry reality — through hands-on projects, real mentorship, and a community that pushes each other to ship.
        </motion.p>
        
        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#aaa", maxWidth: "800px", marginBottom: "60px" }}>
          We're a 150-member strong collective of developers, designers, researchers, and dreamers. From late-night hackathons to open-source contributions, everything we do is driven by one belief: the best way to learn is to build something real.
        </motion.p>

        <motion.h3 variants={fadeUp} style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "20px" }}>Core Values</motion.h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "60px" }}>
          {[
            { title: "Craft over credentials", desc: "What you build matters more than your GPA." },
            { title: "Open by default", desc: "Knowledge shared is knowledge multiplied." },
            { title: "Ship early, learn fast", desc: "Progress over perfection, always." }
          ].map((val, i) => (
            <motion.div key={i} variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(10px)" }}>
              <h4 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px", fontWeight: 600 }}>{val.title}</h4>
              <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>{val.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px" }}>
          {[
            { num: "150+", lbl: "Members" },
            { num: "40+", lbl: "Events" },
            { num: "25+", lbl: "Projects" },
            { num: "6", lbl: "Years Strong" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center", flex: "1 1 120px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#00a4ff" }}>{stat.num}</div>
              <div style={{ fontSize: "0.9rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginTop: "5px", fontWeight: 600 }}>{stat.lbl}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
