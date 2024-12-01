const day = Deno.args[0];

if (!day) {
  console.log("Please provide a day to run");
  console.log("Example: deno task day 01");
  Deno.exit(1);
}

const module = await import(`./days/${day}.ts`);
await module.default();