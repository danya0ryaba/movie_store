type UniversalType = { value: string }

type MovieType = {
    alternativeName: string | null
    description: string | null
    enProfession: string
    general: boolean
    id: number
    name: string | null
    rating: number | null
}

type SpousesType = {
    children: number,
    divorced: boolean,
    id: number
    name: null
    relation: string
}

interface Person {
    age: number,
    birthPlace: UniversalType[],
    birthday: Date,
    countAwards: number,
    createdAt: Date,
    death: null | Date,
    deathPlace: UniversalType[],
    enName: string,
    facts: UniversalType[],
    growth: number,
    id: number,
    isParse?: boolean,
    movies: MovieType[],
    name: string,
    photo: string,
    profession: UniversalType[],
    sex: string,
    spouses: SpousesType[],
    updatedAt: Date
}

export type PersonI = Partial<Person> 