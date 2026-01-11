// lib/rag.ts
import fs from 'fs';
import path from 'path';

type Chunk = { source: string; text: string };

export function loadChunks(): Chunk[] {
  const base = path.join(process.cwd(), 'data');
  const files = fs.readdirSync(base).filter(f => f.endsWith('.txt') || f.endsWith('.md'));
  const chunks: Chunk[] = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(base, file), 'utf-8');
    const parts = content.match(/.{1,800}(\s|$)/g) || [];
    parts.forEach(p => chunks.push({ source: file, text: p.trim() }));
  }
  return chunks;
}

export function retrieveContext(query: string, chunks: Chunk[], k = 4): Chunk[] {
  const qWords = new Set(query.toLowerCase().split(/\W+/).filter(Boolean));
  const scored = chunks.map(c => {
    const cWords = new Set(c.text.toLowerCase().split(/\W+/).filter(Boolean));
    let score = 0;
    qWords.forEach(w => { if (cWords.has(w)) score++; });
    return { ...c, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, k);
}
