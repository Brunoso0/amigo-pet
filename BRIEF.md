# BRIEF — Clínica AmigoPet

Régua: nível Awwwards. Ousado, desde que continue premium e legível.
Stack: React + Vite + Tailwind CSS.

## As 7 respostas

### 1. O que é isso e pra quem é?
Clínica AmigoPet — R. Cônego Hugo, 5, Senhor do Bonfim (BA).
Trabalham com consultas, cirurgias, ultrassons, internação, vacinas, exames,
banho e tosa; vendem rações, brinquedos, remédios, cosméticos.
**Não tem plantão 24h.** O foco é a clínica; o petshop é complemento.

Quem visita (suposição, a confirmar): dono de cão ou gato de Senhor do Bonfim
e região, no celular, querendo marcar consulta ou tirar dúvida pelo WhatsApp.

### 2. Vibe
Acolhedor, calmo, moderno, alegre e cheio de vida.
Referências de fora: a ternura de um filme do Studio Ghibli; a capa de uma
revista Kinfolk.

### 3. Caminho do visitante
Chegada → o cuidado → a clínica por dentro → o petshop → quem cuida →
fechamento. Botão de marcar pelo WhatsApp presente em todo o site, não só no
final. O final é o agendamento via WhatsApp.

### 4. O que ele precisa acreditar
**"Não preciso sair de Senhor do Bonfim para ter veterinária de verdade."**

### 5. Energia e pico
Pico: o percurso do pet pela clínica (opção A).

### 6. Movimento-assinatura
O fio (opção A): uma linha única desenhada pela rolagem.

### 7. Materiais
- WhatsApp: (74) 99110-3333
- Cores da marca: preto e vermelho
- Logotipo: não enviado → nome composto em tipografia
- Fotos e vídeos: o cliente vai conseguir depois. Por enquanto, ilustrações em
  traço fino no lugar de cada foto + lista de prompts/enquadramentos na entrega
- Horário, equipe, Instagram e demais links: placeholders visivelmente
  marcados, todos num arquivo só (`src/conteudo.js`), para o cliente trocar
- Números e depoimentos: nenhum real disponível → a página vive sem

## Referências do Dribbble (o que entra e o que fica de fora)

| Referência | O que aproveito | O que deixo |
|---|---|---|
| Pet Care & Pet Shop (Ramzan riaz) | Abertura que termina em curva; animal "debruçado" na borda da seção; rabiscos em traço (novelo, osso, linha solta); menu em pílula flutuante | Paleta saturada de várias cores, banners de promoção, grade de produtos com preço, planos, avaliações |
| Veterinary Landing — Doccure | Calor terroso com credibilidade clínica; foto dentro de forma orgânica; borda de seção ondulada; foto circular com arcos e selo de texto girando; miniaturas dentro do título | Depoimentos e estatísticas (não temos reais), FAQ genérico |
| Pawfect Care (extra) | Fundo creme + traços vermelhos soltos (é quase a paleta da marca); título de display com peso; composição circular de fotos | Tipografia infantil, vitrine de categorias de loja |

O ponto em comum dos três — rabiscos de linha soltos pela página — vira uma
coisa só e com função: **o fio vermelho**.

## Direção visual

- **Paleta** — fundo creme quente `#F3ECE0` · superfície `#FBF7F0` ·
  tinta preto quente `#17110F` · tinta suave `#6E625B` · **acento vermelho
  `#D62B1F`** (um só: o fio, o botão do WhatsApp, o pico). O preto da marca
  vira o fundo do ato da clínica.
- **Tipografia** — display: Fraunces (serifa editorial macia, itálico com
  personalidade) · texto: Instrument Sans. Escala 15 / 18 / 24 / 36 / 56 / 96 / 152.
- **Espaçamento** — 8 / 16 / 24 / 40 / 64 / 104 / 168.

## Jornada em 6 cenas

| # | Cena | Vê | Sente | Passa a acreditar | Energia | Efeito |
|---|---|---|---|---|---|---|
| 1 | Chegada | Capa de revista: "AmigoPet" enorme, uma frase, um animal em traço debruçado numa borda curva. O fio nasce como a guia da coleira | Calma, curiosidade | É uma clínica veterinária, aqui em Senhor do Bonfim | Calma | Título que se monta palavra a palavra |
| 2 | O cuidado | Texto editorial ancorado à esquerda, foto circular com arcos e selo girando | Acolhimento | Aqui o bicho é tratado com tempo e atenção | Média | Revelações + paralaxe leve |
| 3 | **A clínica por dentro (PICO)** | A página escurece para o preto. Tela presa; a cada trecho de rolagem uma parada: consulta → exames → ultrassom → cirurgia → internação → alta. O fio vira batimento, onda do ultrassom, ponto de sutura | Respeito, segurança | Tudo acontece aqui — não preciso sair da cidade | **Intensa** | Cena fixa longa (6 telas), fundo que viaja |
| 4 | O petshop | Volta o creme. O fio se solta num novelo; banho e tosa, rações, brinquedos, remédios e cosméticos deslizam de lado | Leveza, alegria | E o dia a dia do meu pet também se resolve aqui | Leve | Trilho horizontal |
| 5 | Quem cuida | A casa e a equipe, tela cheia, pouca coisa | Intimidade | Tem gente de verdade por trás | Calma | Profundidade (ponteiro + paralaxe) |
| 6 | Fechamento | O fio desenha o caminho até a porta da R. Cônego Hugo, 5 e termina no botão. Endereço, horário, "Marcar pelo WhatsApp" gigante | Decisão | Vou marcar agora | Firme | Crescer + fio fechando |

**Curva de energia:** calma → média → INTENSA → leve → calma → firme.
**Pico (um só):** cena 3, a maior rolagem e o único ato em fundo preto.
**Movimento-assinatura — o fio:** um único traço vermelho em SVG atravessa a
página inteira e se desenha conforme a rolagem: guia da coleira → batimento →
onda do ultrassom → sutura → novelo → caminho até a porta → botão do WhatsApp.
Com movimento reduzido, o fio aparece inteiro e parado.

**WhatsApp sempre à mão:** botão fixo acompanhando a rolagem (some só quando o
botão grande do fechamento está na tela, para não duplicar).

## Notas técnicas
- Motor `sites-incriveis.js/.css` copiado sem edição para `public/`; carregado
  depois que o React monta a página, para os atributos `data-fx-*` existirem.
- O fio e as 6 paradas do pico são código da própria página (componentes React).
- Sem plantão 24h: nenhuma menção a emergência a qualquer hora.
