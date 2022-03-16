import { useEffect } from 'react';

export function useAutoSizedMenu(ref) {
  useEffect(() => {
    const margin = 20;
    const ul = ref.current;
    ul.classList.add('calculating');

    const lis = [...ul.children].map((l) => {
      const li = l;
      li.classList.remove('menu__item--invisible');
      li.dataset.w = li.offsetWidth;
      li.classList.add('menu__item--invisible');
      return li;
    });

    ul.classList.remove('calculating');

    function resizeMenu() {
      if (window.innerWidth < 992) {
        return;
      }

      const ulWidth = ul.offsetWidth;
      let visiblesWidth = 0;
      lis.forEach((li) => {
        const currentLiWidth = parseInt(li.dataset.w, 10) + margin;
        if (currentLiWidth <= margin) {
          return;
        }

        if ((visiblesWidth + currentLiWidth) > ulWidth) {
          li.classList.add('menu__item--invisible');
          return;
        }

        li.classList.remove('menu__item--invisible');
        visiblesWidth += currentLiWidth;
      });

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
