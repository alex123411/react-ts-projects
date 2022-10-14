export interface IWheel {
    title: string,
    insideImage: string,
    data: IWheelParts[],
    sum: number
}

export interface IWheelParts {
    id: number,
    title: string,
    value: string,
    color: string,
    deg: number,
    textDeg: number
}