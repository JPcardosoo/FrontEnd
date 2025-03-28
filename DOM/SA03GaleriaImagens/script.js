// Galeria Imagens -> DOM

let uploadInput = document.getElementById("upload"); // Pegando o input
let addButton = document.getElementById("addImage"); // Pegando o botão de enviar
let galeria = document.getElementById("galeria"); // Pegando a galeria
let carrossel = document.getElementById("carrossel"); // Pegando os espaço da imagem

// Upload das imagens
let imagens = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd",
    "https://images.unsplash.com/photo-1494172961521-33799ddd43a5",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    "https://quatrorodas.abril.com.br/testes/porsche-911-gt3-https://quatrorodas.abril.com.br/noticihttps://www.caranddriver.com/porsche/911-gt3-gt3-rsas/porsche-911-gt3-rs-2024-tem-asa-traseira-gigante-e-custa-r-1-920-000-tem-downforce-maior-que-o-peso-de-um-kwid",
]; // Array -> o endereço das imagens

addButton.addEventListener(
    "click", () => {
        // Pegar URL da Imagem
        let imagemUrl = uploadInput.value.trim();
        if (imagemUrl === "") return;
        imagens.push(imagemUrl);
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    }
);

// AtualizarCarrossel
function atualizarCarrossel() {
    carrossel.innerHTML=""; // Limpa o Carrossel
    imagens.forEach(imagem => {
        let img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%";
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%`; // Ajustando o tamanho do carrossel de acordo com o n° de imagens
    iniciarCarrossel();
}

// Iniciar Carrosssel
function iniciarCarrossel(){
    let index = 0;
    setInterval(() => {
        index = (index +1) % imagens.length;
        carrossel.style.transition = `transform 1s ease-in-out`;
        carrossel.style.transform = `translateX(-${index*(100/imagens.length)}%)`;
    }, 2000);
}

// AtualizarGaleria
function atualizarGaleria() {
    galeria.innerHTML = "";
    imagem.array.forEach((imagem, index) => {
        const card = document.createElement("div"); // Criei a div
        card.classList.add("imagemCard"); // Adicionei uma class
        const img = document.createElement("img");
        img.src = imagem;
        card.appendChild(img); // Adicionar a imagem ao card
        galeria.appendChild(card); // Add card -> galeria
    });
}

atualizarGaleria();
atualizarCarrossel();