(() => {
    document.getElementById("button").addEventListener("click", function () {

        let key = '63b2a661958d77b8b29b90594f74eb8f';
        let input = document.getElementById("city").value;
        let input2 = document.getElementById("country").value;
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input+','+input2+'&units=metric&APPID=' + key)
            .then((response)=> {
                return response.json();
            })

            .then( (data)=> {

                console.log(data);
                document.getElementById("weather").innerHTML=data.list[0].main.temp+'°C';
            })
    });
})();
