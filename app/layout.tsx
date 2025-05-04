import "./globals.css";
import { EditorProvider } from "./contexts/EditorContext";
import { Cutive_Mono } from 'next/font/google';

// Initialize the font
const cutiveMono = Cutive_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cutive-mono', // This creates a CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cutiveMono.variable}`}>
      <body className="h-full font-mono"> {/* Default to monospace for textarea */}
        <EditorProvider>
          {children}
        </EditorProvider>
      </body>
    </html>
  );
}