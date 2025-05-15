export const train_icon = L.icon({
  iconUrl: "/logistic/icons/3.jpg",
  iconSize: [30, 21],
});

export const port_icon = L.icon({
  iconUrl: "/logistic/icons/2.jpg",
  iconSize: [30, 30],
});

export const warehouse_icon = L.icon({
  iconUrl: "/logistic/icons/1.jpg",
  iconSize: [30, 30],
});
export const flag_icon = L.icon({
  iconUrl: "/logistic/icons/point_last.png",
  iconSize: [30, 30],
  iconAnchor: [0, 30],
});

export const PLACES = [
  { coordinates: [59.929276, 29.689167], name: "Порт", icon: port_icon },
  { coordinates: [56.125781, 37.458876], name: "Жд станция", icon: train_icon },
  { coordinates: [55.918953, 37.815211], name: "Склад", icon: warehouse_icon },
  {
    coordinates: [54.63546175136477, 19.921010494174357],
    name: "порта Балтийск",
    icon: flag_icon,
  },
  {
    coordinates: [54.62765825817825, 21.830097590807952],
    name: "ЖД станция Черняховск",
    icon: flag_icon,
  },
];

export const DESTINATION_POINT_MAP = {
  1: "Порт",
  2: "Жд станция",
  3: "Склад",
};
export const OPERATION_TYPE_MAP = {
  1: "Доехать до КЛД по ЖД",
  2: "Доплыть до КЛД по морю",
  3: "Без операций",
  4: "Доехать до порта",
  5: "Дозагрузиться в контейнер в порту",
  6: "Доехать до жд станции",
  7: "Доехать до склада",
  8: "Доехать до портового склада",
};
// export const PRODUCTS = [
//   { id: 1, coordinates: [56.1428, 40.3896], name: "Владимир<br/>груз: 500 кг" },
//   { id: 1, coordinates: [56.1168, 47.2628], name: "Чебоксары<br/>груз: 1000 кг" },
//   { id: 1, coordinates: [55.7879, 49.1233], name: "Казань<br/>груз: 100 кг" },
//   // { coordinates: [56.125781, 37.458876], name: "Жд станция" },
//   // { coordinates: [55.918953, 37.815211], name: "Склад" },
// ];
// export const PRODUCT_BY_ID = {};

// for (const product of PRODUCTS) {
//   PRODUCT_BY_ID[product.id] = product
// }
