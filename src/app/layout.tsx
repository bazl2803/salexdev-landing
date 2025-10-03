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
    <html lang="es">
      <body className={"mx-auto max-w-7xl font-sans antialiased"}>
        {children}
      </body>
    </html>
  );
}
