import { create } from '@storybook/theming/create';

export default create({
    base: '#191C22',
    
    colorPrimary: '#AFBED1',
    colorSecondary: '#248DE0',
    
    // UI
    appBg: '#0D1117',
    appContentBg: '#191C22',
    appBorderColor: '#2C3139',
    appBorderRadius: 0,
    
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    
    // Text colors
    textColor: '#AFBED1',
    textInverseColor: '#191C22',
    
    // Toolbar default and active colors
    barTextColor: '#7A869A',
    barSelectedColor: '#F8FAFF',
    barBg: '#22262E',
    
    // Form colors
    inputBg: '#2C3139',
    inputBorder: '#2C3139',
    inputTextColor: '#F8FAFF',
    inputBorderRadius: 4,
    
    brandTitle: 'quarkly molecules',
    brandUrl: 'https://quarkly.io',
    brandImage: 'https://uploads.quarkly.io/landing/logo-on-dark.svg',
});
