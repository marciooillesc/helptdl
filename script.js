let isAdmin = false;
let icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" }
];

const cidadesPR = ["Paranaguá", "Curitiba", "Londrina", "Maringá", "Cascavel", "Ponta Grossa", "Foz do Iguaçu"];

// Login Simulado - Aceita tudo e ativa Admin
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    isAdmin = true; 
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
    const escolaSelect = document.getElementById('select-escola');
    escolaSelect.innerHTML = '<option value="">Selecione a Escola...</option>';
    for(let i=1; i<=3; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.textContent = "Escola Municipal " + i;
        escolaSelect.appendChild(opt);
    }
}

function entrarNaEscola() {
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    
    if(isAdmin) {
        document.getElementById('btn-admin-add').style.display = 'inline-block';
        document.getElementById('titulo-boas-vindas').innerText = "Modo Administrador";
    }
    renderizarCards();
}

function renderizarCards() {
    const container = document.getElementById("icons-container");
    container.innerHTML = "";
    
    icons.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = isAdmin ? "icon-card edit-mode-active" : "icon-card";
        
        card.innerHTML = `
            <span style="font-size: 3.5rem; display:block; margin-bottom:10px;">${item.icon}</span>
            <strong>${item.text}</strong>
            ${isAdmin ? `
                <div class="admin-controls">
                    <button class="btn-edit-small" onclick="editarCard(${index}, event)">✎</button>
                    <button class="btn-del-small" onclick="excluirCard(${index}, event)">✖</button>
                </div>
            ` : ''}
        `;

        card.onclick = () => speakText(item.speak);
        container.appendChild(card);
    });
}

function adicionarCard() {
    const emoji = prompt("Emoji (ex: 🍎):");
    const titulo = prompt("Título do Botão:");
    const fala = prompt("O que deve ser falado?");
    if(emoji && titulo && fala) {
        icons.push({ icon: emoji, text: titulo, speak: fala });
        renderizarCards();
    }
}

function editarCard(index, event) {
    event.stopPropagation();
    const novoTexto = prompt("Novo título:", icons[index].text);
    const novaFala = prompt("Nova fala:", icons[index].speak);
    if(novoTexto && novaFala) {
        icons[index].text = novoTexto;
        icons[index].speak = novaFala;
        renderizarCards();
    }
}

function excluirCard(index, event) {
    event.stopPropagation();
    if(confirm("Excluir este card?")) {
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
