import { getAllEquipamento } from "@/controllers/EquipamentoController";
import { createOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

// GET (ALL)
export async function GET() {
  try {
    const data = await getAllEquipamento();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// POST (CREATE)
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const novaOrdem = await createOrdemServico(data);
    return NextResponse.json({ success: true, data: novaOrdem });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
