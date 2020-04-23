import '@emotion/react'
import { Theme as GreyvineTheme } from '@greyvine/types' 

declare module '@emotion/react' {
    export interface Theme extends GreyvineTheme {}
}