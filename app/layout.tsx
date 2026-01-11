import "./globals.css";

export const metadata = {
  title: "RAG Chatbot",
  description: "RAG Chatbot Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
