import { useCallback, useEffect, useState } from 'react';

export default function useCounter(startNumb, endNumb, direction) {
    const [numb, setNumb] = useState(0);

    const step = useCallback(
        () =>
            setNumb((curNumb) => {
                if (direction === 'reverse' && curNumb > startNumb) {
                    return curNumb - 1;
                }
                if (curNumb < endNumb) {
                    return curNumb + 1;
                }

                return curNumb;
            }),
        [direction, startNumb, endNumb]
    );

    useEffect(() => {
        setNumb(direction === 'reverse' ? endNumb : startNumb);
    }, [direction, startNumb, endNumb]);

    return [numb, step];
}
