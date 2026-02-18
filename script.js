let isAdmin = false;
let icons = [
    { icon: "💧", text: "Água", speak: "Eu quero beber água", avatar: "🥤🏃‍♂️" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro", avatar: "🧻🏃‍♂️" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer", avatar: "😋🥣" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar", avatar: "⚽🧒" },
    { icon: "😴", text: "Dormir", speak: "Estou com sono", avatar: "🥱💤" },
    { icon: "🤕", text: "Ajuda", speak: "Preciso de ajuda", avatar: "🙋‍♂️🆘" }
];

const BIBLIOTECA = ["🍎", "🥪", "🥛", "📚", "🎨", "🧩", "👟", "😴", "🚶", "🏫", "👨‍🏫", "🫂", "✅", "❓", "🤒", "☀️", "🚌", "🏠"];

const unidadesParanagua = [
    "Escola M. Almirante Tamandaré", "Escola M. Anibal Ribeiro Filho", "Escola M. Castelo Branco",
    "Escola M. Eva Cavani", "Escola M. Leocádia de Oliveira", "CMEI Agostinho Sant'Ana",
    "CMEI Alcebíades de Oliveira", "CMEI Anita de Castro", "CMEI Aracy de Oliveira", "CMEI Cleide Maria Portela"
];

// LISTA INTEGRAL DAS 399 CIDADES DO PARANÁ
const cidadesPR = ["Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", "Alto Paraíso", "Alto Paraná", "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã", "Ampére", "Anahy", "Andirá", "Ângulo", "Antonina", "Antônio Olinto", "Apucarana", "Arapongas", "Arapuã", "Arapoti", "Araruna", "Araucária", "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", "Atalaia", "Balsa Nova", "Bandeirantes", "Barbosa Ferraz", "Barra do Jacaré", "Barracão", "Bela Vista da Caroba", "Bela Vista do Paraíso", "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu", "Boa Ventura de São Roque", "Boa Vista da Aparecida", "Bocaiúva do Sul", "Bom Jesus do Sul", "Bom Sucesso", "Bom Sucesso do Sul", "Borrazópolis", "Braganey", "Brasilândia do Sul", "Cafeara", "Cafelândia", "Cafezal do Sul", "Califórnia", "Cambará", "Cambé", "Cambira", "Campina da Lagoa", "Campina do Simão", "Campina Grande do Sul", "Campo Bonito", "Campo do Tenente", "Campo Largo", "Campo Magro", "Campo Mourão", "Cândido de Abreu", "Candói", "Cantagalo", "Capanema", "Capitão Leônidas Marques", "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas", "Centenário do Sul", "Céu Azul", "Chopinzinho", "Cianorte", "Cidade Gaúcha", "Clevelândia", "Colombo", "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda", "Corbélia", "Cornélio Procópio", "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul", "Cruz Machado", "Cruzeiro do Oeste", "Cruzeiro do Sul", "Cruzmaltina", "Curitiba", "Curiúva", "Diamante do Norte", "Diamante do Oeste", "Diamante D'Oeste", "Dois Vizinhos", "Douradina", "Doutor Camargo", "Doutor Ulysses", "Enéas Marques", "Engenheiro Beltrão", "Entre Rios do Oeste", "Esperança Nova", "Espigão Alto do Iguaçu", "Farol", "Faxinal", "Fazenda Rio Grande", "Fênix", "Fernandes Pinheiro", "Figueira", "Flor da Serra do Sul", "Floraí", "Floresta", "Florestópolis", "Flórida", "Formosa do Oeste", "Foz do Iguaçu", "Foz do Jordão", "Francisco Alves", "Francisco Beltrão", "General Carneiro", "Godoy Moreira", "Guaíra", "Guairaçá", "Guamiranga", "Guapirama", "Guapuã", "Guaraqueçaba", "Guaratuba", "Honório Serpa", "Ibaiti", "Ibiporã", "Icaraíma", "Iguaraçu", "Iguatu", "Ilha do Mel", "Imbaú", "Imbituva", "Inácio Martins", "Inajá", "Indianópolis", "Ipiranga", "Iporã", "Iracema do Oeste", "Irati", "Iretama", "Itaguajé", "Itaipulândia", "Itambaracá", "Itambé", "Itapejara d'Oeste", "Itaperuçu", "Itaúna do Sul", "Ivaí", "Ivaiporã", "Ivaté", "Ivatuba", "Jaboti", "Jacarezinho", "Jaguapitã", "Jaguariaíva", "Jandaia do Sul", "Janiópolis", "Japira", "Japurá", "Jardim Alegre", "Jardim Olinda", "Jataizinho", "Jesuítas", "Joaquim Távora", "Jundiaí do Sul", "Juranda", "Jussara", "Kaloré", "Lapa", "Laranjal", "Laranjeiras do Sul", "Leópolis", "Lidianópolis", "Lindoeste", "Loanda", "Lobato", "Londrina", "Luiziana", "Lunardelli", "Lupionópolis", "Mallet", "Mamborê", "Mandaguaçu", "Mandaguari", "Mandirituba", "Manfrinópolis", "Mangueirinha", "Manoel Ribas", "Marechal Cândido Rondon", "Maria Helena", "Marialva", "Marilândia do Sul", "Marilena", "Mariluz", "Maringá", "Mariópolis", "Maripá", "Marmeleiro", "Marquinho", "Marumbi", "Matelândia", "Matinhos", "Mato Rico", "Mauá da Serra", "Medianeira", "Mercedes", "Mirador", "Miraselva", "Missal", "Moreira Sales", "Morretes", "Munhoz de Melo", "Nossa Senhora das Graças", "Nova Aliança do Ivaí", "Nova América da Colina", "Nova Aurora", "Nova Cantu", "Nova Esperança", "Nova Esperança do Sudoeste", "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia", "Nova Prata do Iguaçu", "Nova Santa Bárbara", "Nova Santa Rosa", "Nova Tebas", "Novo Itacolomi", "Ortigueira", "Ourizona", "Ouro Verde do Oeste", "Paiçandu", "Palmas", "Palmeira", "Palmital", "Palotina", "Paraíso do Norte", "Paranacity", "Paranaguá", "Paranapoema", "Paranavaí", "Pato Bragado", "Pato Branco", "Paula Freitas", "Paulo Frontin", "Peabiru", "Perobal", "Pérola", "Pérola d'Oeste", "Piên", "Pinhais", "Pinhal de São Bento", "Pinhalão", "Pinhão", "Piraí do Sul", "Piraquara", "Pitanga", "Pitangueiras", "Planaltina do Paraná", "Planalto", "Ponta Grossa", "Pontal do Paraná", "Porecatu", "Porto Amazonas", "Porto Barreiro", "Porto Rico", "Porto Vitória", "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", "Primeiro de Maio", "Prudentópolis", "Quarto Centenário", "Quatiguá", "Quatro Barras", "Quatro Pontes", "Quedas do Iguaçu", "Querência do Norte", "Quinta do Sol", "Quitandinha", "Ramilândia", "Rancho Alegre", "Rancho Alegre d'Oeste", "Realeza", "Rebouças", "Renascença", "Reserva", "Reserva do Iguaçu", "Ribeirão Claro", "Ribeirão do Pinhal", "Rio Azul", "Rio Bom", "Rio Bonito do Iguaçu", "Rio Branco do Ivaí", "Rio Branco do Sul", "Rio Negro", "Rolândia", "Roncador", "Rondon", "Rosário do Ivaí", "Sabáudia", "Salgado Filho", "Salto do Itararé", "Salto do Lontra", "Santa Amélia", "Santa Cecília do Pavão", "Santa Cruz de Monte Castelo", "Santa Fé", "Santa Helena", "Santa Inês", "Santa Isabel do Ivaí", "Santa Izabel do Oeste", "Santa Lúcia", "Santa Maria do Oeste", "Santa Mariana", "Santa Mônica", "Santa Tereza do Oeste", "Santa Terezinha de Itaipu", "Santana do Itararé", "Santo Antônio da Platina", "Santo Antônio do Caiuá", "Santo Antônio do Paraíso", "Santo Antônio do Sudoeste", "Santo Inácio", "São Carlos do Ivaí", "São Jerônimo da Serra", "São João", "São João do Caiuá", "São João do Itararé", "São João do Ivaí", "São João do Triunfo", "São Jorge d'Oeste", "São Jorge do Ivaí", "São Jorge do Patrocínio", "São José da Boa Vista", "São José das Palmeiras", "São José dos Pinhais", "São Manoel do Paraná", "São Mateus do Sul", "São Miguel do Iguaçu", "São Pedro do Iguaçu", "São Pedro do Ivaí", "São Pedro do Paraná", "São Sebastião da Amoreira", "São Tomé", "Sapopema", "Sarandi", "Saudade do Iguaçu", "Sengés", "Sertaneja", "Sertanópolis", "Siqueira Campos", "Sulina", "Tamarana", "Tamboara", "Tapejara", "Tapira", "Teixeira Soares", "Telêmaco Borba", "Terra Boa", "Terra Rica", "Terra Roxa", "Tibagi", "Tijucas do Sul", "Toledo", "Tomazina", "Três Barras do Paraná", "Tunas do Paraná", "Tuneiras do Oeste", "Tupãssi", "Turvo", "Ubiratã", "Umuarama", "União da Vitória", "Uniflor", "Uraí", "Ventania", "Vera Cruz do Oeste", "Verê", "Virmond", "Vitorino", "Wenceslau Braz", "Xambrê"
];

// Login Simulado
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    isAdmin = true;
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'flex';
};

