export type TipoCosas = {
    value : string,
    name: string
}

export const Tipos : TipoCosas[] = [
    {
        name: "Supermercado",
        value: "Supermercado"
    },
    {
        name: "Verduleria",
        value: "Verduleria"
    },
    {
        name: "Carniceria",
        value: "Carniceria"
    },
    {
        name: "Panaderia",
        value: "Panaderia"
    },
    {
        name: "Farmacia",
        value: "Farmacia"
    },
    {
        name: "Otros",
        value: "Otros"
    },
]

export type Cosas = {
    id: string
    name : string
    tipo : string
    isCompleted : boolean
}

export type SectionCosas = {
    title : string
    data: Cosas[]
}
