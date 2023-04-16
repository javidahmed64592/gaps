export const valueInRange = (value, low, high) => {
  const tempValue = Math.max(low, parseInt(value));
  return Math.min(high, tempValue);
};

export const anyCommonElements = (phrase, poolValue) => {
  return phrase.split("").some((item) => poolValue.split("").includes(item));
};

export const setPoolRequired = (phrase, pool) => {
  const required = anyCommonElements(phrase, pool.value);
  return {
    ...pool,
    checked: required ? required : pool.checked,
    required: required,
  };
};
