const greyvineColors = {
    white: '#ffffff',
    lightBlue: 'rgba(61,85,204,1)',
    darkBlue: 'rgba(0,42,127,1)',
    darkestBlue: 'rgba(0,22,37,1)'
}

export const defaultTheme = {
    colors: {
        invertText: greyvineColors.white,
        primary: greyvineColors.darkBlue,
        headerBackground: greyvineColors.lightBlue,
        footerBackground: greyvineColors.darkestBlue,
        primaryGradient: `linear-gradient(to bottom, ${greyvineColors.lightBlue} 1%, ${greyvineColors.darkBlue} 100%)`
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
    X8: '0.25rem'
}

export const FontSize = {
    XS: '1rem',
    S: '1.5rem',
    XL: '2rem',
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