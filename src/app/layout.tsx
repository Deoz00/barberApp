import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import BasicNavbar from "@/components/basic-navbar";
import { AuthProvider } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          <AuthProvider>
            <div className="relative flex h-dvh w-full flex-col overflow-hidden">
              <BasicNavbar maxWidth="full" isBlurred={false} />
              {children}
            </div>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
