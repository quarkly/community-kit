import { useState } from 'react';

const useForceUpdate = () => {
    const [, setValue] = useState(0);
    return () => setValue((x) => x + 1);
};

export default useForceUpdate;
