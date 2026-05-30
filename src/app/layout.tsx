import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Ninja Antwerp - Otantik Japon Mutfağı',
  description: 'Antwerp\'in kalbinde otantik Japon lezzetlerini keşfedin. Taze sushi, ramen ve geleneksel yemekler modern bir ortamda sunuluyor.',
  openGraph: {
    "title": "Ninja Antwerp - Otantik Japon Mutfağı",
    "description": "Antwerp'in kalbinde otantik Japon lezzetlerini keşfedin. Taze sushi, ramen ve geleneksel yemekler modern bir ortamda sunuluyor.",
    "url": "https://www.ninjaantwerp.com",
    "siteName": "Ninja Antwerp",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/man-cooks-healthy-meal-rustic-table-decorate-with-mint-leaf-two-raw-pieces-salmon-white-wine-sause-with-spices-herbs-presented-marble-deck-prepared-grill_346278-812.jpg",
        "alt": "Gourmet Sushi Tabağı"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Ninja Antwerp - Otantik Japon Mutfağı",
    "description": "Antwerp'in kalbinde otantik Japon lezzetlerini keşfedin. Taze sushi, ramen ve geleneksel yemekler modern bir ortamda sunuluyor.",
    "images": [
      "http://img.b2bpic.net/free-photo/man-cooks-healthy-meal-rustic-table-decorate-with-mint-leaf-two-raw-pieces-salmon-white-wine-sause-with-spices-herbs-presented-marble-deck-prepared-grill_346278-812.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
