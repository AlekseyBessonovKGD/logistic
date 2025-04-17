import { DESTINATION_POINT_MAP, OPERATION_TYPE_MAP } from "/logistic/const.js";

export function getInputs() {
  let selectDesctinationPoint = document.getElementById(
    "select-destination-point"
  );
  let selectOperationType = document.getElementById("select-operation-type");
  let inputGroupPrice = document.getElementById("input-group-price");
  if (selectDesctinationPoint.value === "0") {
    return null;
  }
  if (selectOperationType.value === "0") {
    return null;
  }
  let groupPrice = Number(inputGroupPrice.value);
  if (groupPrice === 0) {
    return null;
  }
  return [
    DESTINATION_POINT_MAP[selectDesctinationPoint.value],
    OPERATION_TYPE_MAP[selectOperationType.value],
    groupPrice,
  ];
}

window.getInputs = getInputs;
