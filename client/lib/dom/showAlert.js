import { getNode } from "./getNode.js";
import { removeClass } from "./css.js";
import { addClass } from "./css.js";
import { isString } from "../utils/typeOf.js";

/**
 *
 * @param {HTMLElement | string} node
 * @param {string} message
 * @param {number} timeOut
 * @return void
 */

export function showAlert(node, message, timeOut = 1000) {
  if (isString(node)) {
    node = getNode(node);
  }
  node.textContent = message;
  addClass(node, "is-active");
  setTimeout(() => {
    removeClass(node, "is-active");
  }, timeOut);
}
