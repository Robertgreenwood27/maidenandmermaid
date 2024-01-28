// _document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import RedBanner from '@/components/RedBanner'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head />
      <body>
        <RedBanner/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
