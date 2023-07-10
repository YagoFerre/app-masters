'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import background from '../assets/background1.png'

import { UserCircle } from '@phosphor-icons/react'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { GoogleButton } from '../components/GoogleButton'

import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

import { signUp } from '../firebase/auth/signup'
import { signInWithGoogle } from '../firebase/auth/signInWithGoogle'
import { AppError } from '../utils/AppError'

import {
  Button,
  Container,
  Content,
  Form,
  FormBox,
  ImageBox,
  InputBox,
  SignInText,
  SignUpBox,
  SignUpText,
  Title,
} from './styles'

const signUpFormSchema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email().required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatório'),
})

type SignUpFormData = yup.InferType<typeof signUpFormSchema>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function handleSignUp(data: SignUpFormData) {
    try {
      await signUp(data.email, data.password)

      return router.push('/games')
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Erro ao criar conta.'

      return toast.error(title)
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
      const title = isAppError ? error?.message : 'Erro ao criar conta.'

      return toast.error(title)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Content>
        <ImageBox>
          <Image src={background} alt="Background do Sign Up" quality={100} width={400} />
        </ImageBox>

        <FormBox>
          <Title>Crie sua conta</Title>
          <Form onSubmit={handleSubmit(handleSignUp)}>
            <SignUpBox>
              <UserCircle size={32} color="#000" weight="fill" />
              <SignUpText>Sign Up</SignUpText>
            </SignUpBox>

            <InputBox>
              <Input
                label="Nome completo"
                placeholder="Digite seu nome completo"
                {...register('name')}
                error={errors.name?.message}
              />
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
                {...register('email')}
                error={errors.email?.message}
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                {...register('password')}
                error={errors.password?.message}
              />
            </InputBox>

            <Button type="submit" disabled={isSubmitting}>
              Criar
            </Button>

            <SignInText>
              Já tem uma conta? <Link href="/">Entrar</Link>
            </SignInText>

            <Separator />

            <GoogleButton type="button" onClick={handleSignInWithGoogle} disabled={isLoading} />
          </Form>
        </FormBox>
      </Content>
      <ToastContainer />
    </Container>
  )
}
