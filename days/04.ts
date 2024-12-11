/**
 * @see [Day04]("https://adventofcode.com/2024/day/4")
 */
export default async function () {
  const datas = await Deno.readTextFile("./datas/04.txt");

  const lines = datas.trim().split("\n") as string[];

  type wordDirections = "t" | "tr" | "r" | "br" | "b" | "bl" | "l" | "tl";

  // wordMap, to defined the word to search
  const wm = new Map([
    [0, "X"],
    [1, "M"],
    [2, "A"],
    [3, "S"],
  ]);

  const getNextLetterCoords = (x: number, y: number, dir: wordDirections): { x: number; y: number } => {
    switch (dir) {
      case "t":
        return { x, y: y - 1 };
      case "tr":
        return { x: x + 1, y: y - 1 };
      case "r":
        return { x: x + 1, y };
      case "br":
        return { x: x + 1, y: y + 1 };
      case "b":
        return { x, y: y + 1 };
      case "bl":
        return { x: x - 1, y: y + 1 };
      case "l":
        return { x: x - 1, y };
      case "tl":
        return { x: x - 1, y: y - 1 };
    }
  };

  const isLetterWritingXMAS = (
    { letter, x, y, depth, dir }: {
      letter: string;
      x: number;
      y: number;
      depth: number;
      dir?: wordDirections;
    },
  ): number => {
    // If no dir, then "route" to each direction check
    if (!dir) {
      return [
        isLetterWritingXMAS({ letter, x, y, depth, dir: "t" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "tr" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "r" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "br" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "b" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "bl" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "l" }),
        isLetterWritingXMAS({ letter, x, y, depth, dir: "tl" }),
      ].reduce((acc, current) => acc + current, 0);
    } else {
      if (wm.get(depth) !== letter) return 0;
      // If we got to "S", return true
      if (depth === 3) return 1;
      const { x: nextX, y: nextY } = getNextLetterCoords(x, y, dir);
      const nextLetter = (lines[nextY] ?? "").charAt(nextX);
      return isLetterWritingXMAS({ letter: nextLetter, x: nextX, y: nextY, depth: depth + 1, dir });
    }
  };

  let count = 0;
  lines.forEach((line, lineIndex) => {
    line.split("").forEach((letter, letterIndex) => {
      count = count + isLetterWritingXMAS({
        letter,
        x: letterIndex,
        y: lineIndex,
        depth: 0,
      });
    });
  });

  return count;
}
