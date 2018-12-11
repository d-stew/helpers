export enum FontWeight {
  Light = '200',
  Regular = '400',
  Semibold = '500',
  Bold = '600',
  Heavy = '700',
  ExtraHeavy = '800',
  Inherit = 'inherit',
}

export enum FontStyle {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
  Inherit = 'inherit',
}

export type TextProps = {
  weight?: FontWeight
  color?: string
  level?: number
  fontStyle?: FontStyle
  slash?: boolean
  backgroundColor?: string
  showArrow?: boolean
}

export type HeadingProps = TextProps & {
  displayLevel?: number
}

export type FontSizes = {
  [key: string]: string
  level1: string
  level2: string
  level3: string
  level4: string
  level5: string
  level6: string
}

export type FontMetrics = {
  weight: {
    regular: string
    semibold: string
    bold: string
    heavy: string
    extraHeavy: string
  }
  size: {
    [key: string]: FontSizes
    mobile: FontSizes
    desktop: FontSizes
  }
}

export const light = '200'
export const regular = '400'
export const bold = '500'
export const semibold = '600'
export const heavy = '700'
export const extraHeavy = '800'

const deriveFontSizes = (base: number, sizes: Array<number>) =>
  sizes.reduce((acc: { [key: string]: string }, size: number, idx: number) => {
    acc[`level${idx + 1}`] = `${size / base}rem`

    return acc
  }, {}) as FontSizes

export const fontMetrics: FontMetrics = {
  weight: { regular, semibold, bold, heavy, extraHeavy },
  size: {
    mobile: deriveFontSizes(16, [28, 23, 19, 16, 13, 11]),
    desktop: deriveFontSizes(18, [48, 40, 24, 20, 16, 14]),
  },
}

export const getFontSize = (layout: string) => ({ level, displayLevel }: HeadingProps): string =>
  fontMetrics.size[layout][`level${displayLevel || level}`] || 'inherit'