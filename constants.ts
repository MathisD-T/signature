import { MenuCategory } from './types';

export const TABLE_DHOTE_OFFER = {
  title: "Formule Table d'Hôte à la Signature",
  price: "22 $",
  description: "Ajoutez 22 $ à votre plat principal pour profiter de notre formule table d'hôte, comprenant le potage du moment, suivi de votre choix entre la fondue de parmesan maison, les beignets de crabe, le calmar frit. En dessert, choisissez entre la crème brûlée maison ou la tarte au sucre à la crème maison, avec thé ou café."
};

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Entrée",
    items: [
      {
        id: "e1",
        title: "Fondue Parmesan Maison",
        description: "Servi avec chutney maison et salade.",
        price: "18 $"
      },
      {
        id: "e2",
        title: "Brie Fondant à Partager",
        description: "Style raclette servi avec des pacanes grillées, des pommes de terre grenailles, du pain et du sirop d'érable.",
        price: "23 $"
      },
      {
        id: "e3",
        title: "Calmars Frits",
        description: "Servi avec de la mayo épicée et une salade de roquette.",
        price: "18 $"
      },
      {
        id: "e4",
        title: "Burrata à l'Italienne",
        description: "Drapé de roquette fraîche, pesto, accompagné de prosciutto, pistache et de croûtons maison.",
        price: "21 $"
      },
      {
        id: "e5",
        title: "Beignets de Crabe",
        description: "Servi avec de l'aïoli maison ou de la mayo épicée, accompagné d'une salade de roquette.",
        price: "19 $"
      },
      {
        id: "e6",
        title: "Gyoza de Bœuf Wagyu & Sauce aux Arachides",
        description: "Raviolis japonais dorés, farcis de bœuf Wagyu, servis sur une salade croquante et nappés d'une sauce onctueuse.",
        price: "18 $"
      }
    ]
  },
  {
    title: "Les Plats",
    items: [
      {
        id: "p1",
        title: "Tartare de Bœuf à l'Ail Noir",
        description: "Bœuf frais, ail noir, câpres, moutarde à l'ancienne, sriracha, oignon vert, ciboulette et persil, servi avec frites maison et salade fraîche.",
        price: "39 $"
      },
      {
        id: "p2",
        title: "Tartare aux 2 Saumons",
        description: "Brunoise de betteraves jaunes, fenouil, chip de panais, frites et salade.",
        price: "39 $"
      },
      {
        id: "p3",
        title: "Steak Frites 8oz",
        description: "Pièce au choix du boucher, accompagnée de frites croustillantes, légumes du moment et sauce au poivre ou demi-glace maison. Servi avec un chimichurri.",
        price: "45 $"
      },
      {
        id: "p4",
        title: "Duo Boudin de la Boucherie Les Saules",
        description: "Boudin et saucisse au bacon et cheddar, issus de la Boucherie Les Saules, servis avec un gratin dauphinois fondant, légumes du moment, chutney maison et sauce demi-glace.",
        price: "40 $"
      },
      {
        id: "p5",
        title: "Risotto de la Mer & du Terroir",
        description: "Risotto crémeux aux pétoncles, crevettes, lardons fumés et poireaux fondants. Une rencontre savoureuse entre l'océan et la terre.",
        price: "40 $"
      },
      {
        id: "p6",
        title: "Joue de Bœuf Braisée",
        description: "Fondante à souhait, servie avec purée à l'ail confit et légumes du moment.",
        price: "40 $"
      },
      {
        id: "p7",
        title: "Magret de Canard Goulu",
        description: "Rosé à cœur, servi avec confiture de camerise, purée de patate douce, légumes de saison et sauce demi-glace riche et veloutée.",
        price: "45 $"
      },
      {
        id: "p8",
        title: "Saumon en Croûte de Parmesan",
        description: "Accompagné de purée de patate douce, légumes du moment et sauce chimichurri.",
        price: "40 $"
      },
      {
        id: "p9",
        title: "Raviolis de Homard Sauce Crémeuse",
        description: "Sauce crémeuse à la bisque de homard, tombée de poireau, et juliennes de tomates, copeaux de parmesan.",
        price: "38 $"
      },
      {
        id: "p10",
        title: "Jarret d'Agneau Braisé",
        description: "Tendre et fondant, servi avec purée de pommes de terre à l'ail confit, légumes du moment et sauce demi-glace.",
        price: "45 $"
      },
      {
        id: "p11",
        title: "Tagliatelles à la Joue de Bœuf & Truffe",
        description: "Pâtes fraîches nappées d'un effiloché de joue de bœuf braisée, parfum de truffe et un soupçon de parmesan.",
        price: "45 $"
      }
    ]
  },
  {
    title: "Les Desserts",
    items: [
      {
        id: "d1",
        title: "Crème Brûlée Maison",
        description: "",
        price: "10 $"
      },
      {
        id: "d2",
        title: "Tarte au Sucre à la Crème",
        description: "La fameuse recette de la grand-mère à Paul.",
        price: "10 $"
      },
      {
        id: "d3",
        title: "Dessert du Moment",
        description: "",
        price: "10 $"
      }
    ]
  },
  {
    title: "Les Breuvages",
    items: [
      {
        id: "b1",
        title: "Café Filtre Bio",
        description: "",
        price: "4.50 $"
      },
      {
        id: "b2",
        title: "Expresso ou Allongé Bio",
        description: "",
        price: "4.50 $"
      },
      {
        id: "b3",
        title: "Café au Lait",
        description: "Tasse 5.50 $ / Bol 7.00 $",
        price: ""
      },
      {
        id: "b4",
        title: "Cappuccino - Mokaccino",
        description: "",
        price: "4.50 $"
      },
      {
        id: "b5",
        title: "Thé ou Tisane",
        description: "Sélection de Camellia Sinensis.",
        price: "5.50 $"
      },
      {
        id: "b6",
        title: "Eau Pétillante, Sprite, Coke",
        description: "",
        price: "4 $"
      }
    ]
  }
];