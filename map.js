import { PLACES } from "/logistic/const.js";
import { ORDERS } from "/logistic/current_orders.js";

let clickedIcon = L.icon({
  iconUrl: "/logistic/icons/taped.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
let cooledIcon = L.icon({
  iconUrl: "/logistic/icons/cold.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
let defaultIcon = L.icon({
  iconUrl: "/logistic/icons/common.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

let map = L.map("map", { attributionControl: false }).setView(
  [55.7558, 37.6137],
  13
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 30,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
for (const place of PLACES) {
  let marker = L.marker(place.coordinates, { icon: place.icon }).addTo(map);
  marker.bindPopup(place.name).openPopup();
}
for (const [i, order] of ORDERS.entries()) {
  let icon = defaultIcon;
  if (order.cold_conditions) {
    icon = cooledIcon;
  }
  let marker = L.marker(order.coors_from, { icon: icon }).addTo(map);
  let marker_obj = {
    marker: marker,
    icon: icon,
    isPrepared: false,
    inGroup: false,
    isCold: order.cold_conditions,
    remove: () => {
      map.removeLayer(marker);
    },
    place: () => {
      marker.addTo(map);
    },
    unprepare: () => {
      marker_obj.isPrepared = false;
      marker.setIcon(icon);
      PREPARED_FOR_TRAIL_ORDERS.delete(i);
    },
    prepare: () => {
      marker_obj.isPrepared = true;
      marker.setIcon(clickedIcon);
      PREPARED_FOR_TRAIL_ORDERS.set(i, order);
    },
    // update: () => {},
  };
  MARKER_ICON_PAIRS.set(i, marker_obj);
  let popup_text =
    order.addres_from +
    "<br/>вес: " +
    order.weight_sum +
    " кг" +
    "<br/>объём: " +
    order.volume_sum +
    " м³<br/>" +
    order.product_type;
  marker.bindPopup(popup_text).openPopup();
  marker.on("click", function () {
    if (PREPARED_FOR_TRAIL_ORDERS.has(i)) {
      marker_obj.unprepare();
    } else {
      marker_obj.prepare();
    }
    update_all();
  });
}
