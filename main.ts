
// this library is created to work with figma
// you dont have to do any further ccalualtion just put the x*y in the formula
export namespace CSSMaths {

    // IncreaseBy returns the value for further investigation based on percentage
    // perc: percentage to calculate on
    // size: current size meaning the full screen is 100 so 100
    export function IncreaseBy(perc: number, size: number = 100) {
        return 1 + (perc / size)
    }

    // DecreaseBy returns the value for further investigation based on percentage
    // perc: percentage to calculate on
    // size: current size meaning the full screen is 100 so 100
    export function DecreaseBy(perc: number, size: number = 100) {
        return 1 - (perc / size)
    }

    // RaiseBy returns the new width and height on privded pixelss
    // perc: it is cruical to either use the IncreaseBy method or DecreaseBy method to get perfect perc or pass calculated percentage
    export function RaiseBy(width: number, height: number, perc: number): { w: number, h: number } {
        var co = IncreaseBy(perc)
        return { w: width * co, h: height * co }
    }

    // ReduceBy returns the new width and height on privded pixelss
    export function ReduceBy(width: number, height: number, perc: number): { w: number, h: number } {
        var co = DecreaseBy(perc)
        return { w: width * co, h: height * co }
    }

    // ConvertPxToViewport returns the viewport value either for vh or vw
    // px: model's width  [model=either pc, mobile or tablet]
    // base: model' height  
    // for example: for the height 1080 will be 96.3 and 1920 width will be 27.5
    //                     than you can just put the 96.3vh and 27.5vw
    export function ConvertPxToViewport(px: number, base: number): number {
        const viewport = Math.round((px / base) * 100)
        return Number(viewport.toFixed(2))
    }

    // GenerateZoomMultiplier returns the zoom multiplier for the provided zoom level
    // zoomLevel: zoom level
    // for example: 0.67 for 67% is your base view layout than will return 1.5 scale factor that can be use to calc the base width and base height that can be come out
    export function GenerateZoomMultiplier(zoomLevel: number): number {
        if (zoomLevel === 0) return 1;
        return 1 / zoomLevel;
    }

    // GenerateClamp returns the clamp value for the provided px
    // targetPx: max px to shrink
    // base: targeting model 
    // baseZoom: the model's view suppose 67% zoom is default than 67; this is provided so that it can calc directly passed figma values
    // unit: either vh or px or any
    // minRatio: to keep the min px to shrink
    // growthFactor: to keep the max px to grow
    // for example: first the px to viewport is converted than the css clamp function is returned keeping the min and max as it is 
    // @TIP: use the maxPx same as targetPx 
    // @TIP: you can also put the figma original value too make sure that components created in the decent frame also try to calc the base is imp which will decide the change factor
    // @TIP: the base for height will be the height model and vice versa 
    //            suppose the comp created and  its height is 100 for the desktop 1920 x 1080 than base will be 1080 for height and 1920 base will be for the width
    // @NOTE: not to pass the param using the generateZoomMultiplier else it will not work as excepted
    export function lazyGenerateClamp(
        targetPx: number, // Use Figma value
        base: number,
        baseZoom: number,
        unit: string = 'vw',
        minRatio: number = 0.65, // 65% of original size is usually the "sweet spot"
        growthFactor: number = 1.0, // neutral
    ): string {
        const multiplier = GenerateZoomMultiplier(baseZoom);
        const virtualBase = base * multiplier;

        // Auto-calculate Max: Your original Figma size
        const maxPx = targetPx;

        // Auto-calculate Min: A percentage of your original size
        // Example: 36.73 * 0.65 = ~23.8px
        const minPx = Number((targetPx * minRatio).toFixed(2));

        const dynamicValue = ConvertPxToViewport(targetPx * growthFactor, virtualBase);

        return `clamp(${minPx}px, ${dynamicValue}${unit}, ${maxPx}px)`;
    }

    // GenerateClamp returns the clamp value for the provided px
    // same as lazyGenerateClamp except this allows custom min and max control
    export function GenerateClamp(
        targetPx: number,           // Figma Value (e.g., 36.73)
        baseDimension: number,      // 1920 or 1080
        baseZoom: number,           // 0.67
        unit: string = 'vw',
        counterScale: number = 1.0, // 1 / currentBrowserZoom
        minPercent: number = 0.65,  // Default: can shrink to 65% of Figma size
        maxPercent?: number         // Optional: e.g., 1.5 for 150% of Figma size
    ): string {
        const zoomMultiplier = 1 / baseZoom;
        const virtualBase = baseDimension * zoomMultiplier;

        // 1. Calculate dynamic boundaries based on percentages
        const finalMin = targetPx * minPercent;

        // 2. Logic for Max:
        // If you want "Constant Visual Size", the Max must grow with counterScale.
        // If you provide a custom maxPercent, we use that as a hard ceiling.
        const autoMax = targetPx * counterScale;
        const finalMax = maxPercent !== undefined ? (targetPx * maxPercent) : autoMax;

        // 3. Viewport Ratio
        const dynamicValue = (targetPx / virtualBase) * 100;

        return `clamp(${finalMin}px, calc(${dynamicValue}${unit} * ${counterScale}), ${finalMax}px)`;
    }
    // FormatTime returns the separate min and sec from seconds 
    // for example: 160 seconds will be 3:00 where 3 is min 0 is seconds
    export function FormatTime(seconds: number): { min: number, sec: number } {
        const min = Math.floor(seconds / 60)
        const sec = seconds % 60
        return { min, sec }
    }

    export const GridPattern = {
        DIAMOND_THIN: [1, 2],
        DIAMOND_WIDE: [2, 3],
        HEXAGON: [2, 3],
        TRIANGLE: [1, 2, 3, 4],
        INVERTED_TRIANGLE: [4, 3, 2, 1],
        HOURGLASS: [3, 2, 1, 2, 3],
        BRICK: [3],
    }
    export type GridPatternType = keyof typeof GridPattern;

    // GenerateGridPattern returns the 2d array of items to staggered
    // items: images to staggered
    // pattern: any geometric shape
    // @NOTE: make sure that to apply correct css in order to view it visually the same
    // @NOTE: use the 2d loop in the html template
    // @NOTE: you can also the provided GridPattern
    export function GenerateGridPattern<T>(items: T[], pattern: number[]): T[][] {
        const safePattern = pattern.length > 0 ? pattern : [1];

        const rows: T[][] = [];
        let i = 0;
        let step = 0;

        while (i < items.length) {
            let rowSize = safePattern[step % safePattern.length] || 1; // safety
            if (rowSize <= 0) rowSize = 1
            rows.push(items.slice(i, i + rowSize))
            i += rowSize
            step++
        }
        return rows;
    };

}
