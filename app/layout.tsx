import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naol Adugna",
  description: "I am Naol Adugna. I am Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
