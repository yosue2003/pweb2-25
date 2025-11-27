export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Sistema de Exámenes (Backend primer hito)</h1>
      <p>
        Este proyecto Next.js incluye la configuración inicial para trabajar con:
      </p>
      <ul>
        <li>Niveles de dificultad (DifficultyLevel)</li>
        <li>Rangos de edad (AgeRange)</li>
      </ul>
      <p>
        Usa las rutas API para gestionar los recursos:
      </p>
      <ul>
        <li><code>/api/difficulty-levels</code></li>
        <li><code>/api/age-ranges</code></li>
      </ul>
      <p>
        Primero configura la base de datos PostgreSQL en <code>.env</code> y ejecuta Prisma.
      </p>
    </main>
  );
}
