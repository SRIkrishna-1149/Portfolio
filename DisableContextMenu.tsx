import { useEffect } from 'react';

const DisableContextMenu = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Disable page reload (F5, Ctrl+R, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F5 refresh
      if (e.key === 'F5') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+R refresh
      if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+F5 hard refresh
      if (e.ctrlKey && e.key === 'F5') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+Shift+R refresh
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        return false;
      }
    };

    // Disable context menu
    document.addEventListener('contextmenu', handleContextMenu);
    // Disable text selection
    document.addEventListener('selectstart', handleSelectStart);
    // Disable drag
    document.addEventListener('dragstart', handleDragStart);
    // Disable page reload shortcuts
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

