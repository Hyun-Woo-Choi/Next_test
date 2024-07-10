import Head from 'next/head';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import NavigationBar from './NavigationBar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="navigation_bar">
        <AppRouterCacheProvider>
          <NavigationBar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
