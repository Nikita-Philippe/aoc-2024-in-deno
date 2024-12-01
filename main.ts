const day = Deno.args[0];

if (!day) {
  console.log("Please provide a day to run");
  console.log("Example: deno task day 01");
  Deno.exit(1);
}

const module = await import(`./days/${day}.ts`);
const res = await module.default();
console.log(
    `Result of day %c${day}%c : %c${typeof res === 'object' ? JSON.stringify(res) : res}`,
    'color: green',
    '', // Reset styles after green text
    'color: blue'
  );