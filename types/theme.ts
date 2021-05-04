import {defaultTheme} from "@components/styles/config"

export type DefaultTheme = typeof defaultTheme
export type ThemeColorType = keyof DefaultTheme["colors"]

export type Theme = {
    colors: {
        [key in ThemeColorType]: string
    }
}
