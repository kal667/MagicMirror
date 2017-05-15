/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "D.C.",
				locationID: "4140963",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "0c91e2b65330e507b14020899614a7a5"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "D.C.",
				locationID: "4140963",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "69d8a81d97cb336cceb15ff4b88b7631"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'MMM-DCMetroTrainTimes',
			position: 'bottom_left',
			config: {
				wmata_api_key: 'd8ca3f628f364bc6b54bd024df5863bc',
				stationsToShowList: [ 'A03', 'E02' ],
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}