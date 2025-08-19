import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import '../globals.css';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Data Science Portfolio | Professional Analytics & Machine Learning',
    description: 'Experienced data scientist specializing in machine learning, statistical analysis, and data visualization. Transforming data into actionable insights for business growth.',
    keywords: 'data science, machine learning, analytics, python, r, sql, statistics, data visualization, artificial intelligence',
    authors: [{ name: 'Data Science Professional' }],
    creator: 'Data Science Professional',
    publisher: 'Data Science Portfolio',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://data-science-portfolio.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'fr-CA': '/fr',
      },
    },
    openGraph: {
      title: 'Data Science Portfolio',
      description: 'Professional data scientist portfolio showcasing machine learning projects and analytics expertise',
      url: 'https://data-science-portfolio.vercel.app',
      siteName: 'Data Science Portfolio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Data Science Portfolio',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Data Science Portfolio',
      description: 'Professional data scientist portfolio showcasing machine learning projects and analytics expertise',
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}