// Funções do Controller (CRUID)

import Tarefa, { Itarefa } from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";
import { connect } from "http2";

// read -> pegar as tarefas do banco e retornar em uma lista(vetor)
export const readAllTarefas = async (): Promise<Itarefa[]> => {
    await connectMongo(); // Estabelece a conexão
    const tarefas = await Tarefa.find({}); // Pega todas as tarefas da coleção
    return tarefas; // Retorna o vetor de tarefas
}

// create -> cria uma tarefa na coleção 
export async function createTarefa(data: Partial<Itarefa>) { // Function normal
    await connectMongo(); 
    const tarefa = await Tarefa.create(data);
    return tarefa; // Retorna a tarefa com o ID
}

// Update => atualiza uma tarefa já existe
export async function updateTarefa(id: string, data: Partial<Itarefa>):Promise<Itarefa | null> {
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data);
    return tarefa; // Retorna a tarefa atualizada ou null se não encontrar a tarefa
}

// Delete => delete uma tarefa pelo ID
export const deleteTarefa = async (id: string):Promise<boolean> => {
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id: id});
    return resultado.deletedCount>0; // Se for >0 retrian true, caso==0 false
}