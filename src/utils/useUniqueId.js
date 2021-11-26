import { useRef } from 'react';

let ID = 0;

const genId = () => {
    return (ID += 1);
};

const useUniqueId = () => {
    const id = useRef(genId());

    return id.current;
};

export default useUniqueId;
