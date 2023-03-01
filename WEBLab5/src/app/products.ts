export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  category:string;
}

export const products : Product[]= [

  {
    id: 1,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h67/46526308188190/tcl-43p615-cernyj-102569498-1.jpg",
    name: 'Телевизор TCL 43P615 109 см черный',
    price: 148500,
    description: ' тип: LED-телевизор диагональ: 43 дюйм разрешение: 3840x2160 поддержка HD: 4K HDR технология Smart TV: Да wi-Fi: Да входы: аудио, ,оптический, ,VGA, ,HDMI, ,USB, ,Bluetooth',
    rating: 7,
    url: "https://kaspi.kz/shop/p/tcl-43p615-109-sm-chernyi-102569498/?c=750000000#!/item",
    category:"tv"
  },
  {
    id: 2,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    name:'Телевизор Yasin LED-32E7000 81 см черный',
    price: 60215 ,
    description:'поддержка HD: 720p HD технология Smart TV: Нет  wi-Fi: Да входы: AV, ,HDMI, ,USB, ,антенный, ,Bluetooth',
    rating: 8,
    url:"https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
    category:"tv"

  },
  {
    id: 3,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg",
    name:'Телевизор Yasin 40G7 102 см черный',
    price: 114677,
    description:'технология Smart TV: Да wi-Fi: Да входы: оптический, ,AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,RS-232, ,MHL',
    rating: 9,
    url:"https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item",
    category:"tv"
  },
  {
    id: 4,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h45/51955437142046/tcl-32s65a-cernyj-105537206-1.jpg",
    name:'Телевизор TCL 32S65A 81 см черный',
    price: 92900,
    description:'тип: LED-телевизор  диагональ: 32 дюйм разрешение: 1366x768 поддержка HD: 1080p Full HDтехнология Smart TV: Даwi-Fi: Давходы: Bluetooth, ,HDMI, ,Ethernet (RJ-45), ,USB, ,антенный',
    rating: 9,
    url:"https://kaspi.kz/shop/p/tcl-32s65a-81-sm-chernyi-105537206/?c=750000000#!/item",
    category:"tv"
  },
  {
    id: 5,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h54/68081499373598/dexp-h32h8000q-chernyi-108526272-1.jpg",
    name:'Телевизор DEXP H32H8000Q черный',
    price: 74990,
    description:'тип: LED-телевизор диагональ: 32 дюйм разрешение: 1366x768 поддержка HD: 1080i HD технология Smart TV: Да wi-Fi: Да входы: AV, ,HDMI, ,Ethernet (RJ-45), ,USB, ,Bluetooth',
    rating: 8,
    url:"https://kaspi.kz/shop/p/dexp-h32h8000q-chernyi-108526272/?c=750000000#!/item",
    category:"tv"
  },
  {
    id: 6,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg ",
    name: 'Блендер Fresh Juice Blend12 белый',
    price: 12000 ,
    description: 'тип: портативный мощность: 50 Вт управление: электронное количество скоростей: 1 цвет: белый, ,прозрачный',
    rating: 7.2,
    url:"https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item",
    category:"blender"
  },
  {
    id: 7,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h58/33185529856030/arnica-diva-trend-chernyi-rozovyi-100701067-1.jpg",
    name: 'Блендер ARNICA Diva Trend черный, розовый',
    price: 28740 ,
    description: 'тип: погружной мощность: 1200 Вт управление: механическое количество скоростей: 2 цвет: черный, ,розовый',
    rating: 5,
    url:"https://kaspi.kz/shop/p/arnica-diva-trend-chernyi-rozovyi-100701067/?c=750000000#!/item",
    category:"blender"
  },

  {id: 8,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h3d/47926663741470/artel-art-bl-s62-serebristyi-101938035-1.jpg",
    name:'Блендер Artel ART-BL-S62 серебристый',
    price: 25000,
    description:'тип: стационарный мощность: 1200 Вт управление: механическое количество скоростей: 2  цвет: серебристый',
    rating: 8,
    url:"https://kaspi.kz/shop/p/artel-art-bl-s62-serebristyi-101938035/?c=750000000#!/item",
    category:"blender"
  },
  {id: 9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h16/49391010152478/midea-mj-bh1001w-104140768-1.jpg",
    name:'Блендер Midea MJ-BH1001W',
    price: 4000,
    description:'тип: кабель разъемы: DisplayPort - DisplayPort длина кабеля: 2 м',
    rating: 9,
    url:"https://kaspi.kz/shop/p/midea-mj-bh1001w-104140768/?c=750000000#!/item",
    category:"blender"
  },
  {id: 10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h9f/63148705021982/fresh-juice-214b-rozovyi-106075301-1.jpg",
    name:'Блендер Портативный Fresh Juice 214B розовый',
    price: 19584,
    description:'тип: портативный мощность: 50 Вт управление: электронное количество скоростей: 1 цвет: розовый',
    rating: 8,
    url:"https://kaspi.kz/shop/p/portativnyi-fresh-juice-214b-rozovyi-106075301/?c=750000000#!/item",
    category:"blender"
  },
  {
    id: 11,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
    name:'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    description:'диагональ экрана: 15.6 дюйм процессор: Intel Pentium Gold 7505 видеокарта: Intel UHD Graphics  размер оперативной памяти: 8 ГБ тип жесткого диска: SSD общий объем накопителей: 256 ГБ',
    rating: 7,
    url:"https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item",
    category:"laptop"
  },
  {
    id: 12,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
    name:'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389700,
    description:'диагональ экрана: 15.6 дюйм процессор: Intel Core i5 11400H видеокарта: NVIDIA GeForce GTX 1650 размер оперативной памяти: 16 ГБ тип жесткого диска: SSD общий объем накопителей: 512 ГБ',
    rating: 10,
    url:"https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item",
    category:"laptop"
  },
  {
    id: 13,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg",
    name:'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 246990,
    description:'диагональ экрана: 15.6 дюйм процессор: Intel Core i3 1115G4 видеокарта: Intel UHD Graphic  размер оперативной памяти: 8 ГБ тип жесткого диска: SSD общий объем накопителей: 512 ГБ',
    rating: 9,
    url:"https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item",
    category:"laptop"
  },
  {id: 14,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg",
    name:'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 139000,
    description:'диагональ экрана: 14 дюйм процессор: Intel Celeron N4020  видеокарта: Intel UHD Graphics 600 размер оперативной памяти: 4 ГБ тип жесткого диска: SSD общий объем накопителей: 128 ГБ',
    rating: 8,
    url:"https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item",
    category:"laptop"
  },
  {id: 15,
      image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
      name:'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
      price:369990 ,
      description:'диагональ экрана: 15.6 дюйм  процессор: AMD Ryzen 5 4600H  видеокарта: nVidia GeForce GTX1650  размер оперативной памяти: 8 ГБ  тип жесткого диска: SSD  общий объем накопителей: 512 ГБ',
      rating: 10,
      url:"https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
      category:"laptop"
  },
  {id: 16,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
    name:'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 88787,
    description:'технология NFC: Да цвет: черный тип экрана: PLS TFT LCD сенсорный, мультитач диагональ: 6.6 дюйм размер оперативной памяти: 4 ГБ процессор: 8-ядерный Exynos 850 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
    rating: 8,
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    category:"phone"
  },
  {id: 17,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
    name:'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 69295,
    description:'технология NFC: Нет цвет: серый тип экрана: IPS, сенсорный, мультитач диагональ: 6.71 дюйм размер оперативной памяти: 4 ГБ процессор: 8-ядерный Qualcomm Snapdragon 680 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
    rating: 9,
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
    category:"phone"
  },
  {id: 18,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    name:'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 128350,
    description:'технология NFC: Да цвет: серый  тип экрана: цветной AMOLED, сенсорный  диагональ: 6.67 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 732G объем встроенной памяти: 256 ГБ емкость аккумулятора: 5020 мАч',
    rating: 7,
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
    category:"phone"
  },
  {id: 19,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
    name:'Смартфон Apple iPhone 13 128Gb белый',
    price: 377100,
    description:'технология NFC: Да цвет: белый тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
    rating: 10,
    url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item",
    category:"phone"
  },
  {id: 20,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg",
    name:'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 636250,
    description:'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3125 мАч',
    rating: 10,
    url:"https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item",
    category:"phone"
  }
  


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/