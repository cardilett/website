import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

/** Repo root (this file lives in <root>/tests). */
export const ROOT = resolve(__dirname, '..');

/** Read a source file relative to the repo root, as UTF-8 text. */
export function readSrc(relPath: string): string {
  return readFileSync(join(ROOT, relPath), 'utf8');
}

/**
 * Recursively collect file paths under `dir` (relative to repo root) whose
 * extension is in `exts`. Used for whole-tree assertions (e.g. "no em-dash
 * anywhere in src/**").
 */
export function walk(
  relDir: string,
  exts: string[] = ['.tsx', '.ts', '.jsx', '.js', '.css'],
): string[] {
  const out: string[] = [];
  const abs = join(ROOT, relDir);

  const visit = (current: string) => {
    for (const entry of readdirSync(current)) {
      const full = join(current, entry);
      if (statSync(full).isDirectory()) {
        if (entry === 'node_modules' || entry === '.next') continue;
        visit(full);
      } else if (exts.some((e) => entry.endsWith(e))) {
        out.push(full);
      }
    }
  };

  visit(abs);
  return out;
}

/** Read every matching file under a directory, keyed by repo-relative path. */
export function readTree(
  relDir: string,
  exts?: string[],
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const full of walk(relDir, exts)) {
    const rel = full.slice(ROOT.length + 1);
    result[rel] = readFileSync(full, 'utf8');
  }
  return result;
}
