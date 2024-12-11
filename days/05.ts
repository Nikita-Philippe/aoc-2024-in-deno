/**
 * @see [Day05]("https://adventofcode.com/2024/day/5")
 */
export default async function () {
  const datas = await Deno.readTextFile("./datas/05.txt");

  const rawSpecs = datas.match(/[0-9]{2}\|[0-9]{2}/gm)
  if (!rawSpecs) return 0
  const specs = rawSpecs.map(s => ({ min: parseInt(s.split("|")[0]), max: parseInt(s.split("|")[1]) }))

  const getSpecsFromNumber = (nb: number) => specs.filter(s => s.min === nb || s.max === nb)
  
  const lines = datas.match(/[0-9]{2},.*/gm)?.map(l => l.split(',').map(parseInt))

  // const correctLines = lines?.filter(line => {
  //   if (!line.every((nb, index) => {
  //     const assocSpecs = getSpecsFromNumber(nb)
  //     const nextNb = line[index + 1]
  //     if (assocSpecs?.some(s => {
  //       if (s.min === nb) return 
  //     }))
  //   }))
  // })
}
