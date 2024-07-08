const useMemo = (callback) => {
  const cache = new Map();
  if (cache.has("memo")) {
    return cache.get("memo");
  } else {
    cache.set("memo", callback());
  }
  return cache;
};
