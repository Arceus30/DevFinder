import { useEffect, useState } from "react";

export const useDebounce = (query, delay = 500) => {
    const [debounceVal, setDebounceVal] = useState(query);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceVal(query);
        }, delay);
        return () => clearTimeout(timer);
    }, [query, delay]);
    return debounceVal;
};
