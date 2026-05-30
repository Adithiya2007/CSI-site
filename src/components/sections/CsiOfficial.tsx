"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function CsiOfficial() {
  return (
    <div style={{ padding: "40px 8%", color: "#fff", fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div variants={fadeUp} style={{ display: "inline-block", background: "rgba(0, 164, 255, 0.1)", color: "#00a4ff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.9rem", fontWeight: 600, margin: "0 0 20px 0" }}>
          NATIONAL BODY
        </motion.div>
        <motion.h1 variants={fadeUp} style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
          Computer Society of India <br/> <span style={{ color: "#aaa" }}>(CSI)</span>
        </motion.h1>
        
        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#aaa", maxWidth: "800px", margin: "0 0 50px 0" }}>
          Established in 1965, the Computer Society of India is the first and largest body of computer professionals in India. It is a national level non-profit professional society dedicated to the advancement of theory and practice of Computer Science & Information Technology.
        </motion.p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", margin: "0 0 50px 0" }}>
          {[
            { title: "Professional Network", desc: "Connecting over 150,000 IT professionals, academicians, and student builders across India." },
            { title: "Knowledge & Events", desc: "Hosting national level conferences, symposia, and publishing prestigious research journals." },
            { title: "Student Chapters", desc: "Nurturing tech talent in colleges through specialized workshops, contests, and mentorship." }
          ].map((val, i) => (
            <motion.div key={i} variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(10px)" }}>
              <h4 style={{ fontSize: "1.2rem", color: "#fff", margin: "0 0 10px 0", fontWeight: 600 }}>{val.title}</h4>
              <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>{val.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div variants={fadeUp} style={{ textAlign: "center" }}>
          <a href="http://www.csi-india.org/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#00a4ff", color: "#fff", padding: "14px 32px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "1rem", boxShadow: "0 10px 30px rgba(0, 164, 255, 0.3)", transition: "transform 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            Visit Official Website
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
