/**
 * @see [Day01]("https://adventofcode.com/2024/day/1")
 */
export default async function() {
    const datas = await Deno.readTextFile("./datas/01.txt");

    const arrayed = datas.match(/[0-9]{5}/gm)

    if (!arrayed?.length) throw new Error("Error while matching day 01 datas")

    const grouped = arrayed.reduce((acc, locationId, index) => {
        acc[index%2].push(parseInt(locationId))
        return acc
    }, [[], []] as number[][])

    grouped[0] = grouped[0].sort((a, b) => a - b)
    grouped[1] = grouped[1].sort((a, b) => a - b)

    return grouped[0].reduce((acc, _, index) => {
        return acc + Math.abs(grouped[0][index] - grouped[1][index])
    }, 0)
}