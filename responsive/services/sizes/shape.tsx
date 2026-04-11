

export interface SizeVariant {
    width: number
    height: number
}

export interface ShapeSizeToken {
    xxxl: SizeVariant
    xxl: SizeVariant
    xl: SizeVariant
    large: SizeVariant
    medium: SizeVariant
    small: SizeVariant
    xs: SizeVariant
    xxs: SizeVariant
    xxxs: SizeVariant
}

export interface CircleSizeToken {
    xxxl: number
    xxl: number
    xl: number
    large: number
    medium: number
    small: number
    xs: number
    xxs: number
}

export interface AllShapeSizes {
    rectangle: ShapeSizeToken
    square: ShapeSizeToken
    circle: CircleSizeToken
}
export const shapes: AllShapeSizes = {
    rectangle: {
        xxxl: { width: 2420, height: 1280 },
        xxl: { width: 2000, height: 770 },
        xl: { width: 1200, height: 420 },
        large: { width: 900, height: 340 },
        medium: { width: 640, height: 240 },
        small: { width: 420, height: 150 },
        xs: { width: 260, height: 90 },
        xxs: { width: 150, height: 52 },
        xxxs: { width: 85, height: 40 },
    },
    square: {
        xxxl: { width: 960, height: 960 },
        xxl: { width: 750, height: 750 },
        xl: { width: 560, height: 560 },
        large: { width: 400, height: 400 },
        medium: { width: 280, height: 280 },
        small: { width: 180, height: 180 },
        xs: { width: 110, height: 110 },
        xxs: { width: 60, height: 60 },
        xxxs: { width: 40, height: 40 },
    },
    circle: {
        xxxl: 960,
        xxl: 750,
        xl: 560,
        large: 400,
        medium: 280,
        small: 180,
        xs: 110,
        xxs: 60,
    },
}

export function useShapeSizes(): AllShapeSizes {
    return shapes
}