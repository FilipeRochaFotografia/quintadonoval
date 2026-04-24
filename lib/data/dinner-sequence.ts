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
    editorialPairing: 'O Cedro Branco destaca-se pela frescura, ligando-se na perfeição às texturas marinhas e às notas cítricas do atum e do camarão, num conjunto preciso e vibrante.'
  },
  {
    id: 'momento-2',
    momentOrder: 2,
    wine: dinnerWines['cedro-reserva-branco-2023'],
    dish: dinnerDishes['entradas'],
    editorialPairing: 'No copo, o Reserva revela subtis notas de madeira que acompanham com equilíbrio a intensidade do polvo e o perfil fumado da alheira, criando um conjunto harmonioso, saboroso e muito expressivo.'
  },
  {
    id: 'momento-3',
    momentOrder: 3,
    wine: dinnerWines['quinta-reserva-branco-2023'],
    dish: dinnerDishes['massada-robalo'],
    editorialPairing: 'O caldo rico e fumegante do peixe liga-se muito bem ao volume e às notas florais do Reserva Branco. A sua acidez e frescura trazem equilíbrio e brilho ao conjunto.'
  },
  {
    id: 'momento-4',
    momentOrder: 4,
    wine: dinnerWines['quinta-reserva-tinto-2020'],
    dish: dinnerDishes['massada-robalo'],
    editorialPairing: 'A estrutura deste prato permite uma ligação surpreendente a um Reserva Tinto. A Touriga, simultaneamente delicada e concentrada, encontra um bom entendimento com o carácter rústico do molho, assente na pimenta e nos coentros.'
  },
  {
    id: 'momento-5',
    momentOrder: 5,
    wine: dinnerWines['vinhas-passadouro-2021'],
    dish: dinnerDishes['massada-robalo'],
    editorialPairing: 'A massada dá corpo e conforto ao prato, enquanto a frescura do Passadouro equilibra o conjunto e corta com elegância a untuosidade do marisco. '
  },
  {
    id: 'momento-6',
    momentOrder: 6,
    wine: dinnerWines['tawny-50-anos'],
    dish: dinnerDishes['pao-de-lo'],
    editorialPairing: 'O estágio em casco muito velho encontra nesta joia conventual de Ovar uma ligação natural, num registo sereno, envolvente e harmonioso.'
  },
  {
    id: 'momento-7',
    momentOrder: 7,
    wine: dinnerWines['port-vintage-2003'],
    dish: dinnerDishes['queijo-serra'],
    editorialPairing: 'A untuosidade e a subtil salinidade do Queijo da Serra ligam-se à doçura profunda de um Porto de longa guarda, num encontro de grande equilíbrio, profundidade e harmonia.'
  },
  {
    id: 'momento-8',
    momentOrder: 8,
    wine: dinnerWines['nacional-vintage-2003'],
    dish: dinnerDishes['queijo-serra'],
    editorialPairing: 'Considerado por muitos o maior Vinho do Porto do mundo, o Nacional assume com naturalidade o grande momento final. O toque subtil do queijo acompanha a sua doçura e a profundidade da fruta, num desfecho de rara harmonia.'
  }
];
