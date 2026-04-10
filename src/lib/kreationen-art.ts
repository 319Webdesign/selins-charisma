import fs from "fs";
import path from "path";

export type KreationenItem = {
  id: string;
  src: string;
  type: "image" | "video";
  label: string;
  sizeBytes: number;
};

export type KreationenRow = {
  sizeBytes: number;
  columns: 3 | 4;
  items: KreationenItem[];
};

const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const LABEL_BY_FILE: Record<string, string> = {
  "1.jpg": "Reel: Transformation 30kg",
  "2.mp4": "Short: Balayage Prozess",
  "3.mp4": "Story: Salon-Vibe",
  "4.mp4": "Short: Before/After",
  "5.jpg": "Reel: Friseur-Kunst",
  "6.mp4": "Reel: Styling-Showcase",
  "7.jpg": "Story: Kundin zufrieden",
  "8.jpg": "Kreation im Fokus",
  "9.mp4": "Styling Showcase",
};

function labelFor(filename: string): string {
  if (LABEL_BY_FILE[filename]) return LABEL_BY_FILE[filename];
  const base = filename.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]/g, " ").trim() || filename;
}

function itemType(filename: string): "image" | "video" | null {
  const ext = path.extname(filename).toLowerCase();
  if (VIDEO_EXT.has(ext)) return "video";
  if (IMAGE_EXT.has(ext)) return "image";
  return null;
}

/**
 * Liest public/img/art, gruppiert nach identischer Dateigröße (Bytes).
 * Pro Gruppe: 4 Spalten ab 4 Dateien, sonst 3 Spalten (wie gewünscht).
 */
export function buildKreationenRows(): KreationenRow[] {
  const dir = path.join(process.cwd(), "public", "img", "art");
  if (!fs.existsSync(dir)) return [];

  const filenames = fs
    .readdirSync(dir)
    .filter((name) => itemType(name) !== null)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const items: KreationenItem[] = [];
  for (const filename of filenames) {
    const t = itemType(filename);
    if (!t) continue;
    const full = path.join(dir, filename);
    const stat = fs.statSync(full);
    if (!stat.isFile()) continue;
    items.push({
      id: filename,
      src: `/img/art/${filename}`,
      type: t,
      label: labelFor(filename),
      sizeBytes: stat.size,
    });
  }

  const bySize = new Map<number, KreationenItem[]>();
  for (const item of items) {
    const list = bySize.get(item.sizeBytes) ?? [];
    list.push(item);
    bySize.set(item.sizeBytes, list);
  }

  const multiItemRows: KreationenRow[] = [];
  const singletonItems: KreationenItem[] = [];

  for (const [sizeBytes, group] of bySize) {
    group.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    if (group.length >= 2) {
      const columns: 3 | 4 = group.length >= 4 ? 4 : 3;
      multiItemRows.push({ sizeBytes, columns, items: group });
    } else {
      singletonItems.push(...group);
    }
  }

  singletonItems.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

  const rows: KreationenRow[] = [...multiItemRows];
  if (singletonItems.length > 0) {
    const columns: 3 | 4 = singletonItems.length >= 4 ? 4 : 3;
    rows.push({
      sizeBytes: -1,
      columns,
      items: singletonItems,
    });
  }

  function rowMinId(row: KreationenRow): string {
    return row.items
      .map((i) => i.id)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0];
  }

  rows.sort((a, b) => rowMinId(a).localeCompare(rowMinId(b), undefined, { numeric: true }));

  return swapFlatPositions(rows, 0, 5);
}

/** Tauscht zwei Plätze in der sichtbaren Reihenfolge (zeilenweise, 1-basiert → Indizes i, j). */
function swapFlatPositions(rows: KreationenRow[], indexA: number, indexB: number): KreationenRow[] {
  const lengths = rows.map((r) => r.items.length);
  const flat = rows.flatMap((r) => [...r.items]);
  const n = flat.length;
  if (n <= Math.max(indexA, indexB)) return rows;
  const next = [...flat];
  [next[indexA], next[indexB]] = [next[indexB], next[indexA]];
  let offset = 0;
  return rows.map((row, idx) => {
    const len = lengths[idx];
    const chunk = next.slice(offset, offset + len);
    offset += len;
    return { ...row, items: chunk };
  });
}

export function flattenKreationenItems(rows: KreationenRow[]): KreationenItem[] {
  return rows.flatMap((r) => r.items);
}
