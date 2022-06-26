$.ajax({
    type: 'get',
    url : 'https://api.covid19api.com/summary',
    success : function(res){
        for(var i=0;i<res.Countries.length;i++){
            var active = res.Countries[i].TotalConfirmed - res.Countries[i].TotalRecovered
            var tablerow =  `<tr> <td>${res.Countries[i].Country}</td> <td>${res.Countries[i].TotalConfirmed}</td> <td>${active}</td> <td>${res.Countries[i].TotalRecovered}</td> <td>${res.Countries[i].TotalDeaths}</td><tr>`
            $('#tbody').append(tablerow)
        }
        $('#covidtable').DataTable()
    },
    error : function(error){
        console.log(error)
    }
})
