import prisma from '@/lib/prisma';

export async function GET() {
  const ranges = await prisma.ageRange.findMany({
    orderBy: { minAge: 'asc' }
  });
  return new Response(JSON.stringify(ranges), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, minAge, maxAge, description } = body;

    if (!name || typeof minAge !== 'number' || typeof maxAge !== 'number') {
      return new Response(JSON.stringify({ error: 'name, minAge y maxAge son obligatorios' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const created = await prisma.ageRange.create({
      data: {
        name,
        minAge,
        maxAge,
        description: description || null
      }
    });

    return new Response(JSON.stringify(created), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error creando rango de edad' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
