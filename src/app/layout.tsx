import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Science Portfolio",
  description: "Professional data science portfolio showcasing expertise in machine learning, statistical analysis, and data visualization",
  keywords: ["data science", "machine learning", "statistics", "python", "analytics"],
  authors: [{ name: "Data Science Professional" }],
  robots: "index, follow",
  openGraph: {
    title: "Data Science Portfolio",
    description: "Professional data science portfolio showcasing expertise in machine learning, statistical analysis, and data visualization",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
