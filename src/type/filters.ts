export type FiltersType = {
    readonly filtersObject: { [key: string]: string },
    readonly onChangeFilter: (value: string) => void
    readonly currentFilter: string
}