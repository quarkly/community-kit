import React, { useState, useEffect, useCallback, useRef } from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const overrides = {
  'Button': {
    kind: 'Button',
    props: {
      children: 'Toggle',

      'focus-box-shadow': 'none'
    }
  },
  'Content': {
    kind: 'Box',
    props: {
      'padding-top': '8px',
      'min-height': '0'
    }
  },
  'Wrapper': {
    kind: 'Box',
    props: {
      'min-height': '0',
      'overflow': 'hidden'
    }
  },
  'Wrapper :open': {
    kind: 'Box',
    props: {
      'pointer-events': 'all',
      'visibility': 'visible',
      'opacity': '1',
    },
  },
  'Wrapper :closed': {
    kind: 'Box',
    props: {
      'pointer-events': 'none',
      'visibility': 'hidden',
      'opacity': '0',
    },
  },
};

const CollapseComponent = ({
  minDuration,
  maxDuration,
  animFunction,
  ...props
}) => {
  const { override, children, rest } = useOverrides(props, overrides);
  
  const contentRef = useRef(null);
  const [params, setParams] = useState({
    isOpen: false,
    isEmpty: false,
    height: 0,
    duration: 0,
    transition: 'none'
  });
  
  const updateParams = useCallback(({
    isOpen,
    isEmpty
  }) => {
    const { offsetHeight } = contentRef.current;
    const height = (isOpen && !isEmpty) ? offsetHeight : (isEmpty) ? 'auto' : 0;
    let duration = parseFloat(minDuration) + offsetHeight / 4000;
    
    if (duration > maxDuration) {
      duration = maxDuration;
    }
    
    setParams({
      isOpen,
      isEmpty,
      height,
      duration,
      
      transition: (isOpen) ? `
        max-height ${duration}s ${animFunction} 0s,
        visibility 0s ${animFunction} 0s,
        opacity ${duration}s ${animFunction} 0s
      ` : `
        max-height ${duration}s ${animFunction} 0s,
        visibility 0s ${animFunction} ${duration}s,
        opacity ${duration}s ${animFunction} 0s
      `
    });
  }, []);
  
  const toggleOpen = useCallback(() => {
    updateParams({
      isOpen: !params.isOpen,
      isEmpty: params.isEmpty,
    });
  }, [
    params.isOpen,
    params.isEmpty
  ]);
  
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      updateParams({
        isOpen: params.isOpen,
        isEmpty: params.isEmpty,
      });
    });
    
    observer.observe(contentRef.current);
    
    return function cleanup() {
      observer.unobserve(contentRef.current);
      observer.disconnect();
    };
  }, [
    contentRef.current
  ]);
  
  useEffect(() => {
    if (!contentRef.current) return;
    
    const isEmpty = contentRef.current?.innerHTML === '<!--child placeholder-->';
    
    updateParams({
      isOpen: params.isOpen || isEmpty,
      isEmpty,
    });
  }, [children.length]);

  return (
    <Box {...rest}>
      <Button
        {...override('Button')}
        onPointerDown={toggleOpen}
        disabled={params.isEmpty}
      />
      <Box
        {...override(
          'Wrapper',
          `Wrapper ${params.isOpen ? ':open' : ':close'}`
        )}
        max-height={params.height}
        transition={params.transition}
      >
        <Box
          {...override('Content')}
          ref={contentRef}
        >
          {children}
        </Box>
        { params.isEmpty &&
          <ComponentNotice
            message="Drag component here"
          />
        }
      </Box>
    </Box>
  )
};

const propInfo = {
  minDuration: {
    title: 'Min animation duration (in seconds)',
    control: 'input',
    variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
    type: 'text',
    category: 'Main',
    weight: 1,
  },
  maxDuration: {
    title: 'Max animation duration (in seconds)',
    control: 'input',
    variants: ['1s', '1.5s', '2s', '2.5s', '3s', '4s', '5s'],
    type: 'text',
    category: 'Main',
    weight: 1,
  },
  animFunction: {
    title: 'Animation function',
    control: 'input',
        variants: [
          'linear',
          'ease',
          'ease-in',
          'ease-out',
          'ease-in-out',
          'step-start',
          'step-end'
        ],
    type: 'text',
    category: 'Main',
    weight: 1,
  }
};

const defaultProps = {
  minDuration: '0.5s',
  maxDuration: '1s',
  animFunction: 'linear',

  'padding': '8px',
  'border': '1px solid --color-lightD2',
  'border-radius': '4px'
}

Object.assign(CollapseComponent, {
  title: 'Collapse',
  description: {
    en: 'Collapse component',
  },
  overrides,
  propInfo,
  defaultProps,
});

export default CollapseComponent;
