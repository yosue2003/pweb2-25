import prisma from '@/lib/prisma';

export async function GET(_request, { params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return new Response(JSON.stringify({ error: 'ID inválido' }), { status: 400 });
  }

  const level = await prisma.difficultyLevel.findUnique({ where: { id } });
  if (!level) {
    return new Response(JSON.stringify({ error: 'No encontrado' }), { status: 404 });
  }

  return new Response(JSON.stringify(level), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function PUT(request, { params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return new Response(JSON.stringify({ error: 'ID inválido' }), { status: 400 });
  }

  try {
    const body = await request.json();
    const { name, numericLevel, description } = body;

    const updated = await prisma.difficultyLevel.update({
      where: { id },
      data: {
        ...(name !== undefined ? { name } : {}),
        ...(numericLevel !== undefined ? { numericLevel } : {}),
        ...(description !== undefined ? { description } : {})
      }
    });

    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error actualizando nivel de dificultad' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE(_request, { params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return new Response(JSON.stringify({ error: 'ID inválido' }), { status: 400 });
  }

  try {
    await prisma.difficultyLevel.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error eliminando nivel de dificultad' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
