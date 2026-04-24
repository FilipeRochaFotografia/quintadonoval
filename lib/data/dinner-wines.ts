export type WineId = 'cedro-noval-branco-2023' | 'cedro-reserva-branco-2023' | 'quinta-reserva-branco-2023' | 'quinta-reserva-tinto-2020' | 'vinhas-passadouro-2021' | 'tawny-50-anos' | 'port-vintage-2003' | 'nacional-vintage-2003';

export interface DinnerWine {
  id: WineId;
  slug: string;
  name: string;
  producer: string;
  region: string;
  type: string;
  grapes: string[];
  shortDescription: string;
  longDescription: string;
  style: string[];
  tastingNotes: string[];
  sensoryProfile: {
    acidity: string;
    body: string;
    intensity: string;
    sweetness?: string;
    tannin?: string;
    texture?: string;
    finish: string;
  };
  serviceTemperature: string;
  alcohol: string;
  decanting: string;
  recommendedGlass: string;
  image: string;
  dinnerOrder: number;
}

export const dinnerWines: Record<WineId, DinnerWine> = {
  'cedro-noval-branco-2023': {
    id: 'cedro-noval-branco-2023',
    slug: 'cedro-noval-branco-2023',
    name: 'Cedro do Noval Branco 2023',
    producer: 'Quinta do Noval',
    region: 'Douro',
    type: 'Branco',
    grapes: ['30% Gouveio', '25% Viosinho', '15% Arinto', '10% Rabigato', '10% Códega de larinho', '10% Fernão Pires'],
    shortDescription: 'Expressão autêntica do Douro, marcada por frescura vibrante e delicado toque de carvalho.',
    longDescription: 'Produzido a partir de uvas selecionadas das vinhas mais altas e dos socalcos do Douro, este vinho resulta de uma vindima equilibrada em 2023. As diferentes castas são desengaçadas, ligeiramente esmagadas e fermentadas sobretudo em cubas de aço inoxidável, com cerca de 20% do lote a fermentar em barricas de carvalho francês, trazendo maior estrutura ao conjunto. A ausência de fermentação maloláctica preserva a sua frescura e vivacidade, num perfil onde as notas de pêssego e citrinos se prolongam com equilíbrio e precisão.',
    style: ['Fresco', 'Equilibrado', 'Cativante', 'Complexo'],
    tastingNotes: ['Citrinos frescos', 'Pêssego maduro', 'Toque de carvalho especiado', 'Apontamento de toranja'],
    sensoryProfile: {
      acidity: 'Vibrante e fresca',
      body: 'Generoso com profundidade',
      intensity: 'Aroma fresco e cativante',
      texture: 'Viva e bem estruturada',
      finish: 'Longo e saboroso'
    },
    serviceTemperature: '9°C-11°C',
    alcohol: '13',
    decanting: 'Não',
    recommendedGlass: 'Copo de vinho branco clássico',
    image: '/vinhos/cedro-noval-branco-2023.png',
    dinnerOrder: 1
  },
  'cedro-reserva-branco-2023': {
    id: 'cedro-reserva-branco-2023',
    slug: 'cedro-reserva-branco-2023',
    name: 'Cedro do Noval Reserva Branco 2023',
    producer: 'Quinta do Noval',
    region: 'Douro',
    type: 'Branco',
    grapes: ['Viosinho', 'Gouveio'],
    shortDescription: 'Fresco, sedoso e rico, refletindo em pleno as propriedades do terroir xistoso de altitude.',
    longDescription: 'O Cedro Reserva resulta de uma seleção rigorosa de uvas provenientes de terroirs de altitude. Num ano marcado por uma primavera quente, o vinho foi desengaçado e parcialmente fermentado em barricas de carvalho francês (35%), com bâtonnage regular durante cinco meses de estágio. A ausência de fermentação maloláctica, conjugada com a pureza da Viosinho e o corpo da Gouveio, preserva a frescura e a definição do conjunto, revelando uma integração muito bem medida do carvalho e uma bela expressão mineral.',
    style: ['Sedoso', 'Mineral', 'Fresco', 'Estruturado'],
    tastingNotes: ['Citrinos', 'Pêssego maduro', 'Erva-dittrichia', 'Nuances florais e mineralidade'],
    sensoryProfile: {
      acidity: 'Fina e refrescante',
      body: 'Refinado e estruturado',
      intensity: 'Aroma intenso',
      texture: 'Textura sedosa',
      finish: 'Sabor prolongado'
    },
    serviceTemperature: '9°C-11°C',
    alcohol: '13,5',
    decanting: 'Não',
    recommendedGlass: 'Copo de vinho branco amplo',
    image: '/vinhos/cedro-reserva-branco-2023.png',
    dinnerOrder: 2
  },
  'quinta-reserva-branco-2023': {
    id: 'quinta-reserva-branco-2023',
    slug: 'quinta-reserva-branco-2023',
    name: 'Quinta do Noval Reserva Branco 2023',
    producer: 'Quinta do Noval',
    region: 'Douro',
    type: 'Branco',
    grapes: ['65% Viosinho', '35% Gouveio das vinhas da Quinta do Noval'],
    shortDescription: 'Vinho estruturado pela finesse floral, reflexo autêntico dos melhores lotes brancos da nossa propriedade.',
    longDescription: 'Elaborado a partir das castas mais nobres da própria Quinta, este vinho fermenta e estagia integralmente em barricas de carvalho francês, 55% novas, após maceração. O estágio decorre ao longo de seis meses, com bâtonnage mais intensa no início, sem fermentação maloláctica. O vinho revela um excelente equilíbrio entre a concentração de fruta madura e a frescura natural das encostas altas, deixando antever um potencial de guarda promissor.',
    style: ['Finesse autêntica', 'Opulento', 'Fresco', 'Longo'],
    tastingNotes: ['Flores campestres', 'Ervas aromáticas', 'Nuances de citrinos', 'Madeira envolvida no conjunto'],
    sensoryProfile: {
      acidity: 'Tensão viva (5.6g/l)',
      body: 'Suavidade sedosa',
      intensity: 'Complexidade de terroir',
      texture: 'Textura macia',
      finish: 'Impressionantemente longo'
    },
    serviceTemperature: '9°C-11°C',
    alcohol: '13',
    decanting: 'Não',
    recommendedGlass: 'Copo de branco amplo / Borgonha',
    image: '/vinhos/quinta-reserva-branco-2023.png',
    dinnerOrder: 3
  },
  'quinta-reserva-tinto-2020': {
    id: 'quinta-reserva-tinto-2020',
    slug: 'quinta-reserva-tinto-2020',
    name: 'Quinta do Noval Reserva Tinto 2020',
    producer: 'Quinta do Noval',
    region: 'Douro',
    type: 'Tinto',
    grapes: ['60% Touriga Nacional', '40% Field Blend de vinhas da Quinta'],
    shortDescription: 'Concentração intensa e delicada alicerçada pela mestria da Touriga Nacional em consórcio com vinhas velhas.',
    longDescription: 'Nascido de uma vindima exigente, num ano quente e seco, este tinto exprime bem a concentração e a profundidade que os lagares sabem revelar. Fermentou em cubas de aço inoxidável durante oito dias, concluindo depois a fermentação maloláctica em barricas de carvalho francês, onde estagiou durante doze meses, 40% novas. No estilo fiel da Quinta do Noval, é um vinho que seduz desde jovem pelo volume e pelo requinte, mas que revela igualmente a estrutura e a consistência necessárias para uma excelente evolução ao longo do tempo.',
    style: ['Seco', 'Intenso', 'Delicado', 'Exuberante'],
    tastingNotes: ['Fruta vermelha', 'Nuances florais da Touriga', 'Notas de sedosidade madura', 'Taninos marcantes'],
    sensoryProfile: {
      acidity: 'Equilibrada (5.7g/l)',
      body: 'Volume notável',
      intensity: 'Fruta muito intensa',
      tannin: 'Fina estrutura tânica',
      finish: 'Longo e sumarento frutado'
    },
    serviceTemperature: '16°C-18°C',
    alcohol: '15',
    decanting: 'Recomendada',
    recommendedGlass: 'Copo Bordeaux de boca larga',
    image: '/vinhos/quinta-reserva-tinto-2020.png',
    dinnerOrder: 4
  },
  'vinhas-passadouro-2021': {
    id: 'vinhas-passadouro-2021',
    slug: 'vinhas-passadouro-2021',
    name: 'Quinta do Noval Vinhas do Passadouro',
    producer: 'Quinta do Noval',
    region: 'Douro',
    type: 'Tinto',
    grapes: ['Mistura de vinhas do terroir Passadouro'],
    shortDescription: 'Tinto de excepção da série Terroir, oriundo da margem esquerda do rio Pinhão.',
    longDescription: 'A Terroir Series convida à descoberta de terroirs específicos, reconhecidos pelo seu carácter excecional. O Vinhas do Passadouro nasce num terroir singular, na margem esquerda do rio Pinhão, onde as condições naturais permitem obter uvas de grande concentração, frescura e equilíbrio.',
    style: ['Firme', 'Concentrado', 'Elegante', 'Complexo'],
    tastingNotes: ['Frutos maduros (amora, cereja preta, ameixa)', 'Pimenta preta', 'Cravinho', 'Canela'],
    sensoryProfile: {
      acidity: 'Vitalidade fresca',
      body: 'Encorpado e aveludado',
      intensity: 'Abundância desdobrável de aromas',
      tannin: 'Firmes e bem integrados',
      finish: 'Decididamente profunda e complexa'
    },
    serviceTemperature: '16°C-18°C',
    alcohol: '14,5',
    decanting: 'Sim',
    recommendedGlass: 'Copo tinto autêntico',
    image: '/vinhos/vinhas-passadouro-2021.png',
    dinnerOrder: 5
  },
  'tawny-50-anos': {
    id: 'tawny-50-anos',
    slug: 'tawny-50-anos',
    name: 'Noval Tawny 50 anos',
    producer: 'Quinta do Noval',
    region: 'Douro/Porto',
    type: 'Vinho do Porto',
    grapes: ['Touriga Nacional', 'Sousão', 'Tinta Roriz', 'Touriga Francesa', 'Múltiplas Castas'],
    shortDescription: 'Um assombro de contemplação gerado num laborioso e rigoroso estágio de meio século em cave.',
    longDescription: 'Elaborado com maceração em lagar e pisa a pé, a partir de uma seleção de vinhas velhas multivaretais, este vinho envelheceu durante cinquenta anos em cascos antigos de carvalho de 600 litros. Este longo estágio, marcado por uma evolução lenta e natural, deu origem a uma concentração admirável, sem nunca perder pureza, frescura e definição. No copo, revela uma serenidade rara, grande complexidade e um notável sentido de harmonia. A doçura ampla e envolvente é sustentada por uma acidez firme e elegante, num conjunto de enorme sofisticação e equilíbrio.',
    style: ['Contemplativo', 'Aveludado', 'Evoluído', 'Concentrado'],
    tastingNotes: ['Fruto seco torrado', 'Amêndoa madura', 'Especiarias integradas suaves', 'Âmbar com matizes mogno'],
    sensoryProfile: {
      acidity: 'Acidez presente (8.6g/l)',
      body: 'Estrutura e finesse muito concentrada',
      intensity: 'Complexidade excecional refinada',
      sweetness: 'Residual clássico maduro (181g/l)',
      finish: 'Aveludado incrivelmente persistente'
    },
    serviceTemperature: '12°C-14°C',
    alcohol: '21,5',
    decanting: 'Não',
    recommendedGlass: 'Riedel Vinum Vinho do Porto',
    image: '/vinhos/tawny-50-anos.png',
    dinnerOrder: 6
  },
  'port-vintage-2003': {
    id: 'port-vintage-2003',
    slug: 'port-vintage-2003',
    name: 'Quinta do Noval Vintage Port 2003',
    producer: 'Quinta do Noval',
    region: 'Douro/Porto',
    type: 'Porto Vintage',
    grapes: ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinto Cão', 'Sousão'],
    shortDescription: 'Monumento imaculado. Gigante forjado entre condições excecionais enaltecendo total balanço estrutural.',
    longDescription: 'Vindimado num ano marcadamente quente, mas com uvas de excelente maturação, este vinho foi vinificado com pisa a pé, garantindo uma extração precisa e intensa. O estágio de 18 meses em tonel conferiu-lhe profundidade, estrutura e uma profunda intensidade de cor. Distinto pelo seu equilíbrio, revela uma juventude aromática invulgar e uma excelente aptidão para envelhecer em garrafa. A sua estrutura, frescura e concentração, permitem antecipar uma evolução muito positiva, em linha com os grandes anos do século XX.',
    style: ['Potente', 'Elegante', 'Estruturado', 'Evoluível'],
    tastingNotes: ['Ameixa etérea e incenso', 'Lavanda intensa', 'Alcaçuz elegante', 'Baga madura perfumada e sumarenta'],
    sensoryProfile: {
      acidity: 'Profunda e surpreendente',
      body: 'Grosso, volumoso e voluptuoso',
      intensity: 'Grande precisão e complexidade',
      tannin: 'Finos, equilibrados e compactos',
      finish: 'Extensa e duradoura riqueza'
    },
    serviceTemperature: '15°C-17°C',
    alcohol: '19,5',
    decanting: 'Sim',
    recommendedGlass: 'Riedel Sommeliers Vintage Port',
    image: '/vinhos/port-vintage-2003.png',
    dinnerOrder: 7
  },
  'nacional-vintage-2003': {
    id: 'nacional-vintage-2003',
    slug: 'nacional-vintage-2003',
    name: 'Quinta do Noval Nacional Vintage 2003',
    producer: 'Quinta do Noval',
    region: 'Douro/Porto',
    type: 'Porto Vintage',
    grapes: ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinto Cão', 'Sousão'],
    shortDescription: 'Fenómeno restrito e puro nascido enigmático a partir das icónicas vinhas raras de raiz própria (pé-franco).',
    longDescription: 'O Nacional é a expressão maior de um terroir raro e singular, preservado da filoxera e assente em videiras de raiz própria. Produzido em quantidades ínfimas, com pisa a pé e uma exigência absoluta em todo o processo, distingue-se pela profundidade, pela pureza e por uma identidade sem equivalente. Considerado uma das mais altas expressões do vinho do Porto, alia uma concentração extraordinária a uma notável precisão e capacidade de envelhecimento. É um vinho de exceção, cuja grandeza se revela tanto na juventude como ao longo de décadas de evolução em garrafa.',
    style: ['Mágico', 'Misterioso', 'Puro', 'Jovem e intenso'],
    tastingNotes: ['Múltiplas camadas frutadas vivas', 'Excecional densidade floral fina', 'Frutos preenchidos inteiros maturados', 'Plenitude harmoniosa da fruta de terroir'],
    sensoryProfile: {
      acidity: 'Elevada e perenemente equilibrada',
      body: 'Inteiramente elegante',
      intensity: 'Personalidade única e intensa',
      tannin: 'Incontornáveis mas absolutamente finos',
      finish: 'Surpreendentemente jovem e duradouro'
    },
    serviceTemperature: '16°C-18°C',
    alcohol: '20',
    decanting: 'Obrigatória, por longas horas',
    recommendedGlass: 'Gabriel-Glas Stand\'Art',
    image: '/vinhos/nacional-vintage-2003.png',
    dinnerOrder: 8
  }
};
