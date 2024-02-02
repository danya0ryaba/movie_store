fetch('https://api.kinopoisk.dev/v1.4/movie?limit=100&page=1', {
    method: "GET",
    headers: {
        "X-API-KEY": "MSHPGE9-G12MQGY-J328FX0-0HC7G9A"
    },
})
    .then(response => response.json())
    .then(value => console.log(value))
export { }