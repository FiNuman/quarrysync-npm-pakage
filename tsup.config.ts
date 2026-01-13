import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    "bin/quarrysync-find.ts"
  ],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  target: "node18"
});