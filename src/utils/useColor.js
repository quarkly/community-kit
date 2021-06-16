import { useMemo } from 'react';
import { useTheme } from 'styled-components';

const isCssVar = (s) => s.substring(0, 2) === '--';
const testHexColor = new RegExp(/^#(?=[0-9A-F]*$)(?:.{3}|.{6})$/, 'i');

const useColor = (rawColor, defaultColor = 'transparent') => {
    if (!rawColor) return;

    const theme = useTheme();

    return useMemo(() => {
        if (isCssVar(rawColor)) {
            return theme.color[rawColor.substring(2)] || defaultColor;
        } else {
            return testHexColor.test(rawColor) ? rawColor : defaultColor;
        }
    }, [theme, rawColor, defaultColor]);
};

export default useColor;
