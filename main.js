/**
 * CSSMaths Library
 * Converted from TypeScript for JS environments.
 * Used for Figma-to-Web coordinate and scale calculations.
 */

export const CSSMaths = {
  /**
   * IncreaseBy returns a multiplier based on percentage
   * @param {number} perc - percentage to calculate on
   * @param {number} size - current size (default 100)
   */
  IncreaseBy: function (perc, size = 100) {
    return 1 + perc / size;
  },

  /**
   * DecreaseBy returns a multiplier based on percentage
   * @param {number} perc - percentage to calculate on
   * @param {number} size - current size (default 100)
   */
  DecreaseBy: function (perc, size = 100) {
    return 1 - perc / size;
  },

  /**
   * RaiseBy returns the new width and height based on provided percentage
   * @param {number} width 
   * @param {number} height 
   * @param {number} perc 
   */
  RaiseBy: function (width, height, perc) {
    const co = this.IncreaseBy(perc);
    return { w: width * co, h: height * co };
  },

  /**
   * ReduceBy returns the new width and height based on provided percentage
   */
  ReduceBy: function (width, height, perc) {
    const co = this.DecreaseBy(perc);
    return { w: width * co, h: height * co };
  },

  /**
   * ConvertPxToViewport returns the viewport value (vh or vw)
   * @param {number} px - The pixel value from Figma
   * @param {number} base - The base dimension (e.g., 1920 or 1080)
   */
  ConvertPxToViewport: function (px, base) {
    const viewport = (px / base) * 100;
    return Number(viewport.toFixed(2));
  },

  /**
   * GenerateZoomMultiplier returns the scale factor for a specific zoom level
   * @param {number} zoomLevel - e.g., 0.67
   */
  GenerateZoomMultiplier: function (zoomLevel) {
    if (zoomLevel === 0) return 1;
    return 1 / zoomLevel;
  },

  /**
   * lazyGenerateClamp returns a CSS clamp string with auto-calculated boundaries
   */
  lazyGenerateClamp: function (
    targetPx,
    base,
    baseZoom,
    unit = "vw",
    minRatio = 0.65,
    growthFactor = 1.0
  ) {
    const multiplier = this.GenerateZoomMultiplier(baseZoom);
    const virtualBase = base * multiplier;

    const maxPx = targetPx;
    const minPx = Number((targetPx * minRatio).toFixed(2));
    const dynamicValue = this.ConvertPxToViewport(targetPx * growthFactor, virtualBase);

    return `clamp(${minPx}px, ${dynamicValue}${unit}, ${maxPx}px)`;
  },

  /**
   * GenerateClamp returns a CSS clamp string with custom min/max control
   */
  GenerateClamp: function (
    targetPx,
    baseDimension,
    baseZoom,
    unit = "vw",
    counterScale = 1.0,
    minPercent = 0.65,
    maxPercent = undefined
  ) {
    const zoomMultiplier = 1 / baseZoom;
    const virtualBase = baseDimension * zoomMultiplier;

    const finalMin = targetPx * minPercent;
    const autoMax = targetPx * counterScale;
    const finalMax = maxPercent !== undefined ? targetPx * maxPercent : autoMax;

    const dynamicValue = (targetPx / virtualBase) * 100;

    return `clamp(${finalMin}px, calc(${dynamicValue}${unit} * ${counterScale}), ${finalMax}px)`;
  },

  /**
   * FormatTime returns minutes and seconds from total seconds
   */
  FormatTime: function (seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return { min, sec };
  },

  /**
   * Grid patterns for staggered layouts
   */
  GridPattern: {
    DIAMOND_THIN: [1, 2],
    DIAMOND_WIDE: [2, 3],
    HEXAGON: [2, 3],
    TRIANGLE: [1, 2, 3, 4],
    INVERTED_TRIANGLE: [4, 3, 2, 1],
    HOURGLASS: [3, 2, 1, 2, 3],
    BRICK: [3],
  },

  /**
   * GenerateGridPattern returns a 2D array of items for staggered grids
   * @param {Array} items - List of items to stagger
   * @param {number[]} pattern - Array of numbers representing row sizes
   */
  GenerateGridPattern: function (items, pattern) {
    const safePattern = pattern && pattern.length > 0 ? pattern : [1];
    const rows = [];
    let i = 0;
    let step = 0;

    while (i < items.length) {
      let rowSize = safePattern[step % safePattern.length] || 1;
      if (rowSize <= 0) rowSize = 1;
      rows.push(items.slice(i, i + rowSize));
      i += rowSize;
      step++;
    }
    return rows;
  },
};
