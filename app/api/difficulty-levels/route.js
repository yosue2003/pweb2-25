import prisma from '@/lib/prisma';

export async function GET() {
  const levels = await prisma.difficultyLevel.findMany({
    orderBy: { numericLevel: 'asc' }
  });
  return new Response(JSON.stringify(levels), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, numericLevel, description } = body;

    if (!name || typeof numericLevel !== 'number') {
      return new Response(JSON.stringify({ error: 'name y numericLevel son obligatorios' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const created = await prisma.difficultyLevel.create({
      data: {
        name,
        numericLevel,
        description: description || null
      }
    });

    return new Response(JSON.stringify(created), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error creando nivel de dificultad' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
