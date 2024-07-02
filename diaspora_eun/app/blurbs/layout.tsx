export default function BlurbsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
