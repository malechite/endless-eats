type Colors = {
  [key: string]: string;
};

type Fonts = {
  [key: string]: string;
};

interface Theme {
  colors: Colors;
  fonts: Fonts;
}

export const theme: Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    grey100: '#FAFAFA',
    grey200: '#EFF0F3',
    grey300: '#E4E5E9',
    grey400: '#C9CACF',
    grey500: '#90939D',
    grey600: '#747681',
    grey700: '#62636A',
    grey800: '#4D5056',
    grey900: '#303136',
    red100: '#FCD3E0',
    red200: '#FABACE',
    red300: '#F790B1',
    red400: '#F35889',
    red500: '#D5104F',
    red600: '#BE0E46',
    red700: '#980B38',
    red800: '#640725',
    red900: '#3E0517',
  },
  fonts: {
    extraSmall: 'normal normal 400 10px/12px Roboto, Arial, sans-serif',
    small: 'normal normal 400 12px/14px Roboto, Arial, sans-serif',
    smallThin: 'normal normal 100 12px/14px Roboto, Arial, sans-serif',
    medium: 'normal normal 400 14px/20px Roboto, Arial, sans-serif',
    mediumThin: 'normal normal 100 14px/20px Roboto, Arial, sans-serif',
    normal: 'normal normal 400 16px/24px Roboto, Arial, sans-serif',
    normalThin: 'normal normal 100 16px/24px Roboto, Arial, sans-serif',
    bold: 'normal normal 700 16px/24px Roboto, Arial, sans-serif',
    large: 'normal normal 400 20px/28px Roboto, Arial, sans-serif',
    largeThin: 'normal normal 100 20px/28px Roboto, Arial, sans-serif',
    header: 'normal normal 100 64px/64px Roboto, Arial, sans-serif',
  },
};
