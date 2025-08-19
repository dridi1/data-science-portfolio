import type { Metadata } from "next";
import ThemeProvider from '@/components/providers/theme-provider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Dridi - Data Science Portfolio",
  description: "Data Scientist & Analytics Expert specializing in machine learning, statistical analysis, and data visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}