import type { Metadata } from "next";
import { Inter, Pacifico, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: ["400"],
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",

  variable: "--font-manrope",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Condomínio.com - Gestão de condomínios",
  description: "Gestão de condomínios rápido e fácil para grandes empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${pacifico.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
