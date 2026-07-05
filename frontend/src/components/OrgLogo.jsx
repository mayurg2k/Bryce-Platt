// Timeline organization logo marks - editorial monogram style
import React from "react";

const styles = {
  KU: { bg: "#0033A0", fg: "#F6F1E7" },
  IP: { bg: "#556B2F", fg: "#F6F1E7" },
  PH: { bg: "#6B4E71", fg: "#F6F1E7" },
  MI: { bg: "#1B3B6F", fg: "#F6F1E7" },
  DC: { bg: "#0B1C33", fg: "#F6F1E7" },
  TL: { bg: "#2A5C7A", fg: "#F6F1E7" },
};

export default function OrgLogo({ code = "KU", label = "", size = 44 }) {
  const s = styles[code] || styles.KU;
  return (
    <div
      title={label}
      className="flex items-center justify-center font-serif tracking-wide flex-shrink-0"
      style={{ width: size, height: size, background: s.bg, color: s.fg, fontSize: size * 0.36 }}
    >
      {code}
    </div>
  );
}
