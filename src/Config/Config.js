export const config = {
  base_URL: "http://api.weatherapi.com/v1",
  api_key: "c180cc1bafe4410d9ed70403232611",
  _city: null,
  get city() {
    return this._city;
  },
  set city(value) {
    this._city = value;
  },
  _days: 1,
  get days() {
    return this._days;
  },
  set days(value) {
    this._days = value;
  },
  _aqi: "no",
  get aqi() {
    return this._aqi;
  },
  set aqi(value) {
    this._aqi = value;
  },
  _alerts: "no",
  get alerts() {
    return this._alerts;
  },
  set alerts(value) {
    this._alerts = value;
  },
  _date: null,
  get date() {
    return this._date;
  },
  set date(value) {
    this._date = value;
  },

  type: {
    current_weather: "/current.json",
    forecast: "/forecast.json",
    future: "/future.json",
    astronomy: "/astronomy.json",
  },

  get_URLS: {
    get_current: function (city, aqi) {
        config.city = city;
        aqi && (config.aqi = aqi)
      return (
        config.base_URL + config.type.current_weather + "?key=" + config.api_key + "&q=" + config.city + "&aqi=" + config.aqi
      );
    },
    get_forecast: function ( city, days, aqi, alerts) {
        config.city = city;
        config.days = days;
        aqi && (config.aqi = aqi)
        alerts && (config.alerts = alerts)
      return config.base_URL + config.type.forecast + "?key=" + config.api_key + "&q=" + config.city + '&days=' + config.days + '&aqi=' + config.aqi + '&alerts=' + config.alerts
      },
    get_future: function (city, date) {
        config.city = city;
        config.date = date;
      return config.base_URL + config.type.future + "?key=" + config.api_key + "&q=" + config.city + "&dt=" + config.date;
    },
    get_astronomy: function (city, date) {
      config.city = city;
      config.date = date;
      return (
        config.base_URL + config.type.astronomy + "?key=" + config.api_key + "&q=" + config.city + "&dt=" + config.date
      );
    },
  },
};
// http://api.weatherapi.com/v1/current.json?key=c180cc1bafe4410d9ed70403232611&q=shiraz&aqi=yes
// http://api.weatherapi.com/v1/forecast.json?key=c180cc1bafe4410d9ed70403232611&q=shiraz&days=1&aqi=no&alerts=no
// http://api.weatherapi.com/v1/future.json?key=c180cc1bafe4410d9ed70403232611&q=shiraz&dt=2023-12-27
// http://api.weatherapi.com/v1/astronomy.json?key=c180cc1bafe4410d9ed70403232611&q=shiraz&dt=2023-11-26
