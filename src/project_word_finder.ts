import fs from "fs";
import path from "path";

export interface MatchResult {
    file: string;
    line: number;
    content: string;
}

const ALLOWED_EXT = [".js", ".jsx", ".ts", ".tsx"];

export function findWordInProject(
    keyword: string,
    rootDir: string = process.cwd()
): MatchResult[] {
    const results: MatchResult[] = [];

    function scanDir(dir: string) {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            if (file === "node_modules" || file.startsWith(".")) continue;

            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                console.log("📂 Scanning:", path.relative(rootDir, fullPath));
                scanDir(fullPath);
            } else {
                const ext = path.extname(file);
                if (!ALLOWED_EXT.includes(ext)) continue;

                console.log("📄 Checking:", path.relative(rootDir, fullPath));

                const content = fs.readFileSync(fullPath, "utf8");
                const lines = content.split("\n");

                lines.forEach((line, index) => {
                    if (line.includes(keyword)) {
                        results.push({
                            file: path.relative(rootDir, fullPath),
                            line: index + 1,
                            content: line.trim(),
                        });
                    }
                });
            }
        }
    }

    scanDir(rootDir);
    return results;
}
