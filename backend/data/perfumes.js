const perfumes = [
  {
    name: 'Dior Sauvage',
    images: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310393/image1_jdrugt.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310393/image1_jdrugt.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310393/dior-g3_gjnksc.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310393/dior-g3_gjnksc.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310392/dior-g2_ngqjsj.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310392/dior-g2_ngqjsj.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310392/dior-g1_nl4lbt.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310392/dior-g1_nl4lbt.jpg',
      },
    ], 
    shortDescription: 'Dior Sauvage is a fresh and spicy fragrance that is perfect for the modern.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed autem earum sit reprehenderit esse perferendis necessitatibus explicabo et quaerat dolorum eveniet, aliquid eum dolor voluptates harum voluptatem nemo iusto saepe',
    price: 100,
    size: [{name: '30 ml', total: 5}, {name: '50 ml', total: 3}, {name: '100 ml', total: 2}],
    rating: 4.5,
    numRevies: 10,
  },
  { 
    name: 'Chanel No. 5',
    images: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310389/channel_jpiwfr.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310389/channel_jpiwfr.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310390/channel-g1_lbc7nm.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310390/channel-g1_lbc7nm.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310390/channel-g2_inpnl3.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310390/channel-g2_inpnl3.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310391/channel-g3_dlmzip.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310391/channel-g3_dlmzip.jpg',
      },
    ],
    shortDescription: 'Chanel No. 5 is a classic fragrance that is perfect for the elegant.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed autem earum sit reprehenderit esse perferendis necessitatibus explicabo et quaerat dolorum eveniet, aliquid eum dolor voluptates harum voluptatem nemo iusto saepe',
    price: 120,
    size: [{name: '30 ml', total: 5}, {name: '50 ml', total: 0}, {name: '100 ml', total: 2}],
    rating: 4.0,
    numRevies: 8,
  },
  { 
    name: 'Dolce & Gabbana',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310391/D_G_q5hjdv.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310391/D_G_q5hjdv.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310391/D_G-g1_k6ulic.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310391/D_G-g1_k6ulic.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310391/D_G-g2_el3nbb.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310391/D_G-g2_el3nbb.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310392/D_G-g3_s1ksig.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310392/D_G-g3_s1ksig.jpg',
      },
    ], 
    shortDescription: 'Dolce & Gabbana is a floral fragrance that is perfect for the romantic and glamorous.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed autem earum sit reprehenderit esse perferendis necessitatibus explicabo et quaerat dolorum eveniet, aliquid eum dolor voluptates harum voluptatem nemo iusto saepe',
    price: 90,
    size: [{name: '30 ml', total: 5}, {name: '50 ml', total: 10}, {name: '100 ml', total: 2}],
    rating: 3,
    numRevies: 5,
  },
  { 
    name: 'White Linen',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310387/white-linen_s3crpo.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310387/white-linen_s3crpo.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310389/w-l-g1_pwxuio.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310389/w-l-g1_pwxuio.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310390/w-l-g2_khs63b.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310390/w-l-g2_khs63b.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310390/wl-g3_zxv3gd.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310390/wl-g3_zxv3gd.jpg',
      },
    ], 
    shortDescription: 'White Linen is a sweet fragrance that is perfect for the glamorous.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed autem earum sit reprehenderit esse perferendis necessitatibus explicabo et quaerat dolorum eveniet, aliquid eum dolor voluptates harum voluptatem nemo iusto saepe',
    price: 110,
    size: [{name: '30 ml', total: 5}, {name: '50 ml', total: 0}, {name: '100 ml', total: 2}],
    rating: 5,
    numRevies: 15,
  },
  { 
    name: 'Aqua Allegoria',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310390/aqua-allegoria_trjzyl.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310390/aqua-allegoria_trjzyl.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310388/aa-g1_jlsyjt.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310388/aa-g1_jlsyjt.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310389/aa-g2_v1ui4j.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310389/aa-g2_v1ui4j.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1728310387/aa-g3_d1iu4r.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1728310387/aa-g3_d1iu4r.jpg',
      },
    ], 
    shortDescription: 'Aqua Allegoria is a fresh fragrance that is perfect for the youthful.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed autem earum sit reprehenderit esse perferendis necessitatibus explicabo et quaerat dolorum eveniet, aliquid eum dolor voluptates harum voluptatem nemo iusto saepe',
    price: 80,
    size: [{name: '30 ml', total: 5}, {name: '50 ml', total: 8}, {name: '100 ml', total: 2}],
    rating: 4.5,
    numRevies: 12,
  },
]

export default perfumes