import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Science Portfolio | Professional Data Scientist",
  description: "Professional data science portfolio showcasing expertise in machine learning, statistical analysis, and data visualization.",
  keywords: "data science, machine learning, statistics, python, r, sql, data visualization",
  authors: [{ name: "Data Scientist" }],
};

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Header locale="en" />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
