import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Leonard J. Lee | Resume + Portfolio',
  description: 'The resume and portfolio for Leonard J. Lee, a versatile developer, builder, and business owner.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" style={{ fontSize: '90%' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <main className="max-w-4xl mx-auto p-4 sm:p-10">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
