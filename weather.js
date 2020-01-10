(() => {
    document.getElementById("button").addEventListener("click", function () {

        let key = '63b2a661958d77b8b29b90594f74eb8f';
        let input = document.getElementById("run").value;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=' + key)
            .then((response)=> {
                return response.json();
            })

            .then( (data)=> {

                console.log(data);

            })
    });
});