import axios from 'axios'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { styled } from '../stitches.config'
import ModalDialog from './ModalDialog'

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


  const handleSubmit = async () => {
    const email = refEmail.current?.value
    const password = refPass.current?.value
    if (!email || !password) return
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
      setError(true)
      return
    }
    try {
      await axios.post('http://mcapi.yougo.vn/api/auth/login', {
        email,
        password
      })
      window.location.href = '/'
    } catch (error) {
      setModalVisible(true)
    }
  }
  return <Container>
    <Image src="/logo.png" width={272} height={58} />
    <Form>
      <Title>Đăng nhập tài khoản</Title>
      <Label color={error ? 'error' : undefined}>Email</Label>
      <Input ref={refEmail} placeholder="Nhập email" type='email' borderColor={error ? 'error' : undefined} onInput={() => setError(false)} />
      {error && <ErrorMsg>Email sai định dạng</ErrorMsg>}
      <Label >Mật khẩu</Label>
      <Input ref={refPass} placeholder="Nhập mật khẩu" type={showPass ? 'text' : 'password'} />
      <ShowPass onClick={() => setShowPass(!showPass)}>{showPass ? 'Ẩn' : 'Hiện'} mật khẩu</ShowPass>
      <Submit onClick={handleSubmit}>Đăng nhập</Submit>
      <ForgotPass>Quên thông tin đăng nhập</ForgotPass>
    </Form>
    <ModalDialog visible={modalVisible} title="Sai thông tin đăng nhập"
      message="Email hoặc mật khẩu không chính xác vui lòng kiểm tra lại"
      onCancel={() => setModalVisible(false)} />
  </Container>
}
