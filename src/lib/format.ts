/** Money formatter matching the prototype's `fmt`: "$" + rounded, grouped. */
export function money(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}
