"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  const nav = [
    { id: "home", icon: "⌂", label: "Home" },
    { id: "tasks", icon: "✓", label: "Tasks" },
    { id: "checkin", icon: "🎁", label: "Check-in" },
    { id: "profile", icon: "◉", label: "Profile" },
  ];

  return (
    <main className="container">
      <section className="card" style={{ textAlign: "center", padding: "30px 18px" }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>🚀</div>

        <div className="title">Welcome</div>

        <div className="subtitle">
          Complete tasks, earn points and invite friends.
        </div>

        <div
          style={{
            marginTop: 22,
            padding: 18,
            borderRadius: 16,
            background: "#0f1118",
          }}
        >
          <div className="subtitle">Your Points</div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginTop: 5,
            }}
          >
            0 ⭐
          </div>
        </div>

        <button className="button">
          Start Earning
        </button>
      </section>

      <section className="card">
        <div style={{ fontSize: 18, fontWeight: 700 }}>
          🎁 Daily Check-in
        </div>

        <div className="subtitle" style={{ marginTop: 6 }}>
          Come back every day and claim your reward.
        </div>

        <button className="button">
          Claim Daily Reward
        </button>
      </section>

      <section className="card">
        <div style={{ fontSize: 18, fontWeight: 700 }}>
          📋 Tasks
        </div>

        <div className="subtitle" style={{ marginTop: 6 }}>
          Complete simple tasks and earn points.
        </div>

        <button className="button">
          View Tasks
        </button>
      </section>

      <section className="card">
        <div style={{ fontSize: 18, fontWeight: 700 }}>
          👥 Invite Friends
        </div>

        <div className="subtitle" style={{ marginTop: 6 }}>
          Invite friends and earn referral rewards.
        </div>

        <button className="button">
          Invite Friends
        </button>
      </section>

      <nav className="bottom-nav">
        {nav.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${
              active === item.id ? "active" : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            <div style={{ fontSize: 20 }}>{item.icon}</div>
            <div style={{ fontSize: 11 }}>{item.label}</div>
          </button>
        ))}
      </nav>
    </main>
  );
}
