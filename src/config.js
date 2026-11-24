// Prévia do site da Cairos Fitness (Crato - CE).
// Todos os textos e dados do site vêm daqui.
// Campos marcados com // CONFIRMAR precisam ser validados com o dono antes de ir ao ar.
// Listas vazias fazem a seção correspondente desaparecer sozinha.

export const config = {
  nome: 'Cairos Fitness',
  cidade: 'Crato - CE',
  endereco: 'Rua Travessa Mauriti, 444, esquina com Lavras da Mangabeira, Seminário, Crato - CE',
  enderecoCurto: 'Rua Travessa Mauriti, 444, Seminário, Crato - CE',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Cairos+Fitness+Rua+Travessa+Mauriti+444+Crato+CE',

  tituloAba: 'Cairos Fitness | Academia no Crato - CE',
  descricaoSEO:
    'Cairos Fitness, academia no Crato - CE. Musculação, lutas e aulas coletivas. Veja planos, horários e localização e fale pelo WhatsApp.',

  whatsapp: '5588988650614',
  mensagemWhatsapp: 'Olá! Vim pelo site da Cairos Fitness e gostaria de saber mais.',
  mensagemExperimental: 'Olá! Vim pelo site da Cairos Fitness e gostaria de agendar uma aula experimental.',
  mensagemPlano: (plano) => `Olá! Vim pelo site da Cairos Fitness e gostaria de saber mais sobre o plano ${plano}.`,
  mensagemModalidade: (nome) => `Olá! Vim pelo site da Cairos Fitness e gostaria de saber mais sobre ${nome}.`,

  instagram: '', // CONFIRMAR o @ completo (no print aparece cortado como "cairos.fit...")
  instagramLink: '', // CONFIRMAR junto com o @ (ex.: https://instagram.com/o-arroba-completo)

  // Enquanto o <meta name="robots" content="noindex"> estiver no index.html, o rodapé avisa que é uma prévia.
  previa: true, // REMOVER quando o cliente aprovar

  // Logo: o arquivo vai em public/logo-cairos.png (círculo inteiro, sem o anel do Instagram).
  // Enquanto o arquivo não existir, o site mostra o nome em texto.
  logo: { src: '/logo-cairos.png', alt: 'Cairos Fitness' }, // CONFIRMAR: colocar o arquivo da logo e ajustar o dourado ao tom real dela

  // Horários de funcionamento (fuso America/Fortaleza). dias: 0 = domingo ... 6 = sábado.
  horarios: [
    { rotulo: 'Segunda a sexta', curto: 'Seg a sex', dias: [1, 2, 3, 4, 5], abre: '05:00', fecha: '22:00' },
    { rotulo: 'Sábado', curto: 'Sábado', dias: [6], abre: '08:00', fecha: '14:00' },
    { rotulo: 'Domingo', curto: 'Domingo', dias: [0], abre: '08:00', fecha: '11:00' },
  ],

  textos: {
    nav: { planos: 'Planos', modalidades: 'Modalidades', horarios: 'Horários', localizacao: 'Localização' },
    botaoWhatsapp: 'Falar no WhatsApp',
    hero: {
      titulo: 'Musculação, lutas e aulas coletivas no Crato',
      apoio:
        'Planos para quem quer só musculação, só aulas ou os dois. Fale com a recepção pelo WhatsApp e combine sua aula experimental.',
      botaoPrincipal: 'Agendar aula experimental',
      botaoSecundario: 'Ver planos',
      precoPrefixo: 'a partir de',
      painelTitulo: 'Informações rápidas',
    },
    horarios: { titulo: 'Horários de funcionamento', hoje: 'Hoje' },
    planos: {
      titulo: 'Planos',
      apoio: 'Escolha o grupo e veja as opções.',
      botao: 'Quero este plano',
      botaoSemPreco: 'Perguntar sobre este plano',
      selo: 'Em destaque',
      consultar: 'Consultar valor',
    },
    modalidades: {
      titulo: 'Modalidades',
      apoio: 'O que você encontra na Cairos Fitness.',
      acao: 'Perguntar no WhatsApp',
      selo: 'Aula experimental: agende pelo WhatsApp',
      anterior: 'Modalidades anteriores',
      proximo: 'Próximas modalidades',
    },
    chamada: { titulo: 'Agende uma aula experimental', apoio: 'Chame a recepção pelo WhatsApp.', botao: 'Agendar pelo WhatsApp' },
    estrutura: { titulo: 'Estrutura' },
    localizacao: { titulo: 'Localização', botao: 'Como chegar', horarios: 'Horários' },
    faq: { titulo: 'Dúvidas' },
    rodape: { previa: 'Prévia do site, em avaliação' },
  },

  modalidades: [
    { id: 'musculacao', nome: 'Musculação', grupo: 'Musculação' },
    { id: 'danca', nome: 'Dança', grupo: 'Aulas' },
    { id: 'step-jump', nome: 'Step/Jump', grupo: 'Aulas' },
    { id: 'pilates-solo', nome: 'Pilates solo', grupo: 'Aulas' },
    {
      id: 'boxe-masculino',
      nome: 'Boxe masculino',
      grupo: 'Lutas',
      horarios: 'Segunda, quarta e sexta, 20h',
      experimental: true,
    },
    {
      id: 'boxe-feminino',
      nome: 'Boxe feminino',
      grupo: 'Lutas',
      horarios: 'Segunda, quarta e sexta, 19h',
      experimental: true,
    },
    { id: 'muay-thai', nome: 'Muay Thai', grupo: 'Lutas' },
    { id: 'jiu-jitsu-feminino', nome: 'Jiu-Jitsu feminino', grupo: 'Lutas' },
    { id: 'judo', nome: 'Judô', grupo: 'Lutas' },
    { id: 'kids', nome: 'Jiu-Jitsu ou Judô', grupo: 'Kids' },
  ],

  mostrarPreco: true,
  avisoPrecos: 'Valores sujeitos a alteração. Consulte condições na recepção.', // CONFIRMAR valores com o dono (dados de stories antigos)

  // parcelas: quando existir, o preço é mostrado como "Nx de R$ valor".
  planos: [
    { id: 'mensal', grupo: 'Musculação', nome: 'Mensal', preco: 120 },
    { id: 'semestral', grupo: 'Musculação', nome: 'Semestral', preco: 110, parcelas: 6 },
    { id: 'anual', grupo: 'Musculação', nome: 'Anual', preco: 99, parcelas: 12 },
    { id: 'treino-smart', grupo: 'Musculação', nome: 'Treino Smart', preco: 90, observacao: 'Musculação no horário de 11h às 15h' },
    { id: 'musc-3-dias', grupo: 'Musculação', nome: 'Musculação 3 dias na semana', preco: 99, observacao: 'Horário livre' },
    { id: 'semanal', grupo: 'Musculação', nome: 'Musculação semanal (7 dias)', preco: 70 },
    { id: 'quinzenal', grupo: 'Musculação', nome: 'Musculação quinzenal (15 dias)', preco: 85 },

    { id: 'musc-danca', grupo: 'Musculação + aulas', nome: 'Musculação + Dança', preco: 149.9 },
    { id: 'musc-step', grupo: 'Musculação + aulas', nome: 'Musculação + Step', preco: 149.9 },
    { id: 'musc-pilates', grupo: 'Musculação + aulas', nome: 'Musculação + Pilates solo', preco: 188 },
    {
      id: 'musc-artes',
      grupo: 'Musculação + aulas',
      nome: 'Musculação + Artes marciais (Boxe ou Muay Thai)',
      preco: 179.9,
      observacao: 'Por pessoa',
      destaque: true,
    },

    {
      id: 'danca-step',
      grupo: 'Só aulas',
      nome: 'Dança 3 dias por semana ou Step/Jump 2 dias por semana',
      preco: 80,
      observacao: 'Por modalidade',
    },
    { id: 'lutas-adulto', grupo: 'Só aulas', nome: 'Adulto: Muay Thai ou Boxe', preco: 90, observacao: 'Por modalidade' },
    { id: 'lutas-kids', grupo: 'Só aulas', nome: 'Kids: Jiu-Jitsu ou Judô', preco: 90, observacao: 'Por modalidade' },

    { id: 'familia', grupo: 'Família e empresa', nome: 'Família (a partir de 2 pessoas)', preco: 99, observacao: 'Por pessoa' },
    { id: 'empresa', grupo: 'Família e empresa', nome: 'Empresa (a partir de 4 pessoas)', preco: 99, observacao: 'Por pessoa' },
  ],

  // Fotos reais da academia. Só entram as que tiverem src preenchido; sem nenhuma, a seção some.
  // O arquivo fica em public/ (ex.: src: 'fotos/fachada.jpg').
  fotos: [
    { src: '', alt: 'Fachada da Cairos Fitness', legenda: 'Fachada' }, // CONFIRMAR foto real
    { src: '', alt: 'Salão de musculação da Cairos Fitness', legenda: 'Salão de musculação' }, // CONFIRMAR foto real
    { src: '', alt: 'Área de lutas da Cairos Fitness', legenda: 'Área de lutas' }, // CONFIRMAR foto real
    { src: '', alt: 'Vista da janela da Cairos Fitness', legenda: 'Vista da janela' }, // CONFIRMAR foto real
  ],

  // usarHorarios: true monta a resposta a partir de config.horarios.
  faq: [
    {
      pergunta: 'Como agendo uma aula experimental?',
      resposta: 'Chame a recepção pelo WhatsApp e combine o dia e o horário.',
    },
    { pergunta: 'Quais são os horários?', usarHorarios: true },
    {
      pergunta: 'Existe plano família ou empresa?',
      resposta: 'Sim. O plano Família vale a partir de 2 pessoas e o plano Empresa, a partir de 4 pessoas.',
    },
    {
      pergunta: 'O que os valores incluem?',
      resposta: 'Consulte as condições na recepção.',
    },
  ],
}

const wa = (texto) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(texto)}`

export const linkWhatsapp = wa(config.mensagemWhatsapp)
export const linkWhatsappExperimental = wa(config.mensagemExperimental)
export const linkWhatsappPlano = (nome) => wa(config.mensagemPlano(nome))
export const linkWhatsappModalidade = (nome) => wa(config.mensagemModalidade(nome))

export const formatarPreco = (valor) =>
  `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
