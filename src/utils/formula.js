export function dimension(width, padding) {
  let innerShadow = {
    width: width - padding * 2,
    get style() {
      return { width: this.width, height: this.width };
    },
  };

  let svg = {
    width: width,
    rayon: (width - padding) / 2,
    get dimension() {
      return { width: this.width, height: this.width };
    },
  };

  let circle = {
    rayon: svg.rayon,
    stroke: padding,
    cxcy: svg.rayon + padding / 2,
    get dimension() {
      return {
        r: this.rayon,
        strokeWidth: this.stroke,
        cx: this.cxcy,
        cy: this.cxcy,
      };
    },
  };

  let strokeDasharray = 2 * 3.14 * svg.rayon;

  return { innerShadow, svg, circle, strokeDasharray };
}
