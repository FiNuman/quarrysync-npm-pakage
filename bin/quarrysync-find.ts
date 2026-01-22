#!/usr/bin/env node

import { findWordInProject } from "../src/project_word_finder.js";

const command = process.argv[2];
const keyword = process.argv[3];

if (command !== "find" || !keyword) {
  console.log(`❌ Usage:
  quarrysync find "searchText"
  `);
  process.exit(1);
}

console.log(`🔍 Searching for "${keyword}"...\n`);

const results = findWordInProject(keyword);

if (results.length === 0) {
  console.log("No matches found ❌");
} else {
  results.forEach(r => {
    console.log(`${r.file} : line ${r.line}`);
    console.log(`   ↳ ${r.content}\n`);
  });
}

console.log(`✅ Done. Total matches: ${results.length}`);
