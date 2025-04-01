import { useThemeContext } from "src/theme";

import { Iconify } from "src/components/iconify";
import { ToggleGroup, ToggleGroupItem } from "src/components/ui/toggle-group";

export const ViewToggler = () => {
  const { viewMode, toggleViewMode } = useThemeContext();

  return (
    <ToggleGroup variant="outline" type="single" value={viewMode} size="lg">
      <ToggleGroupItem
        value="mobile"
        aria-label="Toggle mobile view"
        onClick={() => toggleViewMode("mobile")}
      >
        <div
          className={viewMode === "mobile" ? "text-cyan-600" : "text-gray-400"}
        >
          <Iconify icon="tabler:device-mobile" size={24} />
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="Toggle system view"
        onClick={() => toggleViewMode("system")}
      >
        <div
          className={viewMode === "system" ? "text-cyan-600" : "text-gray-400"}
        >
          <Iconify icon="tabler:device-desktop" size={24} />
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
export default ViewToggler;
