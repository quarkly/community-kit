import { useState } from 'react';

let ID = 0;

const genId = () => {
    return (ID += 1);
};

const useUniqueId = () => {
    const [id] = useState(genId());

    return id;
};

export default useUniqueId;
