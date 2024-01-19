type starType = "small" | "medium" | "big" | "large"; // 1x1 2x2 3x3 4x4
type starAnimation = "short" | "medium" | "long";
type starColor =
  | "var(--gainsboro)"
  | "var(--gainsboro-opacity-05)"
  | "var(--gainsboro-opacity-02)";
export interface star {
  type: starType;
  color: starColor;
  top: string;
  left?: string;
  right?: string;
  transform?: string;
  animationType: starAnimation;
}
export type starArray = star[];
