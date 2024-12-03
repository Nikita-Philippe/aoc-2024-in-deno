/**
 * @see [Day03]("https://adventofcode.com/2024/day/3")
 */
export default async function () {
  const datas = await Deno.readTextFile("./datas/03.txt");

  // In datas, get the mul(xxx,xxx)
  const muls = datas.match(/mul\(\d{1,3}\,\d{1,3}\)/gm)

  return muls?.reduce((acc, current) => {
    // current is "mul(xxx,xxx)", so get each nb
    const nbs = current.match(/\d{1,3}/gm)
    // If defined, multiply both numbers and add them to the acc
    if (nbs) acc = acc + (parseInt(nbs[0] ?? 0) * parseInt(nbs[1] ?? 0))
    return acc
  }, 0)
}
