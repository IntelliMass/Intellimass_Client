import {RefObject, useEffect} from 'react';

export function useOnEscOrClickOutside(ref: RefObject<HTMLElement>, cbFunction: Function, excludedElSelector?: string) {
    useEffect(() => {
        const clickListener = (event: any) => {

            // get all classes of clicked element ancestors
            const elmentsPathClasseslist = event?.path?.reduce((acc: string, el: HTMLElement) => {
                return `${acc} ${el?.classList?.value || ''} `
            }, '')

            // Do nothing if clicking ref's element or descendent elements, also do nothing if the excludedElementSelector
            // is in the path of clicked item
            if (!ref.current
                || ref.current.contains(event.target)
                || (excludedElSelector && elmentsPathClasseslist?.includes(excludedElSelector))) {
                return;
            } else {
                cbFunction();
            }
        };
        const keyUpListener = (e: any) => {
            if (e.key === 'Escape') {
                cbFunction()
            }
        }
        document.addEventListener('mousedown', clickListener);
        document.addEventListener('touchstart', clickListener);
        document.addEventListener('keyup', keyUpListener);
        return () => {
            document.removeEventListener('mousedown', clickListener);
            document.removeEventListener('touchstart', clickListener);
            document.removeEventListener('keyup', keyUpListener);
        };
    }, [ref, cbFunction]);
}
