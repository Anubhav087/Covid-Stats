$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (responce) {
    console.log(responce.Countries);
    for (var i = 0; i < responce.Countries.length; i++) {
      var totalactive =
        responce.Countries[i].TotalConfirmed -
        responce.Countries[i].TotalRecovered;
      var tablerow = `<tr><td>${responce.Countries[i].Country} </td><td>${responce.Countries[i].TotalConfirmed}</td><td>${totalactive} </td><td>${responce.Countries[i].TotalRecovered}</td><td>${responce.Countries[i].TotalDeaths}</td></tr>`; //external javascript variable use ker shakte hain back tic ki madad se(interpolation concept---dolor symbol followed by  curly braces we use any external js variable)
      $("#tbody").append(tablerow);
    }
    $('#covidtable').DataTable()
  },
  error: function (error) {
    console.log(error);
  },
});
//Doller is symbol of jquery