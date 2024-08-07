import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { inter, lusitana, roboto_mono } from '@/app/ui/fonts';

import Image from 'next/image';
import heroDesktop from '../public/hero-desktop.png';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* <div className={styles.shape} /> */}
      <h1>My Testing App</h1>
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
/>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Welcome to Acme.</strong> This is the example for the{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-500">
                Next.js Learn Course
              </a>
              , brought to you by Vercel.
            </p>
            <p className={`${inter.className} text-xl text-gray-800 md:text-3m md:leading-normal`}>
              <a href="/dashboard" className="text-blue-500">Dashboard</a><br/>
              <a href="/dashboard/customers" className="text-blue-500">Customers</a><br/>
              <a href="/dashboard/invoices" className="text-blue-500">Invoices</a>
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}
        <Image
        src={heroDesktop}
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
        placeholder="blur"
        quality={100}
        // sizes="100vw"
        // style={{
        //   width: '100%',
        //   height: 'auto',
        // }}
        // fill
        // sizes="100vw"
        // style={{
          // objectFit: 'cover',
        // }}
        // fill
        // sizes="(min-width: 808px) 50vw, 100vw"
        // style={{
        //   objectFit: 'cover', // cover, contain, none
        // }}
        />
        <Image
          src='/hero-desktop.png'
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="heroDesktop"
        // Importing an image will
        // automatically set the width and height
        src={heroDesktop}
        sizes="50vw"
        // Make the image display full width
        style={{
          width: '50%',
          height: 'auto',
        }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie arcu id odio fringilla vehicula. Phasellus in maximus sapien. Morbi accumsan, urna sit amet mollis vulputate, massa elit efficitur dui, feugiat congue leo tortor et nisi. Phasellus vel est bibendum, hendrerit nisi et, euismod tellus. Duis ultricies gravida orci sit amet dapibus. Quisque aliquet ex quis sapien dictum, vitae cursus quam malesuada. In in cursus nulla. Nam ornare sit amet diam non congue. Sed aliquet facilisis diam vel blandit. Sed tristique pulvinar enim at malesuada. Nulla sem mauris, efficitur vitae ligula at, pretium mattis mi. Phasellus vestibulum dolor sit amet velit rhoncus aliquet.</p>
    </div>
      <div
      style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 500px))',
      }}
    >
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          alt="heroDesktop"
          src={heroDesktop}
          // fill
          sizes="(min-width: 500px) 50vw, 100vw"
          style={{
            objectFit: 'contain', // cover, contain, none
          }}
        />
        <Image
          alt="heroDesktop"
          src={heroDesktop}
          // fill
          sizes="(min-width: 500px) 50vw, 100vw"
          style={{
            objectFit: 'contain', // cover, contain, none
          }}
        />
      </div>
      {/* And more images in the grid... */}
    </div>
    </main>
  );
}
