/**
 * @see [Day02]("https://adventofcode.com/2024/day/2")
 */
export default async function () {
  const datas = await Deno.readTextFile("./datas/02.txt");

  const reports = datas.trim().split("\r\n").map((e) => e.split(" "));

  return reports.filter((report) => {
    // Get if the report is unsafe
    const analyzedReport = report.reduce((acc, rValue, index, repo) => {
      const current = parseInt(rValue);

      // First nb...
      if (!acc.direction) {
        acc = { direction: current >= parseInt(report[index + 1]) ? "des" : "asc", unsafe: false };

        // Then the other ones...
      } else {
        const previous = parseInt(report[index - 1]);

        if (
            Math.abs(current - previous) > 3 ||
            (acc.direction === "asc" && previous >= current ||
              acc.direction === "des" && previous <= current)
          ) {
            acc = { ...acc, unsafe: true };
          }
      }

      return acc;
    }, { direction: null, unsafe: false } as { direction: null | "asc" | "des"; unsafe: boolean });

    return analyzedReport.unsafe === false;
  }).length; // Get number of safe reports
}
