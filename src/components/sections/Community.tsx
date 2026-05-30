"use client";
import React from "react";
import { motion } from "framer-motion";

export function Community() {
  return (
    <div style={{ padding: "40px 8%", color: "#fff", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: "400px" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} style={{ textAlign: "center", maxWidth: "600px", padding: "40px 0" }}>
        <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #00a4ff, #0055ff)", borderRadius: "40px", margin: "0 auto 30px auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", boxShadow: "0 10px 30px rgba(0, 164, 255, 0.3)" }}>
          🤝
        </div>
        <h1 style={{ fontSize: "3.5rem", fontWeight: 800, margin: "0 0 20px 0", letterSpacing: "-1px" }}>Join the <span style={{ color: "#00a4ff" }}>Community</span></h1>
        <p style={{ color: "#aaa", fontSize: "1.2rem", lineHeight: 1.6, margin: "0 0 40px 0" }}>
          Be part of a growing network of tech enthusiasts, builders, and learners. Whether you are a beginner or a pro, there's a place for you here.
        </p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: "#fff", color: "#000", border: "none", padding: "16px 36px", fontSize: "1.1rem", fontWeight: 600, borderRadius: "30px", cursor: "pointer", boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}>
          Apply to Join
        </motion.button>
      </motion.div>
    </div>
  );
}
