import { lighten } from 'utils'

const greyvineColors = {
    white: '#ffffff',
    grey: '#aaa',
    ceruleanBlue: 'rgba(61,85,204,1)',
    darkBlue: 'rgba(0,42,127,1)',
    richBlackFogra29: 'rgba(0,22,37,1)',
    darkGreen: 'rgb(30, 70, 32)',
    lightSeaGreen: '#00A9A5',
    hotPink: 'rgb(252, 109, 171)',
    magenta: '#C60F7B'
}

export const defaultTheme = {
    colors: {
        buttonBackground: greyvineColors.ceruleanBlue,
        invertText: greyvineColors.white,
        primary: greyvineColors.darkBlue,
        headerBackground: greyvineColors.ceruleanBlue,
        footerBackground: greyvineColors.richBlackFogra29,
        primaryGradient: `linear-gradient(to bottom, ${greyvineColors.ceruleanBlue} 1%, ${greyvineColors.darkBlue} 100%)`,
        inputBorder: greyvineColors.grey,
        successText: greyvineColors.lightSeaGreen,
        successBackground: lighten(greyvineColors.lightSeaGreen, 80),
        errorText: greyvineColors.hotPink,
        errorBackground: lighten(greyvineColors.hotPink, 40)
    }
}

export const Height = {
    siteHeader: '4rem',
    cover: '24rem',
    largeLogo: '5rem'
}

export const Space = {
    X4: '5rem',
    X5: '1rem',
    X6: '0.5rem',
    X7: '0.3rem',
    X8: '0.25rem',
    X9: '0.08rem'
}

export const FontSize = {
    XXS: '0.9rem',
    XS: '1rem',
    S: '1.5rem',
    XL: '2rem',
    XL2: '3rem',
    XXL: '8rem'
}

const zIndexList = [
    'site-header',
] as const
  
export type ZIndexName = typeof zIndexList[number] | 'negative'

export const zIndex = (name: ZIndexName) => {
    if (name === 'negative') return -1
    const targetIndex = zIndexList.indexOf(name)
    return zIndexList.length - targetIndex
}