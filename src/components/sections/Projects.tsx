"use client";

import React from "react";
import VideoComponent from "https://framer.com/m/Video-Component-0Gti.js@rgRu2j7Rdo4wHbNub7OE";
import CardSwap, { Card } from "../CardSwap";

export function Projects() {
  const projects = [
    { name: "CampusOS", video: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4" },
    { name: "SentinelX", video: "https://framerusercontent.com/assets/271QwsjeO0NMQpKWyYKrJkeWU.mp4" },
    { name: "LectureLens", video: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4" },
    { name: "Aaroha", video: "https://framerusercontent.com/assets/271QwsjeO0NMQpKWyYKrJkeWU.mp4" },
  ];

  return (
    <div style={{ padding: "40px 10%", width: "100%", height: "100%", position: "relative", overflow: "hidden", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ flex: 1, maxWidth: "500px", paddingRight: "40px" }}>
        <h1 style={{ fontSize: "5rem", color: "#fff", fontWeight: "bold", margin: 0, lineHeight: 1.1 }}>Our<br />Projects</h1>
        <p style={{ color: "#aaa", fontSize: "1.2rem", marginTop: "1.5rem" }}>
          Discover the innovative tools and platforms built by our community to elevate the technical landscape.
        </p>
      </div>
      
      <CardSwap
        width={380}
        height={450}
        cardDistance={40}
        verticalDistance={50}
        delay={4000}
        pauseOnHover={true}
      >
        {projects.map((p, i) => (
          <Card key={i} style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent' }}>
            <VideoComponent 
              name1={p.name} 
              uRL={p.video}
              source="URL"
              style={{ width: "100%", height: "100%" }} 
              link={undefined}
            />
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
