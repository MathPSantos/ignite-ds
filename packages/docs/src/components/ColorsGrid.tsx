import { colors } from "@math-ignite-ui/tokens";
import { getContrast } from "polished";

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={color} style={{ backgroundColor: color, padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getContrast(color, "#FFF") < 4 ? "#000" : "#FFF",
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ));
}
