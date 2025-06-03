// app/layout.js
export const metadata = {
  title: "Minha Página",
  description: "Descrição da página",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
