'use client'

import { useResponsive } from "@/app/CSSX/responsive/services/responsive/use-responsive"
import { useBorders } from "@/app/CSSX/responsive/services/sizes/border"
import { useButtonSizes } from "@/app/CSSX/responsive/services/sizes/button"
import { useShapeSizes } from "@/app/CSSX/responsive/services/sizes/shape"


export default function Buttons() {

    const { clamp, square: rsquare, rectangle: rrectangle, circle: rcircle } = useResponsive()
    const { circle, rectangle, square } = useShapeSizes()
    const { squareBtn, circleBtn, rectBtn } = useButtonSizes()
    const ws = rsquare(square.xs.width)
    const fs = rsquare(squareBtn.xxs.fontSize)

    const wr = rrectangle(rectangle.small.width)
    const hr = rrectangle(rectangle.small.height)
    const fr = rsquare(rectBtn.xxs.fontSize)

    const wc = rcircle(circle.small)
    const fc = rsquare(circleBtn.xxs.fontSize)

    const { radius, borderWidth } = useBorders()
    const r = clamp(radius, 'px')
    const r2 = clamp(borderWidth, 'px')
    const fw = rrectangle(rectangle.large.width)
    const fh = rsquare(square.large.height)

    return (
        <>
            <div style={{ bottom: '10%' }} className="w-screen h-screen  absolute flex items-center justify-center">

                <div style={{ width: fw, height: fh, borderRadius: r2 }} className="bg-yellow-100 p-2 flex items-center justify-center gap-2 overflow-hidden">

                    <div className="flex flex-col items-center gap-2">
                        <button style={{ width: ws, height: ws, fontSize: fs, borderRadius: r }} className="bg-red-100 flex justify-center items-center overflow-hidden">sqre</button>
                        <button style={{ width: wr, height: hr, fontSize: fr, borderRadius: r }} className="bg-red-100 flex justify-center items-center overflow-hidden">rect</button>
                        <button style={{ width: wc, height: wc, fontSize: fc }} className="bg-red-100 flex justify-center items-center overflow-hidden rounded-full">circ</button>
                    </div>
                </div>
            </div>
        </>
    )
}