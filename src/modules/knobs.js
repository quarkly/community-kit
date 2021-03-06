import { text, color, select, number } from '@storybook/addon-knobs';

export default (defaults = {}) => ({
    // Layout

    display: select(
        'display',
        {
            block: 'block',
            inline: 'inline',
            'inline-block': 'inline-block',
            flex: 'flex',
            grid: 'grid',
            none: 'none',
            contents: 'contents',
            'inline-flex': 'inline-flex',
            'inline-grid': 'inline-grid',
            'inline-table': 'inline-table',
            'list-item': 'list-item',
            'run-in': 'run-in',
            inherit: 'inherit',
            initial: 'initial',
        },
        defaults.display || 'inline-block',
        'Layout'
    ),
    width: text('width', defaults.width || '', 'Layout'),
    'min-width': text('minWidth', defaults['min-width'] || '', 'Layout'),
    'max-width': text('maxWidth', defaults['max-width'] || '', 'Layout'),
    height: text('height', defaults.height || '', 'Layout'),
    'min-height': text('minHeight', defaults['min-height'] || '', 'Layout'),
    'max-height': text('maxHeight', defaults['max-height'] || '', 'Layout'),

    'overflow-x': select(
        'overflowX',
        {
            '–': 'initial',
            auto: 'auto',
            hidden: 'hidden',
            scroll: 'scroll',
            visible: 'visible',
            inherit: 'inherit',
        },
        defaults['overflow-x'] || 'visible',
        'Layout'
    ),
    'overflow-y': select(
        'overflowY',
        {
            '–': 'initial',
            auto: 'auto',
            hidden: 'hidden',
            scroll: 'scroll',
            visible: 'visible',
            inherit: 'inherit',
        },
        defaults['overflow-y'] || 'visible',
        'Layout'
    ),

    'flex-direction': select(
        'flexDirection',
        {
            '–': 'initial',
            row: 'row',
            'row-reverse': 'row-reverse',
            column: 'column',
            'column-reverse': 'column-reverse',
        },
        defaults['flex-direction'] || 'row',
        'Layout'
    ),
    'align-items': select(
        'alignItems',
        {
            '–': 'initial',
            'flex-start': 'flex-start',
            'flex-end': 'flex-end',
            center: 'center',
            baseline: 'baseline',
            stretch: 'stretch',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
        },
        defaults['align-items'] || '–',
        'Layout'
    ),
    'justify-content': select(
        'justifyContent',
        {
            '–': 'initial',
            center: 'center',
            start: 'start',
            end: 'end',
            'flex-start': 'flex-start',
            'flex-end': 'flex-end',
            left: 'left',
            right: 'right',
            baseline: 'baseline',
            'first baseline': 'first baseline',
            'last baseline': 'last baseline',
            'space-between': 'space-between',
            'space-around': 'space-around',
            'space-evenly': 'space-evenly',
            stretch: 'stretch',
            'safe center': 'safe center',
            'unsafe center': 'unsafe center',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
        },
        '–',
        defaults['justify-content'] || 'Layout'
    ),
    'flex-wrap': select(
        'flexWrap',
        {
            '–': 'initial',
            nowrap: 'nowrap',
            wrap: 'wrap',
            'wrap-reverse': 'wrap-reverse',
        },
        defaults['flex-wrap'] || 'nowrap',
        'Layout'
    ),

    // Typography

    font: text('font', defaults.font || '', 'Typography'),
    'font-family': text(
        'fontFamily',
        defaults['font-family'] || '',
        'Typography'
    ),
    'font-size': text('fontSize', defaults['font-size'] || '', 'Typography'),
    'line-height': text(
        'lineHeight',
        defaults['line-height'] || '',
        'Typography'
    ),
    'font-weight': text(
        'fontWeight',
        defaults['font-weight'] || '',
        'Typography'
    ),
    'font-style': select(
        'fontStyle',
        {
            '–': 'initial',
            normal: 'normal',
            italic: 'italic',
        },
        defaults['font-style'] || '–',
        'Typography'
    ),
    'font-variant': select(
        'fontVariant',
        {
            '–': 'initial',
            normal: 'normal',
            'small-caps': 'small-caps',
        },
        defaults['font-variant'] || '–',
        'Typography'
    ),
    'letter-spacing': text(
        'letterSpacing',
        defaults['letter-spacing'] || '',
        'Typography'
    ),
    'white-space': select(
        'whiteSpace',
        {
            '–': 'initial',
            normal: 'normal',
            nowrap: 'nowrap',
            pre: 'pre',
            'pre-line': 'pre-line',
            'pre-wrap': 'pre-wrap',
        },
        defaults['white-space'] || '–',
        'Typography'
    ),
    'text-transform': text(
        'textTransform',
        defaults['text-transform'] || '',
        'Typography'
    ),
    'text-decoration': text(
        'textDecoration',
        defaults['text-decoration'] || '',
        'Typography'
    ),
    'text-align': select(
        'textAlign',
        {
            left: 'left',
            center: 'center',
            right: 'right',
            justify: 'justify',
        },
        defaults['text-align'] || 'left',
        'Typography'
    ),
    color: color('color', defaults.color || '', 'Typography'),

    // Indents

    'margin-top': text('marginTop', defaults['margin-top'] || '', 'Indents'),
    'margin-right': text(
        'marginRight',
        defaults['margin-right'] || '',
        'Indents'
    ),
    'margin-bottom': text(
        'marginBottom',
        defaults['margin-bottom'] || '',
        'Indents'
    ),
    'margin-left': text('marginLeft', defaults['margin-left'] || '', 'Indents'),

    'padding-top': text('paddingTop', defaults['padding-top'] || '', 'Indents'),
    'padding-right': text(
        'paddingRight',
        defaults['padding-right'] || '',
        'Indents'
    ),
    'padding-bottom': text(
        'paddingBottom',
        defaults['padding-bottom'] || '',
        'Indents'
    ),
    'padding-left': text(
        'paddingLeft',
        defaults['padding-left'] || '',
        'Indents'
    ),

    // Background

    background: text('background', defaults.background || '', 'Background'),
    'background-image': text(
        'backgroundImage',
        defaults['background-image'] || 'url()',
        'Background'
    ),
    'background-position': text(
        'backgroundPosition',
        defaults['background-position'] || 'none',
        'Background'
    ),
    'background-size': select(
        'backgroundSize',
        {
            none: 'none',
            cover: 'cover',
            contain: 'contain',
        },
        defaults['background-size'] || 'none',
        'Background'
    ),
    'background-repeat': select(
        'backgroundRepeat',
        {
            '–': 'initial',
            repeat: 'repeat',
            'repeat-x': 'repeat-x',
            'repeat-y': 'repeat-y',
            'no-repeat': 'no-repeat',
            space: 'space',
            round: 'round',
        },
        defaults['background-repeat'] || '–',
        'Background'
    ),
    'background-attachment': select(
        'backgroundAttachment',
        {
            '–': 'initial',
            fixed: 'fixed',
            local: 'local',
            scroll: 'scroll',
        },
        defaults['background-attachment'] || '–',
        'Background'
    ),
    'background-clip': select(
        'backgroundClip',
        {
            '–': 'initial',
            'border-box': 'border-box',
            'padding-box': 'padding-box',
            'content-box': 'content-box',
        },
        defaults['background-clip'] || '–',
        'Background'
    ),

    // Border

    'border-width': text(
        'borderWidth',
        defaults['border-width'] || '0px',
        'Border'
    ),
    'border-style': select(
        'borderStyle',
        {
            none: 'none',
            dotted: 'dotted',
            dashed: 'dashed',
            solid: 'solid',
            double: 'double',
            groove: 'groove',
            ridge: 'ridge',
            inset: 'inset',
            outset: 'outset',
            hidden: 'hidden',
            inherit: 'inherit',
        },
        defaults['border-style'] || 'none',
        'Border'
    ),
    'border-color': color(
        'borderColor',
        defaults['border-color'] || 'rgb(118,118,118)',
        'Border'
    ),
    'border-radius': text(
        'borderRadius',
        defaults['border-radius'] || '',
        'Border'
    ),

    // Position

    position: select(
        'position',
        {
            '–': 'initial',
            absolute: 'absolute',
            fixed: 'fixed',
            sticky: 'sticky',
            relative: 'relative',
            static: 'static',
            inherit: 'inherit',
        },
        defaults.position || '–',
        'Position'
    ),
    top: text('top', defaults.top || '', 'Position'),
    right: text('right', defaults.right || '', 'Position'),
    bottom: text('bottom', defaults.bottom || '', 'Position'),
    left: text('left', defaults.left || '', 'Position'),
    'z-index': text('zIndex', defaults['z-index'] || 'auto', 'Position'),

    // Effects

    opacity: number('opacity', defaults.opacity || '1', '{1}', 'Effects'),
    cursor: select(
        'cursor',
        {
            '–': 'initial',
            auto: 'auto',
            default: 'default',
            none: 'none',
            'context-menu': 'context-menu',
            help: 'help',
            pointer: 'pointer',
            progress: 'progress',
            wait: 'wait',
            cell: 'cell',
            crosshair: 'crosshair',
            text: 'text',
            'vertical-text': 'vertical-text',
            alias: 'alias',
            copy: 'copy',
            move: 'move',
            'no-drop': 'no-drop',
            'not-allowed': 'not-allowed',
            'e-resize': 'e-resize',
            'n-resize': 'n-resize',
            'ne-resize': 'ne-resize',
            'nw-resize': 'nw-resize',
            's-resize': 's-resize',
            'se-resize': 'se-resize',
            'sw-resize': 'sw-resize',
            'w-resize': 'w-resize',
            'ew-resize': 'ew-resize',
            'ns-resize': 'ns-resize',
            'nesw-resize': 'nesw-resize',
            'nwse-resize': 'nwse-resize',
            'col-resize': 'col-resize',
            'row-resize': 'row-resize',
            'all-scroll': 'all-scroll',
            'zoom-in': 'zoom-in',
            'zoom-out': 'zoom-out',
            grab: 'grab',
            grabbing: 'grabbing',
        },
        defaults.cursor || '–',
        'Effects'
    ),
    'blend-mode': select(
        'blendMode',
        {
            '–': 'initial',
            normal: 'normal',
            multiply: 'multiply',
            screen: 'screen',
            overlay: 'overlay',
            darken: 'darken',
            lighten: 'lighten',
            'color-dodge': 'color-dodge',
            'color-burn': 'color-burn',
            'hard-light': 'hard-light',
            'soft-light': 'soft-light',
            difference: 'difference',
            exclusion: 'exclusion',
            hue: 'hue',
            saturation: 'saturation',
            color: 'color',
            luminosity: 'luminosity',
        },
        defaults['blend-mode'] || '–',
        'Effects'
    ),
    'box-shadow': text(
        'boxShadow',
        defaults['box-shadow'] || 'none',
        'Effects'
    ),
    'text-shadow': text(
        'textShadow',
        defaults['text-shadow'] || 'none',
        'Effects'
    ),
    transition: text(
        'transition',
        defaults.transition || 'all 0s ease 0s',
        'Effects'
    ),
    transform: text('transform', defaults.transform || 'none', 'Effects'),
    filter: text('filter', defaults.filter || 'none', 'Effects'),
});
