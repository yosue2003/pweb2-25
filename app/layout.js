export const metadata = {
  title: "Exam System - Niveles",
  description: "Sistema base de exámenes con niveles de dificultad y rangos de edad"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
