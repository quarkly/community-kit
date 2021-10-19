import { useState } from 'react';

const useForceUpdate = () => {
    const [updated, setValue] = useState(0);
    return [() => setValue((x) => x + 1), updated];
};

export default useForceUpdate;
