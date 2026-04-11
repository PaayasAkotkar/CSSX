// @ copyright 2026
export namespace CSSMaths {
    // GenerateClamp returns the clamp value based on params
    // targetPx: figma px or any as per your desired resp
    // baseDimension: display dim width 
    // baseZoom: clamping the value on based width of the display zoom
    // unit: any css unit prefered: -> rem, vh, vw, px
    // minRatio: resp zoom ratio
    // maxRatio: resp zoom ratio
    // baseDimensionH: display dm height
    // baseZoomH: same as baseZoom but for height
    // how things work is that you 
    export function GenerateClamp(
        targetPx: number,
        baseDimension: number,
        baseZoom: number,
        unit: string = 'vw',
        minRatio: number,
        maxRatio: number,
        baseDimensionH?: number,
        baseZoomH?: number,
    ): string {
        const isHeightUnit = unit === 'vh'

        const activeDimension = isHeightUnit ? (baseDimensionH ?? baseDimension) : baseDimension
        const activeZoom = isHeightUnit ? (baseZoomH ?? baseZoom) : baseZoom

        const virtualBase = activeDimension / activeZoom
        const dynamicV = (targetPx / virtualBase) * 100

        const min = (dynamicV * minRatio).toFixed(4)
        const mid = dynamicV.toFixed(4)
        const max = (dynamicV * maxRatio).toFixed(4)

        return `clamp(${min}${unit}, ${mid}${unit}, ${max}${unit})`
    }
}


