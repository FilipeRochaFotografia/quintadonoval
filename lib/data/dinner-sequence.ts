import { dinnerWines, WineId } from './dinner-wines';
import { dinnerDishes, DishId } from './dinner-dishes';

export interface DinnerMoment {
  id: string;
  momentOrder: number;
  wine: typeof dinnerWines[WineId];
  dish: typeof dinnerDishes[DishId];
  editorialPairing: string;
}

export const dinnerSequence: DinnerMoment[] = [
  {
    id: 'momento-1',
    momentOrder: 1,
    wine: dinnerWines['cedro-noval-branco-2023'],
    dish: dinnerDishes['aperitivos'],
    editorialPairing: 'O Cedro Branco entra no palco e a sua frescura liga perfeitamente com as texturas marinhas e os cítricos do atum e do camarão. Uma dança precisa e vibrante.'
  },
  {
    id: 'momento-2',
    momentOrder: 2,
    wine: dinnerWines['cedro-reserva-branco-2023'],
    dish: dinnerDishes['entradas'],
    editorialPairing: 'O Reserva, ganho no copo com subtil madeira, enaltece a tradição pesada do polvo e o aspeto fumado da alheira sem quebrar, revelando profundo conforto em cada detalhe rústico.'
  },
  {
    id: 'momento-3',
    momentOrder: 3,
    wine: dinnerWines['quinta-reserva-branco-2023'],
    dish: dinnerDishes['massada-robalo'],
    editorialPairing: 'O caldo rico e fumegante do peixe encontra eco no volume incrível e floral do Reserva Branco. A acidez e frescor envolvem o mar de forma opulenta e brilhante.'
  },
  {
    id: 'momento-4',
    momentOrder: 4,
    wine: dinnerWines['quinta-reserva-tinto-2020'],
    dish: dinnerDishes['massada-robalo'],
    editorialPairing: 'O prato piscatório tem força suficiente para desafiar um Reserva Tinto. A delicadeza e volume concentrado da Touriga ligam-se magicamente à força rústica da pimenta e coentros do molho.'
  },
  {
    id: 'momento-5',
    momentOrder: 5,
    wine: dinnerWines['vinhas-passadouro-2021'],
    dish: dinnerDishes['massada-robalo'],
    editorialPairing: 'A massada serve agora como esteio reconfortante num palco preenchido de terroir duriense. A frescura interminável do Passadouro apaga do prato qualquer gordura marinha excedentária com classe.'
  },
  {
    id: 'momento-6',
    momentOrder: 6,
    wine: dinnerWines['tawny-50-anos'],
    dish: dinnerDishes['pao-de-lo'],
    editorialPairing: 'O tempo na garrafa e na barrica de meio século de idade é acordado de forma serena e poética pelo calor suave e fofo desta joia conventual de Ovar.'
  },
  {
    id: 'momento-7',
    momentOrder: 7,
    wine: dinnerWines['port-vintage-2003'],
    dish: dinnerDishes['queijo-serra'],
    editorialPairing: 'O Sal rústico da Serra e o doce intenso e profundo de um Porto que pede dezenas de anos abrem os portões ao paraíso e preparam os palatos para a grande apoteose da noite.'
  },
  {
    id: 'momento-8',
    momentOrder: 8,
    wine: dinnerWines['nacional-vintage-2003'],
    dish: dinnerDishes['queijo-serra'],
    editorialPairing: 'Considerado o maior Vinho do Mundo, o Nacional domina o momento final. O ligeiro toque do Queijo permite uma simbiose única onde a doçura e a imensa camada de fruta fecham esta página no livro das memórias do jantar.'
  }
];
