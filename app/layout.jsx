export const metadata = {
  title: "Werner Fink | Realitní fotografie",
  description: "Profesionální fotografie nemovitostí, interiérů, bytů, domů a prostorů pro realitní prezentaci.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
