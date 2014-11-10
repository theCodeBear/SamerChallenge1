// 11/10/14 Samer Challenge

// Use the HTML to reverse-engineer a JOSN data object that describes the data (the dynamic info in the table)
// Use Handlebars with jQuery to output the same table above using the data object in step 1
// Use a Handlebars helper with accounting.js to output the population
// Use a conditional or helper to figure out which color to use.

$(function() {

var dataObj = { 
  items: [
    {Country_Code: "BY", Country_Name: "Belarus", Population: 9685000, "English?": false},
    {Country_Code: "BZ", Country_Name: "Belize", Population: 314522, "English?": true},
    {Country_Code: "CA", Country_Name: "Canada", Population: 33679000, "English?": true},
    {Country_Code: "CC", Country_Name: "Cocos [Keeling] Islands", Population: 628, "English?": true},
    {Country_Code: "CD", Country_Name: "Democratic Republic of the Congo", Population: 70916439, "English?": false},
    {Country_Code: "CF", Country_Name: "Central African Republic", Population: 4844927, "English?": false},
    {Country_Code: "CG", Country_Name: "Republic of the Congo", Population: 3039126, "English?": false},
    {Country_Code: "CH", Country_Name: "Switzerland", Population: 7581000, "English?": false},
  ]
}

var source   = $("#country-template").html();
var template = Handlebars.compile(source);


var refreshCountries = function(context) {
  // go through each Population key and format the number to have commas
  context.items.forEach(function(country) {
    country.Population = accounting.formatNumber(country.Population);
  });

  var html = template(context);
  $("#country-info").html(html);
};

Handlebars.registerHelper('if', function(conditional, options) {
  if (conditional) {

  }
});


refreshCountries(dataObj);

});

