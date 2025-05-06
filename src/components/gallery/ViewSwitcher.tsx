
import { ViewToggle } from './ViewToggle';
import { ViewMode } from './GalleryShowcase';

interface ViewSwitcherProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const ViewSwitcher = ({ viewMode, setViewMode }: ViewSwitcherProps) => {
  return (
    <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
  );
};

export default ViewSwitcher;
