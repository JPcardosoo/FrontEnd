// Criar as funções GET e POST para a api de Tarefas
import connectMongo from "@/services/mongodb";
import Todo from "@/models/Todo";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongo();
        const tarefas = await Todo.find({});
        return NextResponse.json({sucess: true, data: tarefas});
    } catch (error) {
        return NextResponse.json({sucess: false})
    }
}

export async function POST(params) {
    try {
        await connectMongo();
        const data = await req.json();
        const tarefa = await Todo.create(data);
        return NextResponse.json({success: true, data: tarefa});
    } catch (error) {
        return NextResponse.json({sucess: false});
    }
}