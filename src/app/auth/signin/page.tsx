'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '../../components/Input'
import { Separator } from '../../components/Separator'
import { GoogleButton } from '../../components/GoogleButton'

import backgroundImage from '../../../assets/background2.jpg'
import logo from '../../../assets/logo.png'

import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

import { AppError } from '../../../utils/AppError'
import { signIn } from '../../firebase/auth/signin'
import { signInWithVisitor } from '../../firebase/auth/signInAnonymously'
import { signInWithGoogle } from '../../firebase/auth/signInWithGoogle'

import { BoxLogo, ButtonBox, Container, CreateAccount, Form, InputBox, LogoText } from './styles'
import { Button } from '../../components/Button'

const signInFormSchema = yup.object({
  email: yup.string().email().required('Digite seu e-mail'),
  password: yup.string().required('Digite sua senha'),
})

type SignInFormData = yup.InferType<typeof signInFormSchema>

export default function SignIn() {
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

      return router.push('/')
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

      return router.push('/')
    } catch (error) {
      setIsLoading(false)
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Não foi possível conectar o usuário.'

      return toast.error(title)
    }
  }

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      await signInWithGoogle()

      return router.push('/')
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
      <Image src={backgroundImage} alt="Background da home" quality={100} fill style={{ objectFit: 'cover' }} />

      <Form onSubmit={handleSubmit(handleSignIn)}>
        <BoxLogo>
          <Image src={logo} alt="Logo" quality={100} width={40} />
          <LogoText>AppGame</LogoText>
        </BoxLogo>

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
          <Button type="submit" title="começar" disabled={isSubmitting} />

          <Button
            type="button"
            outline
            title="entrar como visitante"
            onClick={handleSignInWithVisitor}
            disabled={isLoading}
          />
        </ButtonBox>

        <CreateAccount>
          Não tem uma conta?<Link href="/auth/signup">Criar conta</Link>
        </CreateAccount>

        <Separator />

        <GoogleButton type="button" onClick={handleSignInWithGoogle} disabled={isLoading} />
      </Form>

      <ToastContainer />
    </Container>
  )
}
