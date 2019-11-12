const fs = require('fs');

const rawCountries = require('../lib/country.json');
const rawStates = require('../lib/state.json');
const rawCities = require('../lib/city.json');

// country:   { id: '1', sortname: 'AF', name: 'Afghanistan', phonecode: '93' },
// state:     { id: '1', name: 'Andaman and Nicobar Islands', country_id: '101' },
// city:      { id: '1', name: 'Bombuflat', state_id: '1' },

const countryMap = {};
rawCountries.forEach((e) => (countryMap[e.id] = e.name));
const stateMap = {};
rawStates.forEach((e) => {
  if (countryMap[e.country_id]) {
    stateMap[e.id] = [countryMap[e.country_id], e.name];
  } else {
    console.log('WARNING: bad country', e);
  }
});
const cities = rawCities.map((e) => {
  if (stateMap[e.state_id]) {
    return [...stateMap[e.state_id], e.name];
  } else {
    console.log('WARNING: bad state', e);
  }
});

// console.log(
//   'countries',
//   rawCountries,
//   'states',
//   rawStates,
//   'cities',
//   rawCities
// );

// console.log(countryMap);
// console.log(stateMap);
console.log(cities);
let buffer = [];
cities.forEach((e) => buffer.push(e));
fs.writeFileSync('./lib/combined.csv', buffer.sort().join('\n'));
