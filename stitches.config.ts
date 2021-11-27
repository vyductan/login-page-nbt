import { generate } from '@ant-design/colors'
import { createStitches } from '@stitches/react'
import utils from './stitches.utils.config'

const hue = 31;
const saturation = '100%'
const lightness = '50%'
const colors = generate(`hsl( ${hue}, ${saturation}, ${lightness})`)

export const { styled, getCssText, globalCss, createTheme, css, keyframes } = createStitches({
  prefix: 'v',
  media: {
    xs: '(min-width: 480px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  theme: {
    fonts: {},
    colors: {
      //preview
      'brand-hue': hue,
      'brand-saturation': saturation,
      'brand-lightness': lightness,
      brand: 'hsl($brand-hue $brand-saturation $brand-lightness)',
      background: 'hsl($brand-hue $brand-saturation $brand-lightness / 10%)',
      text1: 'hsl($brand-hue $brand-saturation 10%)',
      text2: 'hsl($brand-hue 30% 30%)',
      surface1: 'hsl($brand-hue 20% 99%)',
      surface2: 'hsl($brand-hue 20% 92%)',
      surface3: 'hsl($brand-hue 25% 90%)',
      surface4: 'hsl($brand-hue 20% 85%)',
      mask: '#000000',

      selected: colors[0],
      hover: 'hsl( calc($brand-hue - 10) $brand-saturation $brand-lightness)',
      click: colors[6],

      border: 'rgba(0,0,0,.1)',


      // with utility
      primary: '0,0,0',
      text: '0,0,0',
      link: '0, 112, 243',
      // background: '255, 255, 255',
      // hover: '50,50,50',

      // nomal
      divide: 'rgb(0,0,0, 10%)',
      danger: '#ff4d4f'
    },
    fontSizes: {
      title: '1rem',
      iconSmall: '13px',
      iconMiddle: '36px',
    },
    sizes: {
      header: '80px',
      dialogMinWidth: '250px',
      dialogMaxWidth: '320px',
      dialogMinHeight: '150px',
    },
    space: {
      mi: '2px',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
      '5xl': '72px',
    },
    shadows: {
      // preview
      surface: '$colors$brand-hue 10% 20%',
      strength: .2,
      rad: `0 2.8px 2.2px hsl($surface / calc($strength + .03)),
            0 6.7px 5.3px hsl($surface / calc($strength + .01)),
            0 12.5px 10px hsl($surface / calc($strength + .02)),
            0 22.3px 17.9px hsl($surface / calc($strength + .02)),
            0 41.8px 33.4px hsl($surface / calc($strength + .03)),
            0 100px 80px hsl($surface / $strength)`,

      icon: '0 1px 3px 0 rgb(0,0,0,0.2)'
    },
    radii: {
      base: '5px',
      sm: '8px',
    },
  },
  utils,
})

export const darkTheme = createTheme({
  colors: {
    // preview
    brand: 'hsl( $brand-hue calc($brand-saturation/2) calc($brand-lightness/1.5) )',
    text1: 'hsl( $brand-hue 15% 85% )',
    text2: 'hsl( $brand-hue 5% 65% )',
    surface1: 'hsl($brand-hue 10% 10%)',
    surface2: 'hsl($brand-hue 10% 15%)',
    surface3: 'hsl($brand-hue 5% 20%)',
    surface4: 'hsl($brand-hue 5% 25%)',

    primary: '255, 255, 255',

    text: '255, 255, 255',
    background: '0,0,0',
    hover: '240,240,240'
  },
  shadows: {
    // preview
    surface: '$colors$brand-hue 50% 3%',
    strength: .8,
    rad: `0 2.8px 2.2px hsl($surface / calc($strength + .03)),
    0 6.7px 5.3px hsl($surface / calc($strength + .01)),
    0 12.5px 10px hsl($surface / calc($strength + .02)),
    0 22.3px 17.9px hsl($surface / calc($strength + .02)),
    0 41.8px 33.4px hsl($surface / calc($strength + .03)),
    0 100px 80px hsl($surface / $strength)`,

    icon: '0 1px 3px 0 rgb(255,255,255, 0.2)'
  },
})

export const dimTheme = createTheme({
  colors: {
    // preview
    brand: 'hsl( $brand-hue calc($brand-saturation/1.25) calc($brand-lightness/1.25) )',
    text1: 'hsl( $brand-hue 15% 75% )',
    text2: 'hsl( $brand-hue 10% 61% )',
    surface1: 'hsl($brand-hue 10% 25%)',
    surface2: 'hsl($brand-hue 5% 30%)',
    surface3: 'hsl($brand-hue 10% 20%)',
    surface4: 'hsl($brand-hue 5% 35%)',
    mask: '#ffffff',
  },
  shadows: {
    // preview
    shadow: '$colors$brand-hue 30% 13%',
    strength: .2,
  },
})
