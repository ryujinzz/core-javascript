import { getNode } from "../dom";

//피보나치 메모이져이션

export const memo = (() => {
  const cache = {
    //key:value
  };

  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback();
  };
})();

memo("cube", () => getNode("#cube")); //setter
memo("cube"); //getter
