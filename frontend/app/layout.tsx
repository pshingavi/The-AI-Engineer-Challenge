import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Mental Coach",
  description: "A supportive AI mental coach powered by OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
