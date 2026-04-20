import Link from "next/link";

export default function AuthorBio() {
  return (
    <aside
      style={{
        marginTop: "32px",
        padding: "18px 20px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.12)",
        backgroundColor: "rgba(13,13,31,0.8)",
      }}
      aria-label="Author biography"
    >
      <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.7, marginBottom: "10px" }}>
        <strong>Aqsa Zam Zam Mirza Johar Baig</strong> is a Computer Science (AI and ML) student at VIIT Pune and
        a Data Science student at IIT Madras.
      </p>
      <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.7, marginBottom: "10px" }}>
        She has personally verified and documented multiple production software, cloud, and legal-content workflows
        across real project implementations.
      </p>
      <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
        External authority profile:{" "}
        <Link href="https://www.linkedin.com/in/aqsamirza08" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
          LinkedIn Interview and Profile
        </Link>
        .
      </p>
    </aside>
  );
}
