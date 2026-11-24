import { mkdirSync, writeFileSync } from "node:fs";

const line = "Out of office: I'll be away until you remember I exist. Urgent requests should be poured, not typed.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(line);
