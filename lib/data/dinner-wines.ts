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
  editorialCopy: string;
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
    longDescription: 'Produzido com uvas selecionadas nas vinhas mais altas e socalcos do Douro, numa vindima equilibrada em 2023. As diferentes castas são desengaçadas, ligeiramente esmagadas e fermentadas maioritariamente em cubas de aço inoxidável. Uma parcela de 20% do lote fermenta em barricas de carvalho francês para adicionar estrutura.',
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
    editorialCopy: 'Sem fermentação maloláctica, este vinho preserva um caráter altamente vibrante, onde as notas de pêssego e citrinos encontram balanço perfeito num final prolongado.',
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
    longDescription: 'O Cedro Reserva surge a partir de uma rigorosa seleção de uvas provenientes de terroirs de altitude. Forjado num ano marcado pelo calor primaveril, este vinho é desengaçado e fermentado (35%) em barricas de carvalho francês sob frequente revolvimento das borras (bâtonnage) durante os seus 5 meses de estágio.',
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
    editorialCopy: 'Ao não se realizar a fermentação maloláctica, e aliando a pureza da casta Viosinho ao corpo do Gouveio, alcança-se uma integração impecável do carvalho e uma notável mineralidade.',
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
    longDescription: 'Elaborado a partir das castas de eleição da própria Quinta. Após maceração, todo o mosto fermenta e estagia integralmente em barricas de carvalho francês (55% novas). O vinho é envelhecido durante 6 meses, com intensa bâtonnage inicial para consolidar o perfil sem recorrer a fermentação maloláctica.',
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
    editorialCopy: 'Um equilíbrio exímio entre a concentração frutada madura e a vivacidade intrínseca da encosta do Douro, assinalando excelente potencial de guarda.',
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
    longDescription: 'Originado numa vindima desafiadora de ano quente e seco, este tinto exalta o potencial concentrado de produção dos lagares. Fermentou primeiramente em cubas de aço inoxidável durante 8 dias antes de finalizar a maloláctica em barricas de carvalho francês, onde consolidou estagiando ao longo de 12 meses (40% barrica nova).',
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
    editorialCopy: 'O fiel estilo da Quinta do Noval: delicioso e acessível quando jovem devido ao volume e requinte, evidenciando igualmente enorme vocação e firmeza para evolução de longo prazo.',
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
    longDescription: 'A Terroir Series é uma oportunidade de descobrir terroirs específicos identificados como excepcionais. O Vinhas do Passadouro nasce num terroir singular situado estrategicamente na margem esquerda do rio Pinhão, onde as condições perfeitas conferem à uva uma concentração sublime e vitalidade sem precedentes.',
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
    editorialCopy: 'Um vinho detentor de 19 pontos por Nuno Oliveira Garcia (2025). Embora preencha deliciosamente o palato desde jovem, a sua estrutura sólida garante que ganhará impressionante complexidade aromática e suavidade de taninos com adega a longo prazo.',
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
    longDescription: 'Elaborado sob maceração de lagar e pisa a pé com a seleção multivarietal imaculada do Vale do Douro. Cinquenta vastos anos repousando passivamente em cascos ancestrais e experientes de carvalho (640 litros) conferiram a este vinho uma evaporação controlada e natural pureza, criando concentrações e propriedades gustativas sem paralelo.',
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
    editorialCopy: 'A complexa unificação do vinho após tanto tempo dota as taças de uma serenidade madura extraordinária, sendo o ponto incontestável e sofisticado que une doçura plena com uma acidez requintada inabalável.',
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
    longDescription: 'Colhido num ano caracteristicamente quente mas de uvas em sublime maturação. As uvas sofreram clássica e ininterrupta pisa a pé por três horas completas originando uma correta extração, resultando num estagiamento de barricas (18 meses). Representa exímios tons de cor profundos sublinhados por uma riqueza volumosa singular.',
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
    editorialCopy: 'Reconhecido pelo seu inegável balanço, este exemplar evidencia uma juventude aromática invulgar com potencial e fôlego de guarda formidável, recomendando-se envelhecimento otimizado muito além de 2045.',
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
    longDescription: 'Nacional consubstancia a pura exaltação de um exíguo e milagroso terroir isento da predação filoxérica da História ibérica. Utilizando nobres videiras de raiz própria e pisa a pé rigorosa sem contaminações rústicas externas, cria volumes ínfimos, resultando numa afirmação de carácter perante tempos vitícolas exigentes.',
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
    editorialCopy: 'Reverenciado como uma expressão de perfeição intemporal e um verdadeiro testemunho do seu terroir inabalável, o Nacional oferece sumptuosidade ímpar aliada a décadas e gerações consecutivas de evolução.',
    image: '/vinhos/nacional-vintage-2003.png',
    dinnerOrder: 8
  }
};
