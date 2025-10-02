import {
  deleteOrdemServico,
  getOneOrdemServico,
  updateOrdemServico,
} from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro {
  id: string;
}

// PATCH
export async function PATCH(
  req: NextRequest,
  { params }: { params: Parametro }
) {
  try {
    const { id } = params;
    const data = await req.json();
    const ordemAtualizada = await updateOrdemServico(id, data);
    if (!ordemAtualizada) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    return NextResponse.json({ success: true, data: ordemAtualizada });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// GET (ONE)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const data = await getOneOrdemServico(id);
    if (!data) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteOrdemServico(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
