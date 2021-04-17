import { TinyColor } from '@ctrl/tinycolor'

const toTinyColor = (color: string) => new TinyColor(color)

export const lighten = (color: string, amount: number) => toTinyColor(color).lighten(amount).toHexString()

export const tint = (color: string, amount: number) => toTinyColor(color).tint(amount).toHexString()