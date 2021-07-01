import { useMemo } from 'react';
import { useTheme } from 'styled-components';

const isCssVar = (s) => s.substring(0, 2) === '--';
const testHexColor = new RegExp(/^#(?=[0-9A-F]*$)(?:.{3}|.{6})$/, 'i');

const useColor = (rawColor, defaultColor = 'transparent') => {
    if (!rawColor) return;

    // eslint-disable-next-line
    const theme = useTheme();

    // eslint-disable-next-line
    return useMemo(() => {
        if (isCssVar(rawColor)) {
            return theme.color[rawColor.substring(2)] || defaultColor;
        }
        return testHexColor.test(rawColor) ? rawColor : defaultColor;
    }, [theme, rawColor, defaultColor]);
};

export default useColor;
