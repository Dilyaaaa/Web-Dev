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
    image:" ",
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    url:"",
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/