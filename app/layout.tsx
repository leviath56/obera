import "./globals.css";
import { EditorProvider } from "./contexts/EditorContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full">
        <EditorProvider>
          {children}
        </EditorProvider>
      </body>
    </html>
  );
}

