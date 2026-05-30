"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Contact() {
  return (
    <div style={{ padding: "40px 8%", color: "#fff", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "80%" }}>
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: "3rem", fontWeight: 800, margin: "0 0 20px 0", textAlign: "center" }}>Get in <span style={{ color: "#00a4ff" }}>Touch</span></motion.h1>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ textAlign: "center", color: "#aaa", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 50px auto", lineHeight: 1.6 }}>
        Whether you want to collaborate, speak at an event, or just say hi — our inbox is always open. We usually reply within 48 hours.
      </motion.p>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        <motion.div variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ color: "#00a4ff", fontSize: "1.5rem", marginBottom: "10px" }}>✉️</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>Email Us</h3>
          <p style={{ color: "#888", fontSize: "1rem", margin: 0 }}>csi@mku.edu.in</p>
        </motion.div>

        <motion.div variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ color: "#00a4ff", fontSize: "1.5rem", marginBottom: "10px" }}>📍</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>Visit Us</h3>
          <p style={{ color: "#888", fontSize: "1rem", margin: 0, lineHeight: 1.5 }}>Room 204, CS Block,<br/>Madurai Kamaraj University</p>
        </motion.div>

        <motion.div variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ color: "#00a4ff", fontSize: "1.5rem", marginBottom: "10px" }}>🔗</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>Socials</h3>
          <div style={{ display: "flex", gap: "15px", marginTop: "5px" }}>
            <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}>Instagram</a>
            <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}>LinkedIn</a>
            <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}>GitHub</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
