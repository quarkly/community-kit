import React, {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon } from '@quarkly/widgets';

import { propInfo, defaultProps, overrides } from './props';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren, toggleScroll } from '../utils';
import { MobileSidePanelContext, getStyles } from './utils';

const MobileSidePanel = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
    onloadShow,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isOpen, setOpen] = useState(onloadShow);
    const isNear = useMemo(
        () => menuPosition === 'near' || menuPosition === 'nearRight',
        [menuPosition]
    );
    const contentRef = useRef();
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);

    const openPanel = useCallback(() => {
        contentRef.current.scrollTo(0, 0);
        toggleScroll.disable(contentRef.current);
        setOpen(true);
    }, []);
    const closePanel = useCallback(() => {
        toggleScroll.enable(contentRef.current);
        setOpen(false);
    }, []);
    const togglePanel = useCallback(() => {
        !isOpen ? openPanel() : closePanel();
    }, [isOpen, openPanel, closePanel]);

    useEffect(() => {
        setOpen(isOpen || isEmpty);
    }, [setOpen, isOpen, isEmpty]);

    useEffect(() => {
        setOpen(onloadShow);
    }, [onloadShow]);

    useEffect(() => {
        return () => {
            closePanel();
        };
    }, [closePanel]);

    const styles = useMemo(
        () =>
            getStyles({
                breakpoint,
                menuPosition,
                animDuration,
                animFunction,
                isNear,
            }),
        [breakpoint, menuPosition, animDuration, animFunction, isNear]
    );

    const statusOpen = isOpen || isEmpty ? ':open' : ':closed';
    const statusButtopenPanel =
        isNear && (isOpen || isEmpty) ? ':open' : ':closed';

    const context = useMemo(
        () => ({
            isOpen,
            togglePanel,
            openPanel,
            closePanel,
        }),
        [isOpen, togglePanel, openPanel, closePanel]
    );

    const handleClosePopup = useCallback((e) => {
        if (e.target.closest('a')) {
            const a = e.target;
            const { pathname, protocol, host } = window.location;
            const isSame =
                a.pathname === pathname &&
                a.protocol === protocol &&
                a.host === host;

            if (isSame) {
                closePanel();
            }
        }
    }, []);

    return (
        <Box
            flex="1 1 auto"
            width="100%"
            min-width="0px"
            min-height="0px"
            align-items="center"
            justify-content={
                menuPosition === 'left' || menuPosition === 'nearRight'
                    ? 'flex-start'
                    : 'flex-end'
            }
            position="relative"
            display="flex"
            z-index="5"
            {...rest}
        >
            <Box
                onClick={isNear ? togglePanel : openPanel}
                {...styles.Button}
                {...override('Button', `Button ${statusButtopenPanel}`)}
            >
                <Text
                    {...styles['Button Text']}
                    {...override(
                        'Button Text',
                        `Button Text ${statusButtopenPanel}`
                    )}
                />
                <Icon
                    {...override(
                        'Button Icon',
                        `Button Icon ${statusButtopenPanel}`
                    )}
                />
            </Box>
            <Box
                {...styles.Wrapper}
                {...styles[`Wrapper ${statusOpen}`]}
                {...override('Wrapper', `Wrapper ${statusOpen}`)}
            >
                <Box
                    onClick={closePanel}
                    {...styles.Overlay}
                    {...styles[`Overlay ${statusOpen}`]}
                    {...override('Overlay', `Overlay ${statusOpen}`)}
                />
                <Box
                    {...styles.Content}
                    {...styles[`Content ${statusOpen}`]}
                    {...override('Content', `Content ${statusOpen}`)}
                    ref={contentRef}
                >
                    <Icon
                        onClick={closePanel}
                        {...styles.Cross}
                        {...override('Cross')}
                    />
                    <MobileSidePanelContext.Provider value={context}>
                        <Box
                            {...styles.Children}
                            {...override('Children', `Children ${statusOpen}`)}
                            display={isEmpty ? 'none' : undefined}
                            onClick={handleClosePopup}
                        >
                            {children}
                        </Box>
                    </MobileSidePanelContext.Provider>
                    {isEmpty && (
                        <ComponentNotice message="Drag any component here" />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

Object.assign(MobileSidePanel, {
    title: 'Mobile side panel',
    description: {
        en:
            'Container to hide menu or any other content in the mobile version of the site',
        ru:
            'Контейнер для скрытия меню или любого другого контента в мобильной версии сайта',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default MobileSidePanel;
