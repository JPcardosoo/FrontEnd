import { createEquipamento, getAllEquipamento } from "@/controllers/EquipamentoController";
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
    const novoEquipamento = await createEquipamento(data);
    return NextResponse.json({ success: true, data: novoEquipamento });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
