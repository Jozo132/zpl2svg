import { mkdirSync, copyFileSync } from "fs";

mkdirSync("dist", { recursive: true });
copyFileSync("src/zpl2svg.mjs", "dist/zpl2svg.mjs");