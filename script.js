let isAdmin = false;
let icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" }
];

const cidadesPR = ["Paranaguá", "Curitiba", "Londrina", "Cascavel"];

const escolasParanagua = [
    "Escola M. Almirante Tamandaré", "Escola M. Anibal Ribeiro Filho", 
    "Escola M. Castelo Branco", "Escola M. Eva Cavani", 
    "Escola M. Leocádia de Oliveira", "CMEI Agostinho Sant'Ana", 
    "CMEI Alcebíades de Oliveira", "CMEI Anita de Castro", 
    "CMEI Aracy de Oliveira", "CMEI Cleide Maria Portela"
];

document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    isAdmin = true; // Libera modo edição
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'flex';
};

function carregarCidades() {
    const estado = document.getElementById('select-estado').value;
    const cidadeSelect = document.getElementById('select-cidade');
    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade...</option>';
    if (estado === "PR") {
        cidadesPR.forEach(c => {
            let opt = document.createElement('option');
            opt.value = c.toLowerCase();
            opt.textContent = c;
            cidadeSelect.appendChild(opt);
        });
    }
}

function carregarEscolas() {
    const cidade = document.getElementById('select-cidade').value;
    const escolaSelect = document.getElementById('select-escola');
    escolaSelect.innerHTML = '<option value="">Selecione a Unidade...</option>';
    
    if (cidade === "paranagua") {
        escolasParanagua.forEach(e => {
            let opt = document.createElement('option');
            opt.value = e;
            opt.textContent = e;
            escolaSelect.appendChild(opt);
        });
    } else if (cidade) {
        let opt = document.createElement('option');
        opt.value = "demo";
        opt.textContent = "Unidade Padrão";
        escolaSelect.appendChild(opt);
    }
}

function entrarNaEscola() {
    const unidade = document.getElementById('select-escola').value;
    if(!unidade) return alert("Selecione a unidade escolar!");

    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    document.getElementById('escola-tag').innerText = `UNIDADE: ${unidade}`;
    
    if(isAdmin) {
        document.getElementById('btn-admin-add').style.display = 'inline-block';
        document.getElementById('titulo-painel').innerText = "Painel do Professor - Modo Edição";
    }
    renderizarCards();
}

function renderizarCards() {
    const container = document.getElementById("icons-container");
    container.innerHTML = "";
    icons.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "icon-card";
        card.innerHTML = `
            <div class="admin-actions">
                <button class="btn-edit" onclick="editarCard(${index}, event)">✎</button>
                <button class="btn-del" onclick="excluirCard(${index}, event)">✖</button>
            </div>
            <span style="font-size: 3.5rem; display:block; margin-bottom:10px;">${item.icon}</span>
            <strong>${item.text}</strong>
        `;
        card.onclick = () => speakText(item.speak);
        container.appendChild(card);
    });
}

function adicionarCard() {
    const emoji = prompt("Emoji:");
    const titulo = prompt("Título do Botão:");
    const fala = prompt("Frase que o sistema vai falar:");
    if(emoji && titulo && fala) {
        icons.push({ icon: emoji, text: titulo, speak: fala });
        renderizarCards();
    }
}

function editarCard(index, event) {
    event.stopPropagation();
    const novoT = prompt("Novo título:", icons[index].text);
    const novaF = prompt("Nova frase:", icons[index].speak);
    if(novoT && novaF) {
        icons[index].text = novoT;
        icons[index].speak = novaF;
        renderizarCards();
    }
}

function excluirCard(index, event) {
    event.stopPropagation();
    if(confirm("Deseja apagar este botão?")) {
        icons.splice(index, 1);
        renderizarCards();
    }
}

function speakText(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
}
