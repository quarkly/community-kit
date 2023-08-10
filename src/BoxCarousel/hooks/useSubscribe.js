import { useEffect } from 'react';

const useSubscribe = (eventEmmiter, event, cb) => {
    useEffect(() => {
        eventEmmiter?.on?.(event, cb);

        return () => {
            eventEmmiter?.off?.(event, cb);
        };
    }, [eventEmmiter, event, cb]);
};

export default useSubscribe;
