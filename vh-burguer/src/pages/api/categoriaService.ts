import { api } from "./api";

export async function cadastrarCategoria(nome: string) {
    try
    {
        await api.post("Categoria", {nome})
        console.log("Categoria cadastrada com sucesso!")
    }
    catch(error: any)
    {
        throw new Error("Erro ao cadastrar categoria.");
    }
}