import React, { useEffect, useMemo, useRef } from 'react';
import { useDebounce, useColor } from '../utils';
import { useTwitter } from './hooks';
import { propInfo, defaultProps } from './props';
import { Box } from '@quarkly/widgets';

const getChrome = (options) =>
    Object.keys(options)
        .filter((key) => options[key])
        .join(' ');

const removeAllChildren = (node) => {
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
};

const getSource = (str) => {
    if (str.includes('twitter.com')) {
        return {
            sourceType: 'url',
            url: str,
        };
    }
    return {
        sourceType: 'profile',
        screenName: str.substr(str.startsWith('@')),
    };
};

const TwitterFeed = ({
    dataProvider,
    noheader,
    nofooter,
    noborders,
    transparent,
    noscrollbar,
    tweetLimit,
    tweetBorder,
    ariaPolite,
    ...props
}) => {
    const [twitterLoad, twitterError] = useTwitter();
    const ref = useRef();

    const chrome = useMemo(
        () =>
            getChrome({
                noheader,
                nofooter,
                noborders,
                transparent,
                noscrollbar,
            }),
        [noheader, nofooter, noborders, transparent, noscrollbar]
    );
    const borderColor = useDebounce(useColor(tweetBorder, ''), 300);

    useEffect(() => {
        if (twitterLoad && !twitterError) {
            try {
                twttr.widgets.createTimeline(
                    getSource(dataProvider),
                    ref.current,
                    {
                        height: '100%',
                        chrome,
                        tweetLimit,
                        borderColor,
                        ariaPolite,
                    }
                );
            } catch (e) {
                console.log(e);
            }
        }

        return () => removeAllChildren(ref.current);
    }, [
        dataProvider,
        chrome,
        tweetLimit,
        borderColor,
        ariaPolite,
        twitterLoad,
        twitterError,
    ]);

    return (
        <Box ref={ref} ov="hidden" {...props}>
            {twitterError &&
                'Ошибка при загрузке https://platform.twitter.com/widgets.js'}
        </Box>
    );
};

export default Object.assign(TwitterFeed, {
    title: 'TwitterFeed',
    description: {
        en: 'TwitterFeed',
    },
    propInfo,
    defaultProps,
});
