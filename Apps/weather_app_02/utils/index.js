export const toDegreeCelsius = temperatureInFahrenheit => {
  return ((temperatureInFahrenheit - 32) * 0.55).toFixed(2);
};
