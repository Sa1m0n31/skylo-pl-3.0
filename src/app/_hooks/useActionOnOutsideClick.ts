import {useEffect} from "react";

const useActionOnOutsideClick = (selector: string, action: any) => {
    useEffect(() => {
        const modal = document.querySelector('.container');

        if(modal) {
            modal.addEventListener('click', (event) => {
                const target: any = event.target;
                const closest = target.closest(selector);

                if(!closest && !Array.from(target.classList).includes('selectBtn')) {
                    action();
                }
            });
        }
    }, []);
}

export default useActionOnOutsideClick;
