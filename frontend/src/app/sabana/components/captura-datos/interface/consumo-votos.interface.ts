export interface ConsumoVotosInterface {
    partidos:     string;
    totalPartios: TotalPartidos[];
}

export interface TotalPartidos {
    tipoEleccion:  TipoEleccion;
    nombrePartido: string;
    image:         string;
}

export enum TipoEleccion {
    F = "F",
    PriPanPrd = "PRI-PAN-PRD",
}
