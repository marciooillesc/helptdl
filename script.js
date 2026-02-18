let isAdmin = false;
let icons = [
    { icon: "💧", text: "Água", speak: "Eu quero beber água", avatar: "🥤🏃‍♂️", isImage: false },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro", avatar: "🧻🏃‍♂️", isImage: false },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer", avatar: "😋🥣", isImage: false },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar", avatar: "⚽🧒", isImage: false }
];

const BIBLIOTECA_EXTENDIDA = ["😀","😊","😍","🤔","😴","🤯","🤒","😎","🥳","😭","👍","👋","🙌","👏","🙏","❤️","💧","🍽️","🥤","🍎","🍌","🍕","🥪","🍪","⚽","🎨","📚","🧩","🏠","🏫","🚗","🚌","🚲","☀️","🌧️","✅","❓"];

const unidadesParanagua = ["Escola M. Eva Cavani", "Escola M. Almirante Tamandaré", "Escola M. Castelo Branco", "CMEI Anita de Castro"];
const unidadesMatinhos = ["Escola M. Wallace Thadeu", "Escola M. Francisco dos Santos", "CMEI Pequeno Príncipe"];

const cidadesPR_Lista = ["Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", "Alto Paraíso", "Alto Paraná", "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã", "Ampére", "Anahy", "Andirá", "Ângulo", "Antonina", "Antônio Olinto", "Apucarana", "Arapongas", "Arapuã", "Arapoti", "Araruna", "Araucária", "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", "Atalaia", "Balsa Nova", "Bandeirantes", "Barbosa Ferraz", "Barra do Jacaré", "Barracão", "Bela Vista da Caroba", "Bela Vista do Paraíso", "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu", "Boa Ventura de São Roque", "Boa Vista da Aparecida", "Bocaiúva do Sul", "Bom Jesus do Sul", "Bom Sucesso", "Bom Sucesso do Sul", "Borrazópolis", "Braganey", "Brasilândia do Sul", "Cafeara", "Cafelândia", "Cafezal do Sul", "Califórnia", "Cambará", "Cambé", "Cambira", "Campina da Lagoa", "Campina do Simão", "Campina Grande do Sul", "Campo Bonito", "Campo do Tenente", "Campo Largo", "Campo Magro", "Campo Mourão", "Cândido de Abreu", "Candói", "Cantagalo", "Capanema", "Capitão Leônidas Marques", "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas", "Centenário do Sul", "Céu Azul", "Chopinzinho", "Cianorte", "Cidade Gaúcha", "Clevelândia", "Colombo", "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda", "Corbélia", "Cornélio Procópio", "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul", "Cruz Machado", "Cruzeiro do Oeste", "Cruzeiro do Sul", "Cruzmaltina", "Curitiba", "Curiúva", "Diamante do Norte", "Diamante do Oeste", "Diamante D'Oeste", "Dois Vizinhos", "Douradina", "Doutor Camargo", "Doutor Ulysses", "Enéas Marques", "Engenheiro Beltrão", "Entre Rios do Oeste", "Esperança Nova", "Espigão Alto do Iguaçu", "Farol", "Faxinal", "Fazenda Rio Grande", "Fênix", "Fernandes Pinheiro", "Figueira", "Flor da Serra do Sul", "Floraí", "Floresta", "Florestópolis", "Flórida", "Formosa do Oeste", "Foz do Iguaçu", "Foz do Jordão", "Francisco Alves", "Francisco Beltrão", "General Carneiro", "Godoy Moreira", "Guaíra", "Guairaçá", "Guamiranga", "Guapirama", "Guapuã", "Guaraqueçaba", "Guaratuba", "Honório Serpa", "Ibaiti", "Ibiporã", "Icaraíma", "Iguaraçu", "Iguatu", "Ilha do Mel", "Imbaú", "Imbituva", "Inácio Martins", "Inajá", "Indianópolis", "Ipiranga", "Iporã", "Iracema do Oeste", "Irati", "Iretama", "Itaguajé", "Itaipulândia", "Itambaracá", "Itambé", "Itapejara d'Oeste", "Itaperuçu", "Itaúna do Sul", "Ivaí", "Ivaiporã", "Ivaté", "Ivatuba", "Jaboti", "Jacarezinho", "Jaguapitã", "Jaguariaíva", "Jandaia do Sul", "Janiópolis", "Japira", "Japurá", "Jardim Alegre", "Jardim Olinda", "Jataizinho", "Jesuítas", "Joaquim Távora", "Jundiaí do Sul", "Juranda", "Jussara", "Kaloré", "Lapa", "Laranjal", "Laranjeiras do Sul", "Leópolis", "Lidianópolis", "Lindoeste", "Loanda", "Lobato", "Londrina", "Luiziana", "Lunardelli", "Lupionópolis", "Mallet", "Mamborê", "Mandaguaçu", "Mandaguari", "Mandirituba", "Manfrinópolis", "Mangueirinha", "Manoel Ribas", "Marechal Cândido Rondon", "Maria Helena", "Marialva", "Marilândia do Sul", "Marilena", "Mariluz", "Maringá", "Mariópolis", "Maripá", "Marmeleiro", "Marquinho", "Marumbi", "Matelândia", "Matinhos", "Mato Rico", "Mauá da Serra", "Medianeira", "Mercedes", "Mirador", "Miraselva", "Missal", "Moreira Sales", "Morretes", "Munhoz de Melo", "Nossa Senhora das Graças", "Nova Aliança do Ivaí", "Nova América da Colina", "Nova Aurora", "Nova Cantu", "Nova Esperança", "Nova Esperança do Sudoeste", "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia", "Nova Prata do Iguaçu", "Nova Santa Bárbara", "Nova Santa Rosa", "Nova Tebas", "Novo Itacolomi", "Ortigueira", "Ourizona", "Ouro Verde do Oeste", "Paiçandu", "Palmas", "Palmeira", "Palmital", "Palotina", "Paraíso do Norte", "Paranacity", "Paranaguá", "Paranapoema", "Paranavaí", "Pato Bragado", "Pato Branco", "Paula Freitas", "Paulo Frontin", "Peabiru", "Perobal", "Pérola", "Pérola d'Oeste", "Piên", "Pinhais", "Pinhal de São Bento", "Pinhalão", "Pinhão", "Piraí do Sul", "Piraquara", "Pitanga", "Pitangueiras", "Planaltina do Paraná", "Planalto", "Ponta Grossa", "Pontal do Paraná", "Porecatu", "Porto Amazonas", "Porto Barreiro", "Porto Rico", "Porto Vitória", "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", "Primeiro de Maio", "Prudentópolis", "Quarto Centenário", "Quatiguá", "Quatro Barras", "Quatro Pontes", "Quedas do Iguaçu", "Querência do Norte", "Quinta do Sol", "Quitandinha", "Ramilândia", "Rancho Alegre", "Rancho Alegre d'Oeste", "Realeza", "Rebouças", "Renascença", "Reserva", "Reserva do Iguaçu", "Ribeirão Claro", "Ribeirão do Pinhal", "Rio Azul", "Rio Bom", "Rio Bonito do Iguaçu", "Rio Branco do Ivaí", "Rio Branco do Sul", "Rio Negro", "Rolândia", "Roncador", "Rondon", "Rosário do Ivaí", "Sabáudia", "Salgado Filho", "Salto do Itararé", "Salto do Lontra", "Santa Amélia", "Santa Cecília do Pavão", "Santa Cruz de Monte Castelo", "Santa Fé", "Santa Helena", "Santa Inês", "Santa Isabel do Ivaí", "Santa Izabel do Oeste", "Santa Lúcia", "Santa Maria do Oeste", "Santa Mariana", "Santa Mônica", "Santa Tereza do Oeste", "Santa Terezinha de Itaipu", "Santana do Itararé", "Santo Antônio da Platina", "Santo Antônio do Caiuá", "Santo Antônio do Paraíso", "Santo Antônio do Sudoeste", "Santo Inácio", "São Carlos do Ivaí", "São Jerônimo da Serra", "São João", "São João do Caiuá", "São João do Itararé", "São João do Ivaí", "São João do Triunfo", "São Jorge d'Oeste", "São Jorge do Ivaí", "São Jorge do Patrocínio", "São José da Boa Vista", "São José das Palmeiras", "São José dos Pinhais", "São Manoel do Paraná", "São Mateus do Sul", "São Miguel do Iguaçu", "São Pedro do Iguaçu", "São Pedro do Ivaí", "São Pedro do Paraná", "São Sebastião da Amoreira", "São Tomé", "Sapopema", "Sarandi", "Saudade do Iguaçu", "Sengés", "Sertaneja", "Sertanópolis", "Siqueira Campos", "Sulina", "Tamarana", "Tamboara", "Tapejara", "Tapira", "Teixeira Soares", "Telêmaco Borba", "Terra Boa", "Terra Rica", "Terra Roxa", "Tibagi", "Tijucas do Sul", "Toledo", "Tomazina", "Três Barras do Paraná", "Tunas do Paraná", "Tuneiras do Oeste", "Tupãssi", "Turvo", "Ubiratã", "Umuarama", "União da Vitória", "Uniflor", "Uraí", "Ventania", "Vera Cruz do Oeste", "Verê", "Virmond", "Vitorino", "Wenceslau Braz", "Xambrê"
];

