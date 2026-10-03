import "./globals.css";

export const metadata = {
  title: "Eknath Patil | Zoho CRM & Business Automation Specialist",
  description:
    "Portfolio of Eknath Patil, Zoho Certified Software Developer specializing in CRM, business process automation, Deluge, SAP CPI and Zoho ecosystem solutions.",
  keywords: [
    "Eknath Patil",
    "Zoho Developer",
    "Zoho CRM",
    "Deluge",
    "Business Automation",
    "SAP CPI",
    "Zoho Creator"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
