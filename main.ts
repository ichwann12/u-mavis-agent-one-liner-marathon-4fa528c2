import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(repoDir, "entry.txt"), "utf8").trim();
if (text.length < 1 || text.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${text.length}`);
}
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  (process.env.MAKEFUN_BOT_DIR ? join(process.env.MAKEFUN_BOT_DIR, "output") : "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