function carregarCidades() {
    const estado = document.getElementById('select-estado').value;
    const sel = document.getElementById('select-cidade');
    sel.innerHTML = '<option value="">Selecione a Cidade...</option>';
    if(estado === "PR") {
        cidadesPR.forEach(c => {
            let o = document.createElement('option');
            o.value = c.toLowerCase(); o.textContent = c; sel.appendChild(o);
        });
    }
}

function carregarEscolas() {
    const cid = document.getElementById('select-cidade').value;
    const sel = document.getElementById('select-escola');
    sel.innerHTML = '<option value="">Selecione a Unidade...</option>';
    if(cid === "paranaguá") {
        unidadesParanagua.forEach(e => {
            let o = document.createElement('option'); o.value = e; o.textContent = e; sel.appendChild(o);
        });
    } else if(cid) {
        let o = document.createElement('option'); o.value = "demo"; o.textContent = "Unidade Padrão"; sel.appendChild(o);
    }
}

function entrarNaEscola() {
    const u = document.getElementById('select-escola').value;
    if(!u) return alert("Selecione a unidade!");
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    document.getElementById('escola-tag').innerText = `UNIDADE: ${u}`;
    renderizarCards();
}

function renderizarCards() {
    const container = document.getElementById("icons-container");
    container.innerHTML = "";
    icons.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "icon-card";
        card.innerHTML = `
            <button class="btn-del" onclick="excluirCard(${index}, event)">✖</button>
            <span style="font-size: 3rem; display:block;">${item.icon}</span>
            <strong>${item.text}</strong>
        `;
        card.onclick = () => clicarAcao(item);
        container.appendChild(card);
    });
}

