import { Inter, Lusitana, Roboto_Mono } from 'next/font/google';

export const inter = Inter({ 
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap', 
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
});