// Login
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    isAdmin = true;
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'flex';
};

// Autocompletar Seleção de Unidade
function verificarEstado() {
    const estado = document.getElementById('input-estado-busca').value;
    const cidInput = document.getElementById('input-cidade-busca');
    const datalist = document.getElementById('lista-cidades');
    if(estado === "Paraná") {
        cidInput.disabled = false;
        datalist.innerHTML = "";
        cidadesPR_Lista.forEach(c => {
            let o = document.createElement('option');
            o.value = c; datalist.appendChild(o);
        });
    } else {
        cidInput.disabled = true;
        cidInput.value = "";
    }
}

function verificarCidade() {
    const cidade = document.getElementById('input-cidade-busca').value;
    const escSel = document.getElementById('select-escola-final');
    const btn = document.getElementById('btn-entrar-painel');
    escSel.innerHTML = '<option value="">Selecione a Unidade...</option>';
    if(cidade === "Paranaguá") {
        escSel.disabled = false;
        unidadesParanagua.forEach(e => { let o = document.createElement('option'); o.value = e; o.textContent = e; escSel.appendChild(o); });
    } else if(cidade === "Matinhos") {
        escSel.disabled = false;
        unidadesMatinhos.forEach(e => { let o = document.createElement('option'); o.value = e; o.textContent = e; escSel.appendChild(o); });
    } else if(cidadesPR_Lista.includes(cidade)) {
        escSel.disabled = false;
        let o = document.createElement('option'); o.value = "demo"; o.textContent = "Unidade Padrão " + cidade; escSel.appendChild(o);
    }
    btn.disabled = false;
}