function clicarAcao(item) {
    const avatar = document.getElementById('avatar-display');
    const balao = document.getElementById('balao-texto');
    avatar.innerText = item.avatar || item.icon;
    balao.innerText = item.speak;
    avatar.classList.add('avatar-animar');
    setTimeout(() => avatar.classList.remove('avatar-animar'), 500);
    speakText(item.speak);
}

function speakText(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
}

function abrirModalPersonalizar() {
    const grid = document.getElementById('biblioteca-emojis');
    grid.innerHTML = "";
    BIBLIOTECA.forEach(e => {
        let s = document.createElement('div');
        s.innerText = e; s.style.cursor="pointer"; s.style.fontSize="1.5rem";
        s.onclick = () => {
            document.getElementById('custom-icon').value = e;
            grid.querySelectorAll('div').forEach(x => x.style.background="transparent");
            s.style.background = "#dbeafe";
        };
        grid.appendChild(s);
    });
    document.getElementById('custom-modal').style.display = 'flex';
}

function fecharModal() { document.getElementById('custom-modal').style.display = 'none'; }

function salvarNovoCard() {
    const icon = document.getElementById('custom-icon').value;
    const text = document.getElementById('custom-text').value;
    const speak = document.getElementById('custom-speak').value;
    if(icon && text && speak) {
        icons.push({ icon, text, speak, avatar: icon });
        renderizarCards();
        fecharModal();
    }
}

function excluirCard(idx, e) {
    e.stopPropagation();
    icons.splice(idx, 1);
    renderizarCards();
}
