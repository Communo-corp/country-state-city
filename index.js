var countryList = require("./lib/country.json")
var stateList = require("./lib/state.json")
var cityList = require("./lib/city.json")

var country_state_city = {
	getCountryById: function(id) {
		var country = countryList.filter(function(data) {
			return data.id == id
		})
		return country[0];
	},
	getStateById: function(id) {
		var state = stateList.filter(function(data) {
			return data.id == id
		})
		return state[0];
	},
	getCityById: function(id) {
		var city = cityList.filter(function(data) {
			return data.id == id
		})
		return city[0];
	},
	getStatesOfCountry: function(countryId) {
		var states = stateList.filter(function(value, index) {
			return value.country_id == countryId
		})
		return states
	},
	getCitiesOfState: function(stateId) {
		var cities = cityList.filter(function(value, index) {
			return value.state_id == stateId
		})
		return cities
	},
	getAllCountries: function() {
		return countryList;
	}

}

module.exports = country_state_city;