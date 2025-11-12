import "./globals.css";

export const metadata = {
  title: "SGN Transport Inc. — Dump‑Truck Hauling GTA",
  description: "Reliable tri‑axle dump‑truck hauling for subdivisions, municipal, and paving projects across the GTA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
