import "./globals.css";

export const metadata = {
  title: "Helvin Laveda Lisbeth Prasetijo",
  description: "Personal portfolio with dark/light mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}