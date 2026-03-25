import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Luxury Redefined Hotel | Experience Unmatched Elegance',
  description: 'Discover unparalleled luxury and comfort at our high-end hotel property. Book your exclusive stay and experience redefined elegance with world-class amenities.',
  keywords: ["luxury hotel, high-end property, boutique hotel, premium stay, elegant accommodation, exclusive resort, Chekela Turner hotel, luxury travel"],
  openGraph: {
    "title": "Luxury Redefined Hotel | Experience Unmatched Elegance",
    "description": "Discover unparalleled luxury and comfort at our high-end hotel property. Book your exclusive stay and experience redefined elegance with world-class amenities.",
    "url": "/",
    "siteName": "Luxury Redefined Hotel",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPl5wkhbfw8NQyjrpv8EdIYjgV/uploaded-1774398445312-l08b79zz.jpg",
        "alt": "Luxurious bedroom with stunning view"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Luxury Redefined Hotel | Experience Unmatched Elegance",
    "description": "Discover unparalleled luxury and comfort at our high-end hotel property. Book your exclusive stay and experience redefined elegance with world-class amenities.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPl5wkhbfw8NQyjrpv8EdIYjgV/uploaded-1774398445312-l08b79zz.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
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
