import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salex Dev",
  description: "Consultora Tecnológica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={"max-w-[1280px] mx-auto font-sans antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
