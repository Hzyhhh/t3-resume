import "~/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "个人简历",
  description: "个人简历和作品集展示",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fusionPixel = localFont({
  src: [
    {
      // path: "/fonts/fusion-pixel-12px.woff2",
      path: "../../public/fonts/fusion-pixel-12px.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className={`${fusionPixel.className} h-full antialiased`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
