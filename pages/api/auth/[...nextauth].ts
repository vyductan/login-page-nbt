import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          const result = await axios.post('http://mcapi.yougo.vn/api/auth/login',
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
              }
            })

          if (result && result.data.data) {
            const user = result.data.data
            return user
          } else {
            throw new Error('error')
          }
        }
        catch {
          const email = credentials ? credentials.email : ''
          throw new Error('unauthorized' + '&email=' + email)
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  callbacks: {
    // Getting the JWT token from API response
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token
      }

      return token
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    }
  },
})
