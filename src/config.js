// CONFIRMAR com o dono: autorização de uso da marca NUTRIFITNESS TRAINING CENTER em site e domínio (titular: Nutri Fitness CT Juazeiro LTDA; contratante: Nutrifitness CT Barbalha LTDA)
// Todos os textos e dados do site vêm daqui.
// Campos marcados com [CONFIRMAR] precisam ser validados com o dono antes de ir ao ar.
// Listas vazias fazem a seção correspondente desaparecer sozinha.

export const config = {
  nome: 'Nutrifitness Barbalha',
  subtitulo: 'Training Center',
  tipo: 'Academia',
  cidade: 'Barbalha - CE',
  endereco: 'Rua Pero Coelho, 77, Centro, Barbalha - CE',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Nutrifitness+Barbalha+Rua+Pero+Coelho+77+Barbalha',

  tituloAba: 'Nutrifitness Barbalha | Academia em Barbalha - CE',
  descricaoSEO:
    'Nutrifitness Barbalha, academia em Barbalha - CE. Veja modalidades, planos e localização e fale pelo WhatsApp.',

  whatsapp: '5588997532718',
  mensagemWhatsapp: 'Olá! Vim pelo site da Nutrifitness e gostaria de saber mais sobre os planos.',
  mensagemPlano: (plano) =>
    `Olá! Vim pelo site da Nutrifitness e gostaria de saber mais sobre o plano ${plano}.`,
  mensagemVisita: 'Olá! Vim pelo site da Nutrifitness e gostaria de agendar uma visita.',

  instagram: 'nutrifitnessbarbalha',
  instagramLink: 'https://instagram.com/nutrifitnessbarbalha',

  // Enquanto o <meta name="robots" content="noindex"> estiver no index.html, o rodapé avisa que é uma prévia.
  previa: true, // REMOVER quando o cliente aprovar

  horarios: [], // [CONFIRMAR] ex.: [{ dias: 'Segunda a sexta', horas: '00h às 00h' }]. Oculto se vazio.

  modalidades: [
    // [CONFIRMAR] modalidades e frases com o dono
    { id: 'musculacao', titulo: 'Musculação', texto: 'Treino com pesos e máquinas.' },
    { id: 'funcional', titulo: 'Funcional', texto: 'Exercícios de movimento do corpo todo.' },
    { id: 'avaliacao', titulo: 'Avaliação física', texto: 'Avaliação do seu físico.' },
  ],

  parcerias: ['Wellhub', 'TotalPass'], // [CONFIRMAR]

  // Valores vieram de stories antigos.
  mostrarPreco: false, // [CONFIRMAR os valores com o dono antes de ligar]

  planos: [
    { id: 'mensal', nome: 'Mensal', preco: 130, descricao: 'Acesso à academia durante o mês.' },
    { id: '3x-semana', nome: '3x na semana', preco: 100, descricao: 'Treino 3 vezes por semana.' },
    {
      id: 'mensal-up',
      nome: 'Mensal Up',
      preco: 150,
      descricao: 'Acesso às unidades participantes e direito de trazer um amigo por semana para treinar.', // [CONFIRMAR] com o dono quais unidades
      destaque: true,
    },
    {
      id: 'estudante',
      nome: 'Estudante',
      preco: 110,
      descricao: 'Disponível mensal ou semestral. Apresentar carteirinha, declaração ou comprovante de matrícula.',
    },
    {
      id: 'familia',
      nome: 'Família',
      preco: 110,
      descricao: 'Para 3 ou mais pessoas da mesma família.', // o valor (por pessoa) fica em preco
    },
  ],

  // Pergunta que ajuda a escolher o plano. Cada opção aponta para o id de um plano.
  perguntaPlano: 'Como você quer treinar?',
  escolhaPlano: [
    { texto: 'O mês inteiro', plano: 'mensal' },
    { texto: '3 vezes por semana', plano: '3x-semana' },
    { texto: 'Com um amigo e em unidades participantes', plano: 'mensal-up' },
    { texto: 'Sou estudante', plano: 'estudante' },
    { texto: 'Com minha família (3 ou mais)', plano: 'familia' },
  ],

  // Foto de fundo do hero. Com src vazio, o hero mostra a anilha desenhada.
  // O arquivo fica em public/ (ex.: src: 'fotos/hero.jpg').
  hero: {
    imagem: { src: '', alt: '' }, // [CONFIRMAR] foto real da academia
  },

  // Fotos da seção Estrutura. Só entram as que tiverem src preenchido; sem nenhuma, a seção some.
  // O arquivo fica em public/ (ex.: src: 'fotos/fachada.jpg').
  fotos: [
    { src: '', alt: 'Fachada da Nutrifitness Barbalha', legenda: 'Fachada' }, // [CONFIRMAR]
    { src: '', alt: 'Salão de musculação da Nutrifitness Barbalha', legenda: 'Salão de musculação' }, // [CONFIRMAR]
    { src: '', alt: 'Área de treino funcional da Nutrifitness Barbalha', legenda: 'Área funcional' }, // [CONFIRMAR]
  ],

  faq: [
    {
      pergunta: 'Como funciona a matrícula?',
      resposta: '', // [CONFIRMAR] documentos, taxa e forma de pagamento. Oculta se vazia.
    },
    {
      pergunta: 'Existe plano estudante?',
      resposta:
        'Sim. O plano Estudante pode ser mensal ou semestral, e é preciso apresentar carteirinha, declaração ou comprovante de matrícula.',
    },
    {
      pergunta: 'Existe plano família?',
      resposta: 'Sim. O plano Família vale a partir de 3 pessoas da mesma família.',
    },
    {
      pergunta: 'Como agendo uma visita?',
      resposta: 'Chame a academia pelo WhatsApp e combine o melhor momento para conhecer o espaço.',
    },
  ],
}

const wa = (texto) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(texto)}`

export const linkWhatsapp = wa(config.mensagemWhatsapp)
export const linkWhatsappPlano = (nome) => wa(config.mensagemPlano(nome))
export const linkWhatsappVisita = wa(config.mensagemVisita)

export const formatarPreco = (valor) =>
  `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
