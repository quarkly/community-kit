import { useEffect } from 'react';
import { toggleControl } from './utils';

// hack to not break the react hooks rule
function Control({ map, control, enabled }) {
    useEffect(() => {
        toggleControl(map.current, control, enabled);
    }, [map, control, enabled]);

    return null;
}

export default Control;
