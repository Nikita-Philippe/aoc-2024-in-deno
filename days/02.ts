/**
 * @see [Day02]("https://adventofcode.com/2024/day/2")
 */
export default async function() {
    const datas = await Deno.readTextFile("./datas/02.txt");

    const reports = datas.split("\r\n").map(e => e.split(" "))

    return reports.filter(report => {
        report.reduce((acc, rValue, index) => {
            if (!acc.direction){
                const current = parseInt(rValue)
                const previous = parseInt(report[index - 1])
                if (
                    Math.abs(current - previous) > 3 ||

                )
            }
        }, { direction: null, unsafe: false } as { direction: null | "asc" | "des", unsafe: boolean })
    }).length
}