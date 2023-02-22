export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    name: 'Xiaomi Redmi Note 10 Pro',
    price: 128350,
    description: ' NFC technology: Yes Color: Gray Screen type: Color AMOLED, Touch diagonal: 6.67 inch Battery capacity: 5020 mAh',
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
  },
  {
    id: 2,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg ",
    name: 'Блендер Fresh Juice Blend12 белый',
    price: 12000 ,
    description: 'тип: портативный мощность: 50 Вт управление: электронное количество скоростей: 1 цвет: белый, ,прозрачный',
    url:"https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item",
  },
  {
    id: 3,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h58/33185529856030/arnica-diva-trend-chernyi-rozovyi-100701067-1.jpg",
    name: 'Блендер ARNICA Diva Trend черный, розовый',
    price: 28740 ,
    description: 'тип: погружной мощность: 1200 Вт управление: механическое количество скоростей: 2 цвет: черный, ,розовый',
    url:"https://kaspi.kz/shop/p/arnica-diva-trend-chernyi-rozovyi-100701067/?c=750000000#!/item",
  },
  {
    id: 4,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    name:'Телевизор Yasin LED-32E7000 81 см черный',
    price: 60215 ,
    description:'поддержка HD: 720p HD технология Smart TV: Нет  wi-Fi: Да входы: AV, ,HDMI, ,USB, ,антенный, ,Bluetooth',
    url:"https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
  },
  {
    id: 5,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg",
    name:'Телевизор Yasin 40G7 102 см черный',
    price: 114677,
    description:'технология Smart TV: Да wi-Fi: Да входы: оптический, ,AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,RS-232, ,MHL',
    url:"https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item",
  },
  {
    id: 6,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h88/66787641983006/lemengkeku-logarifmicheskaya-doska-102413320-1.jpg",
    name:'Игровой центр LEMENGKEKU Логарифмическая доска мультиколор',
    price: 3300,
    description:'размер, см: 45х18 см пол ребенка: универсальный цвет: мультиколор основной материал: дерево',
    url:"https://kaspi.kz/shop/p/igrovoi-tsentr-lemengkeku-logarifmicheskaja-doska-mul-tikolor-102413320/?c=750000000#!/item",
  },
  {
    id: 7,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/hf3/31877654609950/sven-ms-304-black-red-11600448-1-Container.jpg",
    name:'Компьютерные колонки SVEN MS-304 черный',
    price: 29480,
    description:'тип: 2.1 суммарная мощность: 40 Вт материал: MDF цвет: черный',
    url:"https://kaspi.kz/shop/p/sven-ms-304-chernyi-11600448/?c=750000000#!/item",
  },
  {
    id: 8,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf7/31583642517534/lg-lhb655nk-cernyj-2100099-1-Container.jpg",
    name:'Домашний кинотеатр LG LHB655NK',
    price: 194958,
    description:'основной блок: одноблочная система режим караоке: караоке поддерживаемые носители: BD (Blu-ray Disc), ,Blu-ray 3D, ,BD-R, ,BD-Re, ,CD, ,CD-R, ,CD-RW, ,DVD, ,DVD R, ,DVD RW',
    url:"https://kaspi.kz/shop/p/lg-lhb655nk-2100099/?c=750000000#!/item",
  },
  {
    id: 9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hc2/51531524440094/viti-hdmi-vga-hdv600-101519581-1-Container.jpg",
    name:'Переходник ViTi HDMI - VGA HDV600',
    price: 1348,
    description:'тип: переходник разъемы: HDMI - VGA',
    url:"https://kaspi.kz/shop/p/perehodnik-viti-hdmi---vga-hdv600-101519581/?c=750000000#!/item",
  },
  {
    id: 10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/he1/33724839952414/kabel-ugreen-displayport-displayport-2-m-10211-101207849-1-Container.jpg",
    name:'Кабель Ugreen DisplayPort - DisplayPort 10211 2м черный',
    price: 4000,
    description:'тип: кабель разъемы: DisplayPort - DisplayPort длина кабеля: 2 м',
    url:"https://kaspi.kz/shop/p/kabel-ugreen-displayport---displayport-10211-2m-chernyi-101207849/?c=750000000#!/item",
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/