// Escrevendo o mongoDB de forma segura e reutilizavel (com armazenamento em cache)

// Convert String para URL (URI)
const MongoUri = process.env.DATABASE_URL;

// Verificar se existe um endereço URL
if(!MongoUri) { // Verificando a nulidade da variavel
    throw new Error("Defina o DATABASE_URL no .env.local");
}