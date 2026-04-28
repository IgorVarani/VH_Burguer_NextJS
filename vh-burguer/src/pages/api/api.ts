import axios from "axios";

const apiLocal = "https://localhost:7255/api/"; //? Criar um endereco da API local. Ex: http://localhost:3000/api

const apiRemota = ""; //? Criar um endereco da API remota. Ex: https://api.minhaapp.com

//? Criar um endereco da API dentro do axios.
export const api = axios.create({
    baseURL: apiLocal
})