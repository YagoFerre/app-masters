'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UserCircle } from '@phosphor-icons/react'
import { Input } from './components/Input'
import { Separator } from './components/Separator'
import { GoogleButton } from './components/GoogleButton'

import backgroundImage from '@/app/assets/background.png'

import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

import { AppError } from './utils/AppError'
import { signIn } from './firebase/auth/signin'
import { signInWithVisitor } from './firebase/auth/signInAnonymously'
import { signInWithGoogle } from './firebase/auth/signInWithGoogle'

import {
  Box,
  BoxSignIn,
  Button,
  ButtonBox,
  ButtonVisitor,
  Container,
  Content,
  CreateAccount,
  Form,
  ImageBox,
  InputBox,
  SignInText,
  Title,
} from './styles'

const signInFormSchema = yup.object({
  email: yup.string().email().required('Digite seu e-mail'),
  password: yup.string().required('Digite sua senha'),
})

type SignInFormData = yup.InferType<typeof signInFormSchema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function handleSignIn(data: SignInFormData) {
    try {
      await signIn(data.email, data.password)

      return router.push('/games')
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Não foi possível conectar o usuário.'

      return toast.error(title)
    }
  }

  async function handleSignInWithVisitor() {
    try {
      setIsLoading(true)
      await signInWithVisitor()

      return router.push('/games')
    } catch (error) {
      setIsLoading(false)
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Não foi possível conectar o usuário.'

      return toast.error(title)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      await signInWithGoogle()

      return router.push('/games')
    } catch (error) {
      setIsLoading(false)
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Não foi possível conectar o usuário.'

      return toast.error(title)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Content>
        <Box>
          <Title>
            Nós preparamos os melhores jogos e exclusivos para você ter uma melhor experiência, faça login ou crie uma
            conta para começar.
          </Title>

          <Form onSubmit={handleSubmit(handleSignIn)}>
            <BoxSignIn>
              <UserCircle size={32} color="#000" weight="fill" />
              <SignInText>Sign In</SignInText>
            </BoxSignIn>

            <InputBox>
              <Input
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
                error={errors.email?.message}
              />

              <Input
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                {...register('password')}
                error={errors.password?.message}
              />
            </InputBox>

            <ButtonBox>
              <Button type="submit" disabled={isSubmitting}>
                Começar
              </Button>

              <ButtonVisitor type="button" onClick={handleSignInWithVisitor} disabled={isLoading}>
                Acessar como visitante
              </ButtonVisitor>
            </ButtonBox>

            <CreateAccount>
              Não tem uma conta?<Link href="/signup">Criar conta</Link>
            </CreateAccount>

            <Separator />

            <GoogleButton type="button" onClick={handleSignInWithGoogle} disabled={isLoading} />
          </Form>
        </Box>

        <ImageBox>
          <Image
            src={backgroundImage}
            alt="Background da home"
            quality={100}
            width={600}
            style={{ borderBottomRightRadius: '500px' }}
          />
        </ImageBox>
      </Content>
      <ToastContainer />
    </Container>
  )
}
