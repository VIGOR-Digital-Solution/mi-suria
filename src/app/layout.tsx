import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { NextUIAppProvider } from "@/components/next-ui-app-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MI-Suria",
  description: "Photovoltaic Monitoring System ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextUIAppProvider>
            {children}
            <Toaster />
          </NextUIAppProvider>
        </ThemeProvider>
      </body>
    </html>

    // old layout
    // <html lang="en">
    //   <body className={inter.className}>
    //     <ThemeProvider
    //       attribute="class"
    //       defaultTheme="dark"
    //       enableSystem
    //       disableTransitionOnChange
    //     >
    //       {children}
    //       <Toaster />
    //     </ThemeProvider>
    //   </body>
    // </html>
  );
}
