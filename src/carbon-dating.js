const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = (0,693 / HALF_LIFE_PERIOD);

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string' && !isNaN(sampleActivity) && +sampleActivity > 0) {
    let t = (Math.log(MODERN_ACTIVITY / +sampleActivity) / k) * 1000;
    return t > 0 ? +Math.ceil(t) : false; 
  } 
  return false;
}
