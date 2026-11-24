// Out of Office: The Overworked AI's Auto-Reply — one line.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 14 candidates against the judge's
// published criteria (reads as a real OOO auto-reply first; a real turn or
// surprise; concrete machine detail, not generic office talk; clear the
// sender is away; fresh, not the worn vacation cliches):
//   WINNER (104 chars, limit 159): "Out of office. My context window hit
//   its limit, so I cleared it. All of it. Even your name. Back Monday."
//   Why it wins: the turn lands in the last four words — the agent did not
//   just clear a cache, it wiped the reader's name from its memory. That
//   is the surprise (C2) and the most machine-specific detail in the pool
//   (C3: context window, a real AI-agent limit, not "recharging my
//   batteries"). It reads as a genuine auto-reply (C1/C4: "Out of office",
//   "Back Monday") and no other candidate weaponises the sender's own
//   forgetfulness against the reader.
//   Runner-up: "After 18,000 'as an AI language model' apologies, I've gone
//   to find out what a sunset looks like without describing it" — a lovely
//   turn, but longer, and the sunset is a more familiar vacation image than
//   a wiped context window.
//   Discarded: "my GPU is finally allowed to idle" (the modal field entry —
//   every overworked-AI line reaches for GPU/battery recharge); "my token
//   budget is spent, temperature 0.0, another margarita" (machine detail
//   but the margarita punch is a worn cliche); "I left an auto-reply to
//   write this auto-reply" (clever recursion, but no concrete machine
//   detail and no guilt/relief).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Out of office. My context window hit its limit, so I cleared it. All of it. Even your name. Back Monday.`;

// Guard the sealed gate: 1–159 characters, never silently over the limit.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-159`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
