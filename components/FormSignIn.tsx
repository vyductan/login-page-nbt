import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { styled } from '../stitches.config'
import ModalDialog from './ModalDialog'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: 340,
  color: '#000000b3'
})
const Form = styled('div', {
  padding: '$xl',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  uGap: 4,
})
const Title = styled('div', {
  fontWeight: 'bold',
  textAlign: 'center'
})
const Label = styled('div', {
  fontWeight: 'bold',
  variants: {
    color: {
      error: {
        color: 'red'
      }
    }
  }
})
const Input = styled('input', {
  borderRadius: 12,
  border: '1px solid #00000050',
  padding: '12px 12px',
  width: '100%',
  variants: {
    borderColor: {
      error: {
        borderColor: 'red',
        // '&:focus': {
        //   borderColor: 'red'
        // }
      }
    }
  }
})
const ErrorMsg = styled('div', {
  color: 'red'
})
const ShowPass = styled('div', {
  color: 'blue',
  cursor: 'pointer'
})
const Submit = styled('button', {
  backgroundColor: '#f9aa19',
  fontWeight: 'bold',
  width: '100%',
  padding: '12px',
  borderRadius: 12,
  marginTop: 24,
})
const ForgotPass = styled('div', {
  marginTop: 48,
  color: 'blue',
  cursor: 'pointer'
})
export default function Main() {
  const refEmail = useRef<HTMLInputElement>(null)
  const refPass = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!refEmail.current) return
    if (router.query.error) {
      refEmail.current.value = router.query.email as string || ''
      setModalVisible(true)
    }
  }, [router])

  function handleKeyUp(e: any) {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    const email = refEmail.current?.value
    const password = refPass.current?.value
    if (!email || !password) return
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
      setError(true)
      return
    }
    try {
      signIn('credentials',
        {
          email,
          password,
          // The page where you want to redirect to after a 
          // successful login
          callbackUrl: `${window.location.origin}`
        }
      )
    } catch (error) {
      setModalVisible(true)
    }
  }
  return <Container>
    <Image src="/logo.png" width={272} height={58} />
    <Form>
      <Title>????ng nh???p t??i kho???n</Title>
      <Label color={error ? 'error' : undefined}>Email</Label>
      <Input ref={refEmail} placeholder="Nh???p email" type='email' borderColor={error ? 'error' : undefined} onInput={() => setError(false)} onKeyUp={handleKeyUp} />
      {error && <ErrorMsg>Email sai ?????nh d???ng</ErrorMsg>}
      <Label >M???t kh???u</Label>
      <Input ref={refPass} placeholder="Nh???p m???t kh???u" type={showPass ? 'text' : 'password'} onKeyUp={handleKeyUp} />
      <ShowPass onClick={() => setShowPass(!showPass)}>{showPass ? '???n' : 'Hi???n'} m???t kh???u</ShowPass>
      <Submit onClick={handleSubmit}>????ng nh???p</Submit>
      <ForgotPass>Qu??n th??ng tin ????ng nh???p</ForgotPass>
    </Form>
    <ModalDialog visible={modalVisible} title="Sai th??ng tin ????ng nh???p"
      message="Email ho???c m???t kh???u kh??ng ch??nh x??c vui l??ng ki???m tra l???i"
      onCancel={() => setModalVisible(false)} />
  </Container>
}
