"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Partners() {
  return (
    <div style={{ padding: "40px 8%", color: "#fff", fontFamily: "Inter, sans-serif" }}>
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "15px", textAlign: "center" }}>Our <span style={{ color: "#00a4ff" }}>Partners</span></motion.h1>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ textAlign: "center", color: "#aaa", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 50px auto" }}>
        Collaborating with industry leaders to bring the best opportunities to our students.
      </motion.p>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "20px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <motion.div key={item} variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem", fontWeight: 600 }}>Partner Logo</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
