import { styled } from '../stitches.config'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fbfbfb',
  height: '100vh'
})
type Props = {}
const Home = ({ }: Props) => {

  return (
    <Container>Bạn đã đăng nhập thành côcng</Container>
  )
}

export default Home
