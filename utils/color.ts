import {TinyColor} from "@ctrl/tinycolor"

const toTinyColor = (color: string) => new TinyColor(color)

export function lighten(color: string, amount: number): string {

    return toTinyColor(color).lighten(amount).
        toHexString()

}

export function tint(color: string, amount: number): string {

    return toTinyColor(color).tint(amount).
        toHexString()

}
