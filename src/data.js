const data = [
  {
    id: 1,
    tittle: "Mario Kart 8",
    price: "$3000",
    img: {
      url: "https://m.media-amazon.com/images/I/51uY0eZg+IS.jpg ",
    },
  },
  {
    id: 2,
    tittle: "Luigi Mansion 3",
    price: "$3000",
    img: {
      url: "https://m.media-amazon.com/images/I/81cHm50auZL._SY550_.jpg ",
    },
  },
  {
    id: 3,
    tittle: "Kirby Star Allies",
    price: "$3000",
    img: {
      url: "https://http2.mlstatic.com/D_NQ_NP_883268-MLA40928711983_022020-O.webp ",
    },
  },
  {
    id: 4,
    tittle: "The legend of Zelda. Breath of the wild",
    price: "$3000",
    img: {
      url: "https://m.media-amazon.com/images/I/61wcjVPx4sL._SL1000_.jpg",
    },
  },
];

export const getData = () => {
  return new Promise ((resolve, reject)=> {
    setTimeout (() =>{
      return resolve (data);
    }, 2000)
  })
}