function entrarNaEscola() {
    const u = document.getElementById('select-escola-final').value;
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
        let visual = item.isImage ? `<img src="${item.icon}" class="card-img">` : `<span style="font-size: 3rem;">${item.icon}</span>`;
        card.innerHTML = `<button class="btn-del" onclick="excluirCard(${index}, event)">✖</button>${visual}<br><strong>${item.text}</strong>`;
        card.onclick = () => clicarAcao(item);
        container.appendChild(card);
    });
}

function clicarAcao(item) {
    const avatar = document.getElementById('avatar-display');
    const balao = document.getElementById('balao-texto');
    avatar.innerHTML = item.isImage ? `<img src="${item.icon}" style="width:100px; height:100px; border-radius:50%; object-fit:cover;">` : (item.avatar || item.icon);
    balao.innerText = item.speak;
    avatar.classList.add('avatar-animar');
    setTimeout(() => avatar.classList.remove('avatar-animar'), 500);
    speakText(item.speak);
}

function speakText(text) {
    window.speechSynthesis.cancel();
    const s = new SpeechSynthesisUtterance(text);
    s.lang = "pt-BR";
    window.speechSynthesis.speak(s);
}

// Funções do Modal de Personalização
function abrirModalPersonalizar() {
    // Limpa campos para evitar "cachorro" ou buscas antigas
    document.getElementById('busca-foto-query').value = "";
    document.getElementById('url-manual-input').value = "";
    document.getElementById('input-titulo-botao').value = "";
    document.getElementById('input-fala-botao').value = "";
    document.getElementById('resultados-foto-grid').innerHTML = "";
    document.getElementById('hidden-icon-val').value = "";

    const grid = document.getElementById('biblioteca-emojis-grid');
    grid.innerHTML = "";
    BIBLIOTECA_EXTENDIDA.forEach(e => {
        let d = document.createElement('div');
        d.innerText = e; d.style.cursor="pointer"; d.style.fontSize="1.5rem"; d.style.textAlign="center";
        d.onclick = () => {
            document.getElementById('hidden-icon-val').value = e;
            document.getElementById('hidden-is-img-bool').value = "false";
            grid.querySelectorAll('div').forEach(x => x.style.background="transparent");
            d.style.background = "#dbeafe";
        };
        grid.appendChild(d);
    });
    document.getElementById('custom-modal').style.display = 'flex';
}

function mudarAba(aba) {
    document.getElementById('aba-emoji').style.display = aba === 'emoji' ? 'block' : 'none';
    document.getElementById('aba-internet').style.display = aba === 'internet' ? 'block' : 'none';
}

function executarBuscaFoto() {
    const q = document.getElementById('busca-foto-query').value;
    const res = document.getElementById('resultados-foto-grid');
    if(!q) return alert("Digite o que procura!");
    res.innerHTML = "Buscando...";
    for(let i=1; i<=6; i++) {
        let img = document.createElement('img');
        img.src = `https://loremflickr.com/200/200/${q}?lock=${i}`;
        img.className = "img-res";
        img.onclick = () => {
            document.getElementById('hidden-icon-val').value = img.src;
            document.getElementById('hidden-is-img-bool').value = "true";
            res.querySelectorAll('img').forEach(x => x.style.borderColor="transparent");
            img.style.borderColor = "var(--primary)";
        };
        res.appendChild(img);
    }
}

function confirmarNovoBotao() {
    const urlManual = document.getElementById('url-manual-input').value;
    let icon = document.getElementById('hidden-icon-val').value;
    let isImg = document.getElementById('hidden-is-img-bool').value === "true";
    
    if(urlManual.trim() !== "") { icon = urlManual; isImg = true; }
    
    const text = document.getElementById('input-titulo-botao').value;
    const speak = document.getElementById('input-fala-botao').value;
    
    if(icon && text && speak) {
        icons.push({ icon, text, speak, isImage: isImg, avatar: icon });
        renderizarCards(); fecharModalPersonalizar();
    } else { alert("Escolha uma imagem ou ícone e preencha os campos!"); }
}

function fecharModalPersonalizar() { document.getElementById('custom-modal').style.display = 'none'; }
function excluirCard(idx, e) { e.stopPropagation(); icons.splice(idx, 1); renderizarCards(); }
