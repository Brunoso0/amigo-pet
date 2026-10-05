// Todo o texto e os dados do site moram aqui.
// Itens com `provisorio: true` são placeholders: troque pelo dado real e apague a marca.

export const whatsapp = {
  numero: "5574991103333",
  exibicao: "(74) 99110-3333",
  mensagem: "Olá! Quero marcar um horário na AmigoPet.",
};

export const linkWhatsapp = `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(whatsapp.mensagem)}`;

export const endereco = {
  rua: "R. Cônego Hugo, 5",
  cidade: "Senhor do Bonfim — BA",
  mapa:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("R. Cônego Hugo, 5, Senhor do Bonfim - BA"),
};

export const horarios = {
  provisorio: true,
  linhas: [
    ["Segunda a sexta", "00h00 – 00h00"],
    ["Sábado", "00h00 – 00h00"],
    ["Domingo", "00h00 – 00h00"],
  ],
};

export const equipe = [
  { nome: "Nome do(a) veterinário(a)", registro: "CRMV-BA 0000", provisorio: true },
  { nome: "Nome do(a) veterinário(a)", registro: "CRMV-BA 0000", provisorio: true },
];

export const instagram = { rotulo: "@instagram-da-clinica", url: "#", provisorio: true };

// Fotos: enquanto o valor for null, entra a ilustração em traço.
// Para trocar, ponha o arquivo em /public/fotos e escreva o caminho aqui (ex.: "/fotos/fachada.jpg").
export const imagens = {
  cuidado: null,
  fachada: null,
  equipe: null,
  banho: null,
  racoes: null,
  brinquedos: null,
  remedios: null,
  cosmeticos: null,
};

export const etapas = [
  {
    nome: "Consulta & vacinas",
    texto:
      "Tudo começa numa conversa. Seu pet é examinado com calma, você entende o que está acontecendo, e a carteira de vacinas fica em dia.",
  },
  {
    nome: "Exames",
    texto:
      "Quando a consulta pede uma resposta mais precisa, os exames entram em cena — sem você precisar procurar outro lugar.",
  },
  {
    nome: "Ultrassom",
    texto: "Ver por dentro, sem dor e sem susto. O ultrassom mostra o que o toque não alcança.",
  },
  {
    nome: "Cirurgia",
    texto:
      "Quando a cirurgia é o caminho, ela acontece aqui: em Senhor do Bonfim, perto de casa e perto de você.",
  },
  {
    nome: "Internação",
    texto: "Se ele precisar ficar, fica sob cuidado — até estar pronto para voltar.",
  },
  {
    nome: "Alta",
    texto: "O melhor momento: a guia de volta na sua mão e o caminho de casa pela frente.",
  },
];

export const produtos = [
  { imagem: "banho", nome: "Banho e tosa", texto: "Sai cheiroso, de pelo aparado e rabo abanando." },
  { imagem: "racoes", nome: "Rações", texto: "Para cada fase da vida, do filhote ao idoso." },
  { imagem: "brinquedos", nome: "Brinquedos", texto: "Porque gastar energia também é saúde." },
  { imagem: "remedios", nome: "Remédios", texto: "O que foi receitado na consulta, você já leva daqui." },
  { imagem: "cosmeticos", nome: "Cosméticos", texto: "Xampus e cuidados para a pele e o pelo." },
];
