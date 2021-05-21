import React, { useMemo, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Timer from './store';

function TestComponent({ timer }) {
    const store = useMemo(() => new Timer(), []);

    useEffect(() => {
        store.init({ timer });

        return () => store.deinit();
    }, [store]);

    return <div>{store.count}</div>;
}

export default observer(TestComponent);
