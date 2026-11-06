import { useEffect } from 'react';

// Each page gets its own title so screen reader users know where they are after navigating (WCAG 2.4.2).
export function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Leaf Market`;
  }, [title]);
}
