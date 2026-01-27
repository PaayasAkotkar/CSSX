// afterColonJson removes the parse value from the prefix and returns in given interface
export function afterColonJson(token: string | undefined, parse: string, _interface: any) {
    if (token) {
        token = token.substring(parse.length)
        _interface = JSON.parse(token)
    }
    return _interface
}

// byteArrayToJSON this is created because from the json.Marshall the byte is converted into base64 string
export function byteArrayToJSON(b: string | undefined): Uint8Array {
    if (!b)
        return new Uint8Array()
    const binaryString = atob(b);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes
}


export function afterColon<T extends boolean, U extends boolean>(
    token: string,
    inx: number,
    num: T,
    bool?: U
): T extends true
    ? number
    : U extends true
    ? boolean
    : string {
    var count: any
    if (token) {
        // change 1 to 2 if you get any whitespace
        token = token.slice(inx + 1)
        switch (true) {
            // conv to num
            case num && !bool: {
                count = parseInt(token)
            } break
            // conv to string
            case !num && !bool: {
                count = token.trim()
            } break
            // conv to boolean
            default:
                const pattern = /true/
                count = pattern.test(token)
        }
    }
    return count
}
export function Search(token: string, _search: string): number {
    var count = -1
    for (let i = 0; i < token.length; i++) {
        if (token[i] == _search) {
            count = i
        }
    }
    return count
}

// MapToArray returns the map to array by mapping key,value as its interface 
export function MapToArray<T, V>(token: Map<T, V> | undefined): any[] {
    if (!token) return []
    const clone = Array.from(token).map(([key, value]) => ({
        key, value,
    }))
    return clone
}

// MapToValues returns the priority
export function MapToValues<T, V>(token: Map<T, V> | undefined): V[] {
    if (!token) return []
    return Array.from(token.values())
}

// ReduceMap returns the new map as the per the len in last order
export function ReduceMap<T, V>(token: Map<T, V>, len: number): Map<T, V> {
    const clone = new Map(token)
    const it = token.keys()
    const delKeys: T[] = []
    for (let i = 0; i < token.size && i < len; i++) {
        const key = it.next().value
        if (key !== undefined)
            delKeys.push(key)
    }
    delKeys.forEach((key) => clone.delete(key))
    return clone
}

// ReduceReverseMap returns the new as per the len but in first order
export function ReduceReverseMap<T, V>(token: Map<T, V>, len: number): Map<T, V> {
    const clone = new Map()
    let count = 0
    for (let [key, val] of token) {
        if (count < len)
            clone.set(key, val)
        else break
        count++
    }
    return clone
}

// CenterTheElement reutrn value can be applied to the translateX and translateY  respectively
export function CenterTheElement<T extends HTMLElement | null>(elem: T): { deltaX: number, deltaY: number } {
    if (!elem) {
        return { deltaX: 0, deltaY: 0 }
    }
    const rect = elem.getBoundingClientRect()
    const sHeight = window.innerHeight / 2
    const sWidth = window.innerWidth / 2
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const deltaX = sWidth - x
    const deltaY = sHeight - y
    return { deltaX: deltaX, deltaY: deltaY }
}

// EuclideanDistance returns the distance from two elements 
// tip: the view must always be the element
//      suppose direction is row now start is right and target is x-axis  than do left+center(width/2) for start
export function EuclideanDistance(targetX: number, startX: number, targetY: number, startY: number): number {
    return Math.hypot(targetX - startX, targetY - startY);
}

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

    // RaiseBy returns the new width and height on privded pixelss
    export function ReduceBy(width: number, height: number, perc: number): { w: number, h: number } {
        var co = DecreaseBy(perc)
        return { w: width * co, h: height * co }
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