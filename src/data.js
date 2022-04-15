export const data = [
  {
    id: 1,
    tittle: "Mario Kart 8",
    price: "$3000",
    img: ["https://m.media-amazon.com/images/I/51uY0eZg+IS.jpg "],
    stock: 100,
    description:
      "Recorre a toda velocidad pistas inspiradas en ubicaciones como Bulevares de París y Circuito Tokio del juego Mario Kart Tour, además de las favoritas y recordadas Monte Chocolate de (N64) y Centro Cocotero de (Wii).",
    categoryId: "Nintendo",
  },

  {
    id: 2,
    tittle: "Luigi Mansion 3",
    price: "$3000",
    img: ["https://m.media-amazon.com/images/I/81cHm50auZL._SY550_.jpg "],
    stock: 100,
    description:
      "Luigi ha sido invitado al hotel El Gran Descanso Real, ¡pero cuando Mario y sus amigos desaparecen, nuestro héroe de verde tendrá que superar sus miedos para poder salvarlos! Ataca, sopla y aspira a los fantasmas con la nueva Succionaentes GO-1000 y trabaja en conjunto con Gomiluigi para superar los complicados artilugios y traviesos jefes de cada piso temático. Entra a la Torre del Horror y forma equipo con 8 jugadores para juego cooperativo en modo local** o en línea***.",
    categoryId: "Nintendo",
  },
  {
    id: 3,
    tittle: "Kirby Star Allies",
    price: "$3000",
    img: [
      "https://http2.mlstatic.com/D_NQ_NP_883268-MLA40928711983_022020-O.webp ",
    ],
    stock: 100,
    description:
      "Cuando el mal amenaza al Planeta Pop, Kirby necesitará un poco de ayuda de sus… ¿¡enemigos!? Al convertir a tus enemigos en amigos, hasta tres jugadores* podrán unirse a la aventura en cualquier momento. Con más habilidades de copia, la clásica acción de Kirby es aún más profunda: ¡combina las habilidades con elementos tales como el hielo o el fuego para crear habilidades de amigo!",
    categoryId: "Nintendo",
  },
  {
    id: 4,
    tittle: "The legend of Zelda. Breath of the wild",
    price: "$3000",
    img: ["https://m.media-amazon.com/images/I/61wcjVPx4sL._SL1000_.jpg"],
    stock: 100,
    description:
      "The Legend of Zelda: Breath of the Wild es la nueva aventura de acción de Nintendo para Wii U y Nintendo Switch que nos presenta el título más ambicioso de la saga con un mundo abierto por explorar y en el que realizar todo tipo de acciones como escalar además de otras clásicas como nadar o montar a caballo",
    categoryId: "Nintendo",
  },
  {
    id: 5,
    tittle: "Patapon",
    price: "$3000",
    img: ["http://www.retroplace.com/pics/ps4/packshots/164574--patapon.png"],
    stock: 100,
    description:
      "Los Patapons eran una tribu de guerreros que eran invencibles al luchar contra cualquier enemigo junto a los tambores de su dios, el Ser Supremo. El juego les lleva a través de su mundo, la caza, la lucha, y siempre en busca de su único objetivo, ESO, que desean mirar y obtener la felicidad. En el camino, chocan con sus enemigos, la Tribu Zigoton. Su líder es la Reina Kharma, y sus fuerzas están dirigidas por Gong, El Ojo de Halcón.",
    categoryId: "Playstation",
  },
  {
    id: 6,
    tittle: "The Witcher. Wild Hunt",
    price: "$3000",
    img: [
      "https://cl.buscafs.com/www.levelup.com/public/uploads/images/57559_256x322.jpg",
    ],
    stock: 100,
    description:
      "The Witcher 3: Wild Hunt es un juego de rol de mundo abierto de nueva generación con una apasionante trama en un increíble universo de fantasía lleno de decisiones y consecuencias impactantes. En The Witcher eres un cazador de monstruos que busca a la niña de la profecía en un vasto mundo repleto de ciudades, peligrosos puertos de montaña y cuevas olvidadas. Métete en la piel de un cazador de monstruos profesional Adiestrados desde niños y sometidos a mutaciones para adquirir habilidades y fuerza sobrehumanas, los brujos mantienen el equilibrio en un mundo infestado de monstruos.",
    categoryId: "Playstation",
  },
  {
    id: 7,
    tittle: "Plants vs zombies",
    price: "$3000",
    img: [
      "https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/p/l/plants-vs-zombies_.jpg",
    ],
    stock: 100,
    description:
      "Juega a la aventura de acción y estrategia en la que podrás conocer, saludar y derrotar a legiones de zombis alocados desde el amanecer de los tiempos hasta el ocaso de los días. Reúne un ejército de plantas increíbles, cárgalas hasta los topes de Nutrientes y urde el plan definitivo para proteger tu cerebro.",
    categoryId: "Xbox",
  },
  {
    id: 8,
    tittle: "Just Dance 2022",
    price: "$3000",
    img: ["https://m.media-amazon.com/images/I/81Ts1btToHL._SX342_.jpg"],
    stock: 100,
    description:
      "Just Dance® 2022, la mejor experiencia de todas en juegos de baile, está de vuelta con nuevos universos y 40 nuevas canciones de las listas de éxitos como Believer de Imagine Dragons, Level Up de Ciara, ¡y muchos otros! ¿Buscas el juego perfecto para bailar los últimos éxitos y divertirte con tus amigos y familiares? ¡Just Dance 2022 es para ti!",
    categoryId: "Xbox",
  },
];

export const getData = () => {   
  return new Promise ((resolve, reject)=> {
    setTimeout (() =>{
      return resolve (data);
    }, 2000)
  })
}





