export type DishId = 'aperitivos' | 'entradas' | 'massada-robalo' | 'pao-de-lo' | 'queijo-serra';

export interface DinnerDish {
  id: DishId;
  slug: string;
  name: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  ingredients: string[];
  sensoryProfile: {
    salinity: string;
    fat: string;
    intensity: string;
    texture: string;
    sweetness?: string;
    finish: string;
  };
  gastronomicReading: string;
  pairingLogic: string[];
  image: string;
  dinnerOrder: number;
}

export const dinnerDishes: Record<DishId, DinnerDish> = {
  'aperitivos': {
    id: 'aperitivos',
    slug: 'aperitivos',
    name: 'Canapé de Tártaro de Atum c/ ovas e Canapé de Camarão',
    type: 'Aperitivos',
    shortDescription: 'Início elegante com delicadeza e notas marítimas.',
    longDescription: 'Momentos de sofisticação com atum fresco coroado com ovas e o sabor nobre do camarão. Uma harmonia desenhada para preparar o palato para o longo percurso, onde a leveza e as texturas macias são dominantes.',
    ingredients: ['atum fresco', 'ovas', 'camarão', 'massa crocante'],
    sensoryProfile: {
      salinity: 'média-alta',
      fat: 'baixa',
      intensity: 'média',
      texture: 'macia e suave',
      finish: 'fresco e limpo'
    },
    gastronomicReading: 'Abertura perfeita, com toques marítimos e crocância que pedem grande frescura e mineralidade no copo.',
    pairingLogic: ['limpeza de palato', 'acidez vibrante', 'frescura atlântica'],
    image: '/pratos/1canapes.png',
    dinnerOrder: 1
  },
  'entradas': {
    id: 'entradas',
    slug: 'entradas',
    name: 'Salada de Polvo, Croquetes de Alheira e Sapateira Recheada',
    type: 'Entradas',
    shortDescription: 'Trilogia tradicional rica em texturas e fortes identidades costeiras.',
    longDescription: 'Um prato que funde as notas fumadas e intensas da alheira com a frescura cítrica da salada de polvo e a untuosidade rica da sapateira. Três autênticos ícones reinam numa harmonia perfeita de texturas.',
    ingredients: ['polvo', 'alheira', 'sapateira', 'temperos tradicionais'],
    sensoryProfile: {
      salinity: 'média-alta',
      fat: 'média-alta',
      intensity: 'alta',
      texture: 'complexa e rústica',
      finish: 'longo e reconfortante'
    },
    gastronomicReading: 'A complexidade destas três identidades distintas pede um vinho branco encorpado, sério e com volume para segurar os sabores rústicos.',
    pairingLogic: ['vinho com textura aromática', 'frescura em contraste', 'acidez para equilibrar a untuosidade'],
    image: '/pratos/2entradas.png',
    dinnerOrder: 2
  },
  'massada-robalo': {
    id: 'massada-robalo',
    slug: 'massada-robalo',
    name: 'Massada de Robalo com Gambas',
    type: 'Prato Principal',
    shortDescription: 'Conforto autêntico com matriz piscatória duriense e atlântica.',
    longDescription: 'A alma da costa nacional trazida à mesa num prato denso e caldoso. Um prato generoso em sabor onde a suculência do robalo e a intensidade da gamba se envolvem a preceito nas massas enriquecidas pelo mar.',
    ingredients: ['robalo fresco', 'gambas', 'massa', 'caldo rico de marisco e peixe', 'coentros'],
    sensoryProfile: {
      salinity: 'alta',
      fat: 'média',
      intensity: 'alta',
      texture: 'caldosa e envolvente',
      finish: 'persistente marítimo'
    },
    gastronomicReading: 'Um prato de panela, rico em substância, que pela sua versatilidade oceânica serve perfeitamente de tela tanto para brancos estruturados como para tintos cheios e vibrantes sem taninos ásperos.',
    pairingLogic: ['suporta grande estrutura branca e tinta', 'o caldo compensa o corpo dos vinhos', 'mineralidade marcante'],
    image: '/pratos/3principal.png',
    dinnerOrder: 3
  },
  'pao-de-lo': {
    id: 'pao-de-lo',
    slug: 'pao-de-lo',
    name: 'Pão de Ló de Ovar',
    type: 'Sobremesa',
    shortDescription: 'Clássico doce húmido e reconfortante.',
    longDescription: 'Leve, fofo e ligeiramente húmido, a matriz tradicional deste doce conventual exalta os sentidos e harmoniza elegantemente o Porto maduro e os seus frutos secos evoluídos.',
    ingredients: ['gemas', 'açúcar', 'farinha'],
    sensoryProfile: {
      sweetness: 'alta',
      salinity: 'baixa',
      fat: 'baixa-média',
      intensity: 'média',
      texture: 'húmida e suave',
      finish: 'doce e leve'
    },
    gastronomicReading: 'Doçura amaciada e envolvida pela presença do longo, denso e complexo Tawny de meia idade.',
    pairingLogic: ['harmoniza por complementaridade de idade', 'não ataca os sabores oxidados', 'contrasta brilhantemente com a acidez viva de um Porto velho'],
    image: '/pratos/4paodelo.png',
    dinnerOrder: 4
  },
  'queijo-serra': {
    id: 'queijo-serra',
    slug: 'queijo-serra',
    name: 'Queijo da Serra',
    type: 'Queijo',
    shortDescription: 'Momento glorioso final que une as gorduras e sal do queijo às texturas doces do Vintage.',
    longDescription: 'Um fecho icónico que cruza o perfil gorduroso, cremoso e muito salino de um Queijo da Serra curado, desenhado para explodir harmoniosamente com as taças raras de Portos Vintage concentrados.',
    ingredients: ['queijo da serra velho'],
    sensoryProfile: {
      salinity: 'alta',
      fat: 'alta',
      intensity: 'alta',
      texture: 'cremosa / pastosa',
      finish: 'intenso'
    },
    gastronomicReading: 'A química da perfeição na mesa ibérica: ácido extremo e sal profundo encontram as frutas doces expansivas do Porto em plena juventude temporal.',
    pairingLogic: ['sal equilibra doce do Porto', 'gordura arredonda o tanino', 'contraste final perfeito'],
    image: '/pratos/5queijo.png',
    dinnerOrder: 5
  }
};
