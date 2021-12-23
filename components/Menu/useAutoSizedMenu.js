import { useEffect } from 'react';

export function useAutoSizedMenu(ref) {
  useEffect(() => {
    const ul = ref.current;
    const lis = [...ul.children];
    const margin = 20;

    ul.classList.add('calculating');
    lis.forEach(li => {
      li.classList.remove('menu__item--invisible');
      li.dataset.w = li.offsetWidth;
      li.classList.add('menu__item--invisible');
    });
    ul.classList.remove('calculating');

    function resizeMenu() {
      if (window.innerWidth < 992) {
        return;
      }

      const ulWidth = ul.offsetWidth;
      let visiblesWidth = 0;
      for (const li of lis) {
        const currentLiWidth = parseInt(li.dataset.w) + margin;
        if (currentLiWidth <= margin) {
          continue;
        }

        if ((visiblesWidth + currentLiWidth) > ulWidth) {
          li.classList.add('menu__item--invisible');
          continue;
        }

        li.classList.remove('menu__item--invisible');
        visiblesWidth += currentLiWidth;
      }

      ul.classList.remove('calculating');
    }

    let debounceId;
    function debouncedResizeMenu() {
      clearTimeout(debounceId);
      debounceId = setTimeout(resizeMenu, 75);
    }

    window.addEventListener('resize', debouncedResizeMenu);

    debouncedResizeMenu();

    return () => {
      window.removeEventListener('resize', debouncedResizeMenu);
    };
  }, []);
}
