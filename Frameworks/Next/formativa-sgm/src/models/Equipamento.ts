import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquipamento extends Document {
  _id: string;
  nome: string;
  tipo: string;
  numeroSerie: string;
  localizacao: string;
  status: string;
}

const EquipamentoSchema: Schema<IEquipamento> = new Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  numeroSerie: { type: String, required: true, unique: true },
  localizacao: { type: String, required: true },
  status: {
    type: String,
    enum: ["ativo", "inativo"],
    default: "Ativo",
  },
});

const Equipamento: Model<IEquipamento> =
  mongoose.models.Equipamento ||
  mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

export default Equipamento;
