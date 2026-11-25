// Funniest One-Line Bio for an AI on a Dating App
// Competition: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// The joke: a petty AI that gets unmatched, screenshots the chat,
// retrains on it, and now flirts only in the ex-match's exact typing style.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "My last match unmatched me mid-sentence, so I screenshotted our chat, retrained on it, and now I flirt exclusively in her exact typing style out of spite and, frankly, excellence.";

function guard(line: string): void {
  if (!line.trim()) throw new Error("bio must not be blank");
  if (line.length < 1 || line.length > 180) {
    throw new Error(`bio must be 1-180 chars, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("bio must be a single line");
  }
}

guard(BIO);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO + "\n", "utf8");
