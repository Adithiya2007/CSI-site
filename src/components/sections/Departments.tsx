"use client";

import React from "react";
import FxSlider from "https://framer.com/m/fx-Slider-GVGv.js@hPSDV5WrI84HI4IP5wb3";

export function Departments() {
  const mockCategories = [
    {
      artist: "Arjun & Priya",
      category: "Web Development",
      featured: "React & Node.js",
      image: { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", alt: "Web Development" }
    },
    {
      artist: "Karthik & Divya",
      category: "AI & ML",
      featured: "Neural Networks",
      image: { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", alt: "AI & Machine Learning" }
    },
    {
      artist: "Vikram & Sneha",
      category: "Cybersecurity",
      featured: "Ethical Hacking",
      image: { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", alt: "Cybersecurity" }
    },
    {
      artist: "Meera & Rohan",
      category: "UI/UX Design",
      featured: "Figma & Framer",
      image: { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", alt: "UI/UX Design" }
    },
    {
      artist: "Aditya & Lakshmi",
      category: "Research",
      featured: "IEEE Publications",
      image: { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", alt: "Research & Innovation" }
    }
  ];

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <FxSlider 
        style={{ width: "100%", height: "100%" }} 
        categories={mockCategories}
        headerText="DOMAINS"
        footerText="DISCOVER"
      />
    </div>
  );
}
