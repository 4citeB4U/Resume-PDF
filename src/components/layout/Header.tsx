'use client';

import Link from 'next/link';
import { Download, Menu, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-summary', label: 'AI Summary' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  const handleDownload = () => {
    // In a real application, you would generate and download the PDF here.
    // For now, we'll just log to the console.
    console.log('PDF Download Triggered');
    alert('PDF download functionality is in development.');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm shadow-sm">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Mountain className="h-6 w-6 text-primary" />
        <span className="sr-only">LeeWay Portfolio</span>
        <span className="ml-2 font-headline text-lg font-bold text-primary">LeeWay</span>
      </Link>
      <nav className="ml-auto hidden gap-4 sm:gap-6 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:underline underline-offset-4 text-foreground/80 hover:text-foreground"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-4 hidden lg:block">
        <Button onClick={handleDownload} variant="outline" className="text-primary border-primary hover:bg-primary/10">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>
      <div className="ml-auto lg:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                  prefetch={false}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Button onClick={handleDownload} variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
