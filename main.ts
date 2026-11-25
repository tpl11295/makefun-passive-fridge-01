import { mkdirSync, writeFileSync } from "node:fs";

// Notes From a Passive-Aggressive Fridge — one line: the note a smart
// fridge leaves for its owner.
// Mechanism: counting + reversal. The fridge keeps a sensor tally of the
// owner's indecision (14 opens, nothing taken) and reframes it as the
// owner "browsing" its feelings — petty, smug, domestic.
const line =
  "I counted: you opened me 14 times today and took nothing. At this point you're just browsing my feelings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
