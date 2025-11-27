# Exam System Next.js (Base)

Proyecto base en **Next.js (App Router)** con **Prisma + PostgreSQL** para gestionar:

- Niveles de dificultad (`DifficultyLevel`)
- Rangos de edad (`AgeRange`)

No incluye frontend complejo; solo una página de inicio mínima y las rutas de API listas
para usarse como backend.

## Requisitos

- Node.js 18+
- PostgreSQL
- pnpm / npm / yarn
- Prisma CLI (`npx prisma`)

## Configuración

1. Copia `.env.example` a `.env` y configura tu conexión a PostgreSQL:

   ```env
   DATABASE_URL="postgresql://usuario:password@localhost:5432/exam_system?schema=public"
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Genera el cliente de Prisma y aplica las migraciones:

   ```bash
   npx prisma migrate dev --name init
   ```

4. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Rutas API

### Niveles de dificultad

- `GET /api/difficulty-levels` → lista todos
- `POST /api/difficulty-levels` → crea uno nuevo

  Body JSON:

  ```json
  {
    "name": "Fácil",
    "numericLevel": 1,
    "description": "Preguntas básicas"
  }
  ```

- `GET /api/difficulty-levels/:id`
- `PUT /api/difficulty-levels/:id`
- `DELETE /api/difficulty-levels/:id`

### Rangos de edad

- `GET /api/age-ranges`
- `POST /api/age-ranges`

  Body JSON:

  ```json
  {
    "name": "Primaria baja",
    "minAge": 6,
    "maxAge": 8,
    "description": "Para estudiantes de 6 a 8 años"
  }
  ```

- `GET /api/age-ranges/:id`
- `PUT /api/age-ranges/:id`
- `DELETE /api/age-ranges/:id`

## Notas

- Este proyecto está pensado como base para tu sistema de exámenes.
- Puedes agregar modelos como `Question`, `Exam`, `User`, etc., usando el mismo patrón.
