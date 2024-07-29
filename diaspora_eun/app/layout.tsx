import Head from 'next/head';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Rubik, DM_Sans } from 'next/font/google';
import NavigationBar from './NavigationBar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="navigation_bar">
        <AppRouterCacheProvider>
          <NavigationBar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
