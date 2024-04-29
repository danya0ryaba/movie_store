export const filteringValues: { [key: string]: string } = {
    "По российским сборам": "fees.russia.value",
    "По рейтингу критиков": "rating.filmCritics",
    "По рейтингу российских критиков": "rating.russianFilmCritics",
    "топ 250": "top250",
    "По мировым сборам": "fees.world.value",
    "По количеству зрителей": "audience.count",
    "По оценкам imdb": "votes.imdb",
}


// rating.russianFilmCritics      по реутингу российских критиков (ru)
// rating.imdb                    по рейтигу imdb
// top250                         по top250
// fees.russia.value              по сборам в россии
// fees.usa.value                 по сборам в сша
// fees.world.value               по мировым сборам
// rating.filmCritics             по отзывам кинокритиков
// votes.imdb                     по голосам на imdb
// audience.count                 по количество зрителей