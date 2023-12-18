function insertBefore(node, text) {
  if (typeof node === "string") node = getNode(node);
  node.insertAdjacentHTML("beforbegin", text);
}
function insertFirst(node, text) {
  if (typeof node === "string") node = getNode(node);
  node.insertAdjacentHTML("afterbegin", text);
}

function insertAfter(node, text) {
  if (typeof node === "string") node = getNode(node);
  node.insertAdjacentHTML("afterend", text);
}

function insertLast(node, text) {
  if (typeof node === "string") node = getNode(node);

  node.insertAdjacentHTML("beforeend", text);
}
