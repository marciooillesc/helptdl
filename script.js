let isAdmin = false;
let icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" },
    { icon: "😴", text: "Dormir", speak: "Estou com sono" },
    { icon: "🤕", text: "Ajuda", speak: "Preciso de ajuda" }
];

const unidadesParanagua = [
    "Escola M. Almirante Tamandaré", "Escola M. Anibal Ribeiro Filho", "Escola M. Castelo Branco",
    "Escola M. Eva Cavani", "Escola M. Leocádia de Oliveira", "CMEI Agostinho Sant'Ana",
    "CMEI Alcebíades de Oliveira", "CMEI Anita de Castro", "CMEI Aracy de Oliveira", "CMEI Cleide Maria Portela"
];

const cidadesPR = [
    "Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", 
    "Alto Paraíso", "Alto Paraná", "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã", "Ampére", 
    "Anahy", "Andirá", "Ângulo", "Antonina", "Antônio Olinto", "Apucarana", "Arapongas", "Arapuã", 
    "Arapoti", "Araruna", "Araucária", "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", 
    "Atalaia", "Balsa Nova", "Bandeirantes", "Barbosa Ferraz", "Barra do Jacaré", "Barracão", 
    "Bela Vista da Caroba", "Bela Vista do Paraíso", "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu", 
    "Boa Ventura de São Roque", "Boa Vista da Aparecida", "Bocaiúva do Sul", "Bom Jesus do Sul", 
    "Bom Sucesso", "Bom Sucesso do Sul", "Borrazópolis", "Braganey", "Brasilândia do Sul", "Cafeara", 
    "Cafelândia", "Cafezal do Sul", "Califórnia", "Cambará", "Cambé", "Cambira", "Campina da Lagoa", 
    "Campina do Simão", "Campina Grande do Sul", "Campo Bonito", "Campo do Tenente", "Campo Largo", 
    "Campo Magro", "Campo Mourão", "Cândido de Abreu", "Candói", "Cantagalo", "Capanema", 
    "Capitão Leônidas Marques", "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas", 
    "Centenário do Sul", "Céu Azul", "Chopinzinho", "Cianorte", "Cidade Gaúcha", "Clevelândia", 
    "Colombo", "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda", "Corbélia", 
    "Cornélio Procópio", "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul", 
    "Cruz Machado", "Cruzeiro do Oeste", "Cruzeiro do Sul", "Cruzmaltina", "Curitiba", "Curiúva", 
    "Diamante do Norte", "Diamante do Oeste", "Diamante D'Oeste", "Dois Vizinhos", "Douradina", 
    "Doutor Camargo", "Doutor Ulysses", "Enéas Marques", "Engenheiro Beltrão", "Entre Rios do Oeste", 
    "Esperança Nova", "Espigão Alto do Iguaçu", "Farol", "Faxinal", "Fazenda Rio Grande", "Fênix", 
    "Fernandes Pinheiro", "Figueira", "Flor da Serra do Sul", "Floraí", "Floresta", "Florestópolis", 
    "Flórida", "Formosa do Oeste", "Foz do Iguaçu", "Foz do Jordão", "Francisco Alves", 
    "Francisco Beltrão", "General Carneiro", "Godoy Moreira", "Guaíra", "Guairaçá", "Guamiranga", 
    "Guapirama", "Guapuã", "Guaraqueçaba", "Guaratuba", "Honório Serpa", "Ibaiti", "Ibiporã", 
    "Icaraíma", "Iguaraçu", "Iguatu", "Ilha do Mel", "Imbaú", "Imbituva", "Inácio Martins", "Inajá", 
    "Indianópolis", "Ipiranga", "Iporã", "Iracema do Oeste", "Irati", "Iretama", "Itaguajé", 
    "Itaipulândia", "Itambaracá", "Itambé", "Itapejara d'Oeste", "Itaperuçu", "Itaúna do Sul", 
    "Ivaí", "Ivaiporã", "Ivaté", "Ivatuba", "Jaboti", "Jacarezinho", "Jaguapitã", "Jaguariaíva", 
    "Jandaia do Sul", "Janiópolis", "Japira", "Japurá", "Jardim Alegre", "Jardim Olinda", 
    "Jataizinho", "Jesuítas", "Joaquim Távora", "Jundiaí do Sul", "Juranda", "Jussara", "Kaloré", 
    "Lapa", "Laranjal", "Laranjeiras do Sul", "Leópolis", "Lidianópolis", "Lindoeste", "Loanda", 
    "Lobato", "Londrina", "Luiziana", "Lunardelli", "Lupionópolis", "Mallet", "Mamborê", 
    "Mandaguaçu", "Mandaguari", "Mandirituba", "Manfrinópolis", "Mangueirinha", "Manoel Ribas", 
    "Marechal Cândido Rondon", "Maria Helena", "Marialva", "Marilândia do Sul", "Marilena", 
    "Mariluz", "Maringá", "Mariópolis", "Maripá", "Marmeleiro", "Marquinho", "Marumbi", 
    "Matelândia", "Matinhos", "Mato Rico", "Mauá da Serra", "Medianeira", "Mercedes", "Mirador", 
    "Miraselva", "Missal", "Moreira Sales", "Morretes", "Munhoz de Melo", "Nossa Senhora das Graças", 
    "Nova Aliança do Ivaí", "Nova América da Colina", "Nova Aurora", "Nova Cantu", "Nova Esperança", 
    "Nova Esperança do Sudoeste", "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia", 
    "Nova Prata do Iguaçu", "Nova Santa Bárbara", "Nova Santa Rosa", "Nova Tebas", "Novo Itacolomi", 
    "Ortigueira", "Ourizona", "Ouro Verde do Oeste", "Paiçandu", "Palmas", "Palmeira", "Palmital", 
    "Palotina", "Paraíso do Norte", "Paranacity", "Paranaguá", "Paranapoema", "Paranavaí", 
    "Pato Bragado", "Pato Branco", "Paula Freitas", "Paulo Frontin", "Peabiru", "Perobal", "Pérola", 
    "Pérola d'Oeste", "Piên", "Pinhais", "Pinhal de São Bento", "Pinhalão", "Pinhão", "Piraí do Sul", 
    "Piraquara", "Pitanga", "Pitangueiras", "Planaltina do Paraná", "Planalto", "Ponta Grossa", 
    "Pontal do Paraná", "Porecatu", "Porto Amazonas", "Porto Barreiro", "Porto Rico", "Porto Vitória", 
    "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", "Primeiro de Maio", "Prudentópolis", 
    "Quarto Centenário", "Quatiguá", "Quatro Barras", "Quatro Pontes", "Quedas do Iguaçu", 
    "Querência do Norte", "Quinta do Sol", "Quitandinha", "Ramilândia", "Rancho Alegre", 
    "Rancho Alegre d'Oeste", "Realeza", "Rebouças", "Renascença", "Reserva", "Reserva do Iguaçu", 
    "Ribeirão Claro", "Ribeirão do Pinhal", "Rio Azul", "Rio Bom", "Rio Bonito do Iguaçu", 
    "Rio Branco do Ivaí", "Rio Branco do Sul", "Rio Negro", "Rolândia", "Roncador", "Rondon", 
    "Rosário do Ivaí", "Sabáudia", "Salgado Filho", "Salto do Itararé", "Salto do Lontra", "Santa Amélia", 
    "Santa Cecília do Pavão", "Santa Cruz de Monte Castelo", "Santa Fé", "Santa Helena", "Santa Inês", 
    "Santa Isabel do Ivaí", "Santa Izabel do Oeste", "Santa Lúcia", "Santa Maria do Oeste", 
    "Santa Mariana", "Santa Mônica", "Santa Tereza do Oeste", "Santa Terezinha de Itaipu", 
    "Santana do Itararé", "Santo Antônio da Platina", "Santo Antônio do Caiuá", 
    "Santo Antônio do Paraíso", "Santo Antônio do Sudoeste", "Santo Inácio", "São Carlos do Ivaí", 
    "São Jerônimo da Serra", "São João", "São João do Caiuá", "São João do Itararé", "São João do Ivaí", 
    "São João do Triunfo", "São Jorge d'Oeste", "São Jorge do Ivaí", "São Jorge do Patrocínio", 
    "São José da Boa Vista", "São José das Palmeiras", "São José dos Pinhais", "São Manoel do Paraná", 
    "São Mateus do Sul", "São Miguel do Iguaçu", "São Pedro do Iguaçu", "São Pedro do Ivaí", 
    "São Pedro do Paraná", "São Sebastião da Amoreira", "São Tomé", "Sapopema", "Sarandi", 
    "Saudade do Iguaçu", "Sengés", "Sertaneja", "Sertanópolis", "Siqueira Campos", "Sulina", 
    "Tamarana", "Tamboara", "Tapejara", "Tapira", "Teixeira Soares", "Telêmaco Borba", "Terra Boa", 
    "Terra Rica", "Terra Roxa", "Tibagi", "Tijucas do Sul", "Toledo", "Tomazina", "Três Barras do Paraná", 
    "Tunas do Paraná", "Tuneiras do Oeste", "Tupãssi", "Turvo", "Ubiratã", "Umuarama", "União da Vitória", 
    "Uniflor", "Uraí", "Ventania", "Vera Cruz do Oeste", "Verê", "Virmond", "Vitorino", "Wenceslau Braz", "Xambrê"
];

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
            opt.value = c.toLowerCase().replace(/ /g, "-");
            opt.textContent = c;
            cidadeSelect.appendChild(opt);
        });
    }
}

function carregarEscolas() {
    const cidade = document.getElementById('select-cidade').value;
    const escolaSelect = document.getElementById('select-escola');
    escolaSelect.innerHTML = '<option value="">Selecione a Unidade...</option>';
    if (cidade === "paranaguá") {
        unidadesParanagua.forEach(unidade => {
            let opt = document.createElement('option');
            opt.value = unidade; opt.textContent = unidade;
            escolaSelect.appendChild(opt);
        });
    } else if (cidade) {
        let opt = document.createElement('option');
        opt.value = "demo"; opt.textContent = "Unidade Padrão";
        escolaSelect.appendChild(opt);
    }
}

function entrarNaEscola() {
    const unidade = document.getElementById('select-escola').value;
    if(!unidade) return alert("Selecione uma unidade!");
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    document.getElementById('escola-tag').innerText = `UNIDADE: ${unidade}`;
    if(isAdmin) document.getElementById('btn-admin-add').style.display = 'inline-block';
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
    const texto = prompt("Título:");
    const fala = prompt("Frase de voz:");
    if(emoji && texto && fala) {
        icons.push({ icon: emoji, text: texto, speak: fala });
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
    if(confirm("Excluir botão?")) {
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
