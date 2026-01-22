import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "bin/quarrysync-find": "bin/quarrysync-find.ts"
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  target: "node18",
  splitting: false
});