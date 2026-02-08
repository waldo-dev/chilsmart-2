import { MantineProvider } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import FacebookPixel from 'common/components/FacebookPixel';
import 'common/assets/css/flaticon.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import 'common/assets/css/rc-drawer.css';

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter();
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const testEventCode = process.env.NEXT_PUBLIC_FB_TEST_EVENT_CODE;

  return (
    <MantineProvider>
      {pixelId && <FacebookPixel pixelId={pixelId} testEventCode={testEventCode} />}
      <Component {...pageProps} />
    </MantineProvider>
  );
}
