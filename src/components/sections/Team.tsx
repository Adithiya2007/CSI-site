"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Team() {
  const members = [
    { name: "Arjun Selvam", role: "President", subRole: "Web Dev", color: "#00a4ff" },
    { name: "Karthik Rajan", role: "Vice President", subRole: "AI/ML", color: "#ff9900" },
    { name: "Meera Krishnan", role: "Design Lead", subRole: "UI/UX", color: "#00cc66" },
    { name: "Vikram Anand", role: "Security Lead", subRole: "Cybersecurity", color: "#ff3366" },
    { name: "Priya Nair", role: "Tech Lead", subRole: "Web Dev", color: "#00a4ff" },
    { name: "Divya Mohan", role: "AI/ML Lead", subRole: "Research", color: "#ff9900" },
    { name: "Rohan Das", role: "Events Head", subRole: "UI/UX", color: "#00cc66" },
    { name: "Sneha Pillai", role: "Community Manager", subRole: "Cybersecurity", color: "#ff3366" }
  ];

  return (
    <div style={{ padding: "40px 8%", color: "#fff", fontFamily: "Inter, sans-serif" }}>
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "40px", textAlign: "center" }}>Meet the <span style={{ color: "#00a4ff" }}>Team</span></motion.h1>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
        {members.map((m, i) => (
          <motion.div key={i} variants={fadeUp} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "30px 20px", display: "flex", flexDirection: "column", alignItems: "center", backdropFilter: "blur(10px)", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `rgba(${parseInt(m.color.slice(1,3),16)}, ${parseInt(m.color.slice(3,5),16)}, ${parseInt(m.color.slice(5,7),16)}, 0.1)`, color: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", fontWeight: 700, marginBottom: "20px" }}>
              {m.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 5px 0" }}>{m.name}</h3>
            <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0, fontWeight: 500 }}>{m.role}</p>
            <p style={{ color: m.color, fontSize: "0.8rem", margin: "5px 0 0 0", fontWeight: 600, background: `rgba(${parseInt(m.color.slice(1,3),16)}, ${parseInt(m.color.slice(3,5),16)}, ${parseInt(m.color.slice(5,7),16)}, 0.1)`, padding: "4px 10px", borderRadius: "12px" }}>{m.subRole}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
