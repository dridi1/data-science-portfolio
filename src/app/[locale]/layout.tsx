import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Science Portfolio | Professional Data Scientist",
  description: "Professional data science portfolio showcasing expertise in machine learning, statistical analysis, and data visualization.",
  keywords: "data science, machine learning, statistics, python, r, sql, data visualization",
  authors: [{ name: "Data Scientist" }],
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({locale});

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
        <div className="min-h-screen bg-background text-foreground font-sans">
          <Header locale={locale} />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
