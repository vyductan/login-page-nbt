import { styled } from '../stitches.config'
import Image from 'next/image'
import Main from '../components/FormSignIn'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { getSession } from "next-auth/react"
import { GetServerSideProps } from 'next'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fbfbfb',
  uGap: 40,
  height: '100vh'
})
const ImageLeft = styled('div', {
  position: 'relative',
  variants: {
    display: {
      hidden: {
        display: 'none'
      }
    }
  }
})

type Props = {}
const SignIn = ({ }: Props) => {

  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <Container>
      <ImageLeft display={isMobile ? 'hidden' : undefined}>
        <Image src="/img.png" width={342} height={600} />
      </ImageLeft>
      <Main />
    </Container>


  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const session = await getSession({ req })

  if (session && session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
    }
  }
}

export default SignIn
