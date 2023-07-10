/* eslint-disable react/display-name */
'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { Box, ErrorMessage, InputText, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

type Props = InputProps

export const Input = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => {
  return (
    <Box>
      <Label>{label}</Label>
      <InputText ref={ref} {...rest} />
      <ErrorMessage>{error}</ErrorMessage>
    </Box>
  )
})
