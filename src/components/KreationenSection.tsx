import { buildKreationenRows } from "@/lib/kreationen-art";
import KreationenSectionClient from "./KreationenSectionClient";

export default function KreationenSection() {
  const rows = buildKreationenRows();
  return <KreationenSectionClient rows={rows} />;
}
