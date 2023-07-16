'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import backgroundImage from '../../../assets/background2.jpg'
import logo from '../../../assets/logo.png'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Separator } from '../../components/Separator'
import { GoogleButton } from '../../components/GoogleButton'

import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

import { signUp } from '../../firebase/auth/signup'
import { signInWithGoogle } from '../../firebase/auth/signInWithGoogle'
import { AppError } from '../../../utils/AppError'

import { BoxLogo, ButtonBox, Container, CreateAccount, Form, InputBox, LogoText } from './styles'

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
      setIsLoading(true)
      await signUp(data.email, data.password)

      return router.push('/')
    } catch (error) {
      setIsLoading(false)
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Esse e-mail já existe.'

      return toast.error(title)
    } finally {
      setIsLoading(false)
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
      const title = isAppError ? error?.message : 'Erro ao criar conta.'

      return toast.error(title)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Image src={backgroundImage} alt="Background da home" quality={100} fill style={{ objectFit: 'cover' }} />

      <Form onSubmit={handleSubmit(handleSignUp)}>
        <BoxLogo>
          <Image src={logo} alt="Logo" quality={100} width={40} />
          <LogoText>AppGame</LogoText>
        </BoxLogo>

        <InputBox>
          <Input
            label="Nome"
            placeholder="Digite seu nome completo"
            {...register('name')}
            error={errors.name?.message}
          />

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
          <Button type="submit" title="criar" disabled={isSubmitting} />
        </ButtonBox>

        <CreateAccount>
          Já tem uma conta?<Link href="/auth/signin">Log In</Link>
        </CreateAccount>

        <Separator />

        <GoogleButton type="button" onClick={handleSignInWithGoogle} disabled={isLoading} />
      </Form>

      <ToastContainer />
    </Container>
  )
}
