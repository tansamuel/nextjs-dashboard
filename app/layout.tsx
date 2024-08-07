import '@/app/ui/global.css';
import { inter, roboto_mono } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased ${inter.variable} ${roboto_mono.variable}`}>        
        <div>{children}</div>
      </body>
    </html>
  );
}