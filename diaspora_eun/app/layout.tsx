export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="navigation_bar">{children}</body>
    </html>
  );
}
