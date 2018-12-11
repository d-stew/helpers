export const hexToRgba = (hex: string, alpha: number) => {
  const r = hex.substr(1, 2)
  const g = hex.substr(3, 2)
  const b = hex.substr(5, 2)

  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`
}

// Base colors
export const black = '#000000'
export const charcoal = '#1E1E1E'
export const gray = '#B2B2B2'
export const ice = '#F5F7FA'
export const ash = '#404040'
export const white = '#FFFFFF'
export const magenta = '#FF049D'
export const orchid = '#E148FF'
export const neonBlue = '#00CAFF'
export const babyBlue = '#8DFAE5'
export const aqua = '#00FFDC'
export const highlighter = '#E8FF00'
export const tangerine = '#FFBE00'
export const red = '#FF0069'
export const yellow = '#FFE156'
export const green = '#00FF9D'

// Gradients
export const darkBackgroundGradient = `linear-gradient(to right, ${black} 0%, #1C0E1F 100%)`
export const lightBackgroundGradient = `linear-gradient(to right, ${black} 0%, #39243D 100%)`

export const blackFadeGradientTD = `linear-gradient(to bottom, ${black} 0%,${hexToRgba(black, 0)} 100%)`
export const blackFadeGradientBU = `linear-gradient(to top, ${black} 0%,${hexToRgba(black, 0)} 100%)`
export const whiteFadeGradientTD = `linear-gradient(to bottom, ${white} 0%,${hexToRgba(white, 0)} 100%)`
export const whiteFadeGradientBU = `linear-gradient(to top, ${white} 0%,${hexToRgba(white, 0)} 100%)`

// Stateful colors
export const blackActive = '#303030'
export const whiteActive = '#E9ECF2'