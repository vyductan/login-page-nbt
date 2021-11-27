import { Button } from 'antd'
import { ReactNode, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { styled } from '../stitches.config'
import Image from 'next/image'

const Wrap = styled(motion.div, {
  display: 'flex',
  position: 'fixed',
  uInset: 0,
  zIndex: 9999,
  transition: 'opacity .2s ease',
  '-webkit-tap-highlight-color': 'rgba(255,255,255,0)',
  justifyContent: 'center',
  '-webkit-box-pack': 'center',
  alignItems: 'center',
  '-webkit-box-align': 'center',
})
const Main = styled('div', {
  position: 'relative',
  zIndex: 9999,
  transition: 'all .2s ease',
  backfaceVisibility: 'hidden',
})
const Box = styled('div', {
  position: 'relative',
  background: '$surface1',
  border: '1px solid $border',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  color: '$text1',
  minWidth: '$dialogMinWidth',
  maxWidth: '$dialogMaxWidth',
  minHeight: '$dialogMinHeight',
  outline: 0,
  paddingBottom: '$2xl',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

})
const Icon = styled('div', {
  padding: '$2xl $2xl 0'
})
const Title = styled('div', {
  fontSize: '1rem',
  fontWeight: 700,
  marginBottom: '1rem',
})
const Body = styled('div', {
  padding: '0 $2xl',
  marginBottom: '1.25rem',
  textAlign: 'center'
})
const Ctrl = styled('div', {
  padding: '0 $2xl',
  '& button': {
    backgroundColor: '#f9aa19',
    border: 0,
    borderRadius: '$base',
    color: '#000',
    margin: '0 $xs',
    width: 140,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#f9aa19'
    }
  },

})
const Mask = styled(Wrap, {
  backgroundColor: '$mask',
  opacity: .5,
  zIndex: 999
})
type Props = {
  title: string
  message: string
  visible?: boolean
  trigger?: ReactNode
  onCancel: () => void
}
export default function ModalDialog(props: Props) {
  const { title, message, visible, onCancel } = props

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        onCancel()
        event.preventDefault();
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  function handleCancel() {
    onCancel()
  }
  return (
    <>
      <AnimatePresence>
        {visible && (
          <Wrap initial={{ opacity: 0, scale: 1.05 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.05, opacity: 0 }} transition={{ duration: 0.1 }} >
            <Main>
              <Box>
                <Icon>
                  <Image src='/icon-war.png' width={50} height={48} />
                </Icon>
                <Title>{title}</Title>
                <Body>
                  {message}
                </Body>
                <Ctrl>
                  <Button type='primary' size='large' onClick={handleCancel}>Xác nhận</Button>
                </Ctrl>
              </Box>
            </Main>
            <Mask onClick={handleCancel} />
          </Wrap>
        )}
      </AnimatePresence>
    </>
  )
}
