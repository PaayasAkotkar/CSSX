export interface ButtonVariant {
    width: number
    height: number
    fontSize: number
}

export interface CircleButtonVariant {
    size: number
    fontSize: number
}

export interface ButtonScaleToken {
    xxxl: ButtonVariant
    xxl: ButtonVariant
    xl: ButtonVariant
    large: ButtonVariant
    medium: ButtonVariant
    small: ButtonVariant
    xs: ButtonVariant
    xxs: ButtonVariant
    xxxs: ButtonVariant

}

export interface CircleButtonScaleToken {
    xxxl: CircleButtonVariant
    xxl: CircleButtonVariant
    xl: CircleButtonVariant
    large: CircleButtonVariant
    medium: CircleButtonVariant
    small: CircleButtonVariant
    xs: CircleButtonVariant
    xxs: CircleButtonVariant
    xxxs: CircleButtonVariant
    xxxxs: CircleButtonVariant

}

export interface AllButtonSizes {
    squareBtn: ButtonScaleToken
    navBtn: ButtonScaleToken
    circleBtn: CircleButtonScaleToken
    rainbowBtn: CircleButtonScaleToken
    roundBtn: CircleButtonScaleToken
    rectBtn: ButtonScaleToken
}
export const buttons: AllButtonSizes = {
    squareBtn: {
        xxxl: { width: 960, height: 960, fontSize: 226 },
        xxl: { width: 760, height: 760, fontSize: 178 },
        xl: { width: 600, height: 600, fontSize: 140 },
        large: { width: 480, height: 480, fontSize: 112 },
        medium: { width: 400, height: 400, fontSize: 94 },
        small: { width: 320, height: 320, fontSize: 75 },
        xs: { width: 240, height: 240, fontSize: 56 },
        xxs: { width: 70, height: 70, fontSize: 37 },
        xxxs: { width: 50, height: 32, fontSize: 20 },

    },
    navBtn: {
        // top nav buttons — wide enough to fit icon + label
        xxxl: { width: 480, height: 192, fontSize: 120 },
        xxl: { width: 380, height: 152, fontSize: 95 },
        xl: { width: 300, height: 120, fontSize: 75 },
        large: { width: 240, height: 96, fontSize: 60 },
        medium: { width: 200, height: 80, fontSize: 50 },
        small: { width: 160, height: 64, fontSize: 40 },
        xs: { width: 120, height: 48, fontSize: 30 },
        xxs: { width: 70, height: 70, fontSize: 37 },
        xxxs: { width: 30, height: 12, fontSize: 20 },
    },
    rectBtn: {
        xxxl: { width: 960, height: 320, fontSize: 160 },
        xxl: { width: 760, height: 253, fontSize: 126 },
        xl: { width: 600, height: 200, fontSize: 100 },
        large: { width: 480, height: 160, fontSize: 80 },
        medium: { width: 400, height: 133, fontSize: 66 },
        small: { width: 320, height: 106, fontSize: 53 },
        xs: { width: 240, height: 80, fontSize: 40 },
        xxs: { width: 120, height: 40, fontSize: 36 },
        xxxs: { width: 80, height: 32, fontSize: 20 },
    },
    circleBtn: {
        xxxl: { size: 640, fontSize: 320 },
        xxl: { size: 500, fontSize: 250 },
        xl: { size: 392, fontSize: 196 },
        large: { size: 314, fontSize: 157 },
        medium: { size: 254, fontSize: 127 },
        small: { size: 200, fontSize: 100 },
        xs: { size: 144, fontSize: 72 },
        xxs: { size: 96, fontSize: 46 },
        xxxs: { size: 60, fontSize: 15 },
        xxxxs: { size: 30, fontSize: 15 },

    },
    rainbowBtn: {
        xxxl: { size: 640, fontSize: 320 },
        xxl: { size: 500, fontSize: 250 },
        xl: { size: 392, fontSize: 196 },
        large: { size: 314, fontSize: 157 },
        medium: { size: 254, fontSize: 127 },
        small: { size: 200, fontSize: 100 },
        xs: { size: 144, fontSize: 72 },
        xxs: { size: 96, fontSize: 48 },
        xxxs: { size: 50, fontSize: 25 },
        xxxxs: { size: 30, fontSize: 15 },
    },
    roundBtn: {
        xxxl: { size: 640, fontSize: 320 },
        xxl: { size: 500, fontSize: 250 },
        xl: { size: 392, fontSize: 196 },
        large: { size: 314, fontSize: 157 },
        medium: { size: 54, fontSize: 127 },
        small: { size: 200, fontSize: 100 },
        xs: { size: 144, fontSize: 72 },
        xxs: { size: 96, fontSize: 48 },
        xxxs: { size: 50, fontSize: 25 },
        xxxxs: { size: 30, fontSize: 15 },

    },
}

export function useButtonSizes(): AllButtonSizes {
    return buttons
}