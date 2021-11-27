import { keyframes } from '@stitches/react'
const hexToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null
}

const convertToRGB = (value: string) => {
  if (/^\$/.test(value)) {
    const token = value.replace('$', '--colors-')
    return `var(${token})`
  }
  const rgb = hexToRGB(value)
  return `${rgb?.r},${rgb?.g},${rgb?.b}`
}

const utils = {
  uDivideOpacity: (value: number) => ({
    '&>:not([hidden])~:not([hidden])': { '--u-divide-opacity': value },
  }),
  uDivideColor: (value: string) => {
    const strRGB = convertToRGB(value)
    return {
      '&>:not([hidden])~:not([hidden])': {
        '--u-divide-opacity': 1,
        borderColor: `rgba(${strRGB}, var(--u-divide-opacity))`,
      },
    }
  },
  uDivideStyle: (value: 'solid' | 'dashed' | 'dotted' | 'double' | 'none') => ({
    '&>:not([hidden])~:not([hidden])': { borderStyle: value },
  }),
  uDivideX: (value: number | string) => ({
    '&>:not([hidden])~:not([hidden])': {
      borderLeftWidth: value,
    },
  }),
  uDivideY: (value: number | string) => ({
    '&>:not([hidden])~:not([hidden])': {
      borderTopWidth: value,
    },
  }),

  uGap: (value: number | string) => ({
    margin: `calc(-1 * ${typeof value === 'number' ? value + 'px' : value}) 0 0 calc(-1 * ${typeof value === 'number' ? value + 'px' : value})`,
    width: `calc(100% + ${typeof value === 'number' ? value + 'px' : value})`,
    '& > *': {
      margin: `${typeof value === 'number' ? value + 'px' : value} 0 0 ${typeof value === 'number' ? value + 'px' : value}`,
    },
  }),

  uSpaceX: (value: number | string) => ({
    '&>:not([hidden])~:not([hidden])': {
      marginLeft: value,
    },
  }),
  uSpaceY: (value: number | string) => ({
    '&>:not([hidden])~:not([hidden])': {
      marginTop: value,
    },
  }),

  uSpin: (value: number) => ({
    animation: `${keyframes({
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    })} ${value}s linear infinite`,
  }),

  uGridRows: (value: number) => ({
    display: 'grid',
    gridTemplateRows: `repeat(${value}, minmax(0, 1fr))`,
  }),
  uGridCols: (value: number) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
  }),
  uInset: (value: number) => ({
    top: value,
    right: value,
    bottom: value,
    left: value,
  }),
  uInsetContent: (value: 'center') => {
    if (value === 'center') {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    }
    return {}
  },

  uMarginX: (value: number | 'auto') => ({
    marginLeft: value,
    marginRight: value,
  }),
  uMarginY: (value: number | 'auto') => ({
    marginTop: value,
    marginBottom: value,
  }),
  uPaddingX: (value: number | 'auto') => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  uPaddingY: (value: number | 'auto') => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  uBackgroundOpacity: (value: number) => ({ '--u-bg-opacity': value }),
  uBackgroundColor: (value: string) => {
    const strRGB = convertToRGB(value)
    return {
      '--u-bg-opacity': 1,
      backgroundColor: `rgba(${strRGB}, var(--u-bg-opacity))`,
    }
  },
  uBorderOpacity: (value: number) => ({ '--u-border-opacity': value }),
  uBorderColor: (value: string) => {
    // console.log(value)
    // const r = hexToRgbWithOpacity(value)
    // const strRGB = checkThemeToken(value)
    const strRGB = convertToRGB(value)
    return {
      '--u-border-opacity': 1,
      borderColor: `rgba(${strRGB}, var(--u-border-opacity))`,
    }
  },
  uTextOpacity: (value: number) => ({ '--u-text-opacity': value }),
  uTextColor: (value: string) => {
    const strRGB = convertToRGB(value)
    return {
      '--u-text-opacity': 1,
      color: `rgba(${strRGB}, var(--u-text-opacity))`,
    }
  },

  uTextSize: (value: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl') => {
    switch (value) {
      case 'xs':
        return {
          fontSize: '0.75rem',
          lineHeight: '1rem',
        }
      case 'sm':
        return {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        }
      case 'md':
        return {
          fontSize: '1rem',
          lineHeight: '1.5rem',
        }
      case 'lg':
        return {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
        }
      case 'xl':
        return {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        }
      case '2xl':
        return {
          fontSize: '1.5rem',
          lineHeight: '2rem,',
        }
      case '3xl':
        return {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
        }
      case '4xl':
        return {
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
        }
      default:
        return {
          fontSize: '1rem',
          lineHeight: '1.5rem',
        }
    }
  },
}

export default utils
