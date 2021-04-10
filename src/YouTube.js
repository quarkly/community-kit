/**
 *  YTVideo
 *  Компонент, для воспроизведения видео с Youtube.
 *  Два варианта работы:
 *  1 - "Fast and low traffic" - сначала отображается только превью, а затем подгружается видео (iframe)
 *  ютуба
 *  Плюсы и минусы:
 *  + При большом колличестве видео быстрее грузиться и тратиться меньше трафика
 *    Каждое видео через стандартный iframe подгружает ≈500kb, даже если пользователь не будет смотреть все эти видео.
 *    В этом же способе, видео подгружается только при старте.
 *  - Нет дополнительных клавиш, пока не запустил видео (смотреть позже, поделиться и т.д)
 *  2 - "Standard" - стандартный iframe
 */
import React, { useState } from 'react';
import atomize from '@quarkly/atomize';

const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

const youtubeParser = (url) => {
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
};

const generateUrl = (id, params) => {
    const defaultParams = {
        rel: 0,
        showinfo: 0,
        start: 0,
        autoplay: true,
        loop: false,
        playlist: '',
    };
    const p = Object.assign(defaultParams, params);
    if (p.loop) {
        p.playlist = id;
    }
    const q = new URLSearchParams(p).toString();
    return `https://www.youtube.com/embed/${id}/?${q}`;
};

const Wrapper = atomize.div();
const Container = atomize.div({
    effects: {
        YThover: ':hover > button > svg:first-child',
    },
});
const Button = atomize.button();
const Image = atomize.img();
const VideoIframe = atomize.iframe();

const YoutubeButton = atomize(() => {
    return (
        <Button
            bgc="transparent"
            pos="absolute"
            t="50%"
            l="50%"
            w="68"
            h="48"
            bd="none"
            p="0"
            trf="translate(-50%, -50%)"
            aria-label="Start video"
            ol="none"
        >
            <svg width="68" height="48" viewBox="0 0 68 48">
                <path
                    fillOpacity="0.8"
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                />
                <path fill="#fff" d="M 45,24 27,14 27,34" />
            </svg>
        </Button>
    );
})({
    effects: { hover: ':hover' },
});

const YTVideo = ({
    src,
    alt,
    variant,
    autoplay,
    loop,
    start,
    end,
    ...props
}) => {
    const id = youtubeParser(src);
    const [enabled, setEnabled] = useState(variant === 'Standard' || autoplay);

    if (!id) return <div {...props}>Error: Youtube link is not correct</div>;

    const videomedia = {
        pos: 'absolute',
        h: '100%',
        w: '100%',
        t: 0,
        l: 0,
        border: 'none',
    };

    return (
        <Wrapper {...props}>
            <Container
                pos="relative"
                w="100%"
                h="0"
                pb="56.25%"
                onClick={() => setEnabled(true)}
                // ATTENTION!
                // В quarkly это не работает, возможно на сайте не обновлена версия @quarkly/atomize до 1.0.6
                YThover-fil="#f00"
            >
                {enabled ? (
                    <VideoIframe
                        {...videomedia}
                        src={generateUrl(id, {
                            autoplay: variant !== 'Standard' || autoplay,
                            start,
                            end,
                            loop,
                        })}
                        allowFullScreen
                    />
                ) : (
                    <>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet={`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`}
                            />
                            <Image
                                {...videomedia}
                                src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                                alt={alt}
                            />
                        </picture>
                        <YoutubeButton />
                    </>
                )}
            </Container>
        </Wrapper>
    );
};

export default atomize(YTVideo)(
    {
        effects: { hover: ':hover' },
        description: {
            en: 'Display video from youtube',
        },
        propInfo: {
            src: {
                description: {
                    en: 'Youtube video source',
                },
                control: 'input',
                category: 'Video',
                weight: 1,
            },
            alt: {
                description: {
                    en: 'Alternative name',
                },
                control: 'input',
                category: 'Video',
                weight: 1,
            },
            variant: {
                description: {
                    en: 'Variant of player',
                },
                control: 'select',
                category: 'Player',
                variants: ['Fast and low traffic (recomended)', 'Standard'],
                weight: 1,
            },
            loop: {
                description: {
                    en: 'Loop',
                },
                category: 'Video',
                control: 'checkbox',
            },
            autoplay: {
                description: {
                    en: 'Autoplay',
                },
                category: 'Video',
                control: 'checkbox',
            },
            start: {
                description: {
                    en: 'Start from',
                },
                category: 'Video',
                control: 'input',
            },
            end: {
                description: {
                    en: 'End',
                },
                category: 'Video',
                control: 'input',
            },
        },
    }, // configuration
    {
        // default props
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        alt: 'My video',
        variant: 'Fast and low traffic (recomended)',
        start: '0',
        loop: false,
        autoplay: false,
    }
);
