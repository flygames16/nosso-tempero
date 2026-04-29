import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nosso Tempero 🍛 | Marmita em Cabo Frio",
  description:
    "Marmitas caseiras em Cabo Frio. Entrega rápida, comida fresca e preço justo. Peça agora no WhatsApp.",

  keywords: [
    "nosso tempero",
    "nosso tempero cabo frio",
    "nosso tempero cf",
    "marmita cabo frio",
    "comida caseira cabo frio",
    "quentinha cabo frio",
    "delivery cabo frio",
    "almoço barato cabo frio",
    "restaurante cabo frio",
    "self service cabo frio",
  ],

  icons: {
    icon: "/logo.png",
  },

 verification: {
  google: "IpyctEs3pQNHzPdaKj1ExRBIML16IlDUKbdzdnAWhic",
}
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}