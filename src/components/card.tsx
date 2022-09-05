import { Center } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Card: FC<Props> = (props) => {
  const { children } = props
  return <Center fontSize="8vw">{children}</Center>
}
