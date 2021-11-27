import { GetServerSideProps } from 'next'
import { styled } from '../stitches.config'
import { getSession } from "next-auth/react"

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const session = await getSession({ req })

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: {
    }
  }
}

export default Home
