import { Container, Grid, Button, Flex, Input } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { Card } from './components/card'
import { useCardList } from './hooks/useCardList'

function App() {
  const cardList = useCardList(1, 75)
  const [val, setVal] = useState<number>(0)
  const [alreadyList, setAlreadyList] = useState<number[]>([])
  const toast = useToast()

  useEffect(() => {
    const lsAlreadyList = localStorage.getItem('alreadyList')
    if (lsAlreadyList) {
      setAlreadyList(JSON.parse(lsAlreadyList))
    }
  }, [])

  const onChangeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(e.target.value))
  }
  const resetList = () => {
    setAlreadyList([])
    localStorage.removeItem('alreadyList')
  }
  const addAlreadyList = () => {
    const errors: string[] = []
    if (!val) {
      errors.push('空では追加できません')
    }
    if (alreadyList.includes(val)) {
      errors.push('すでに出ている数字です')
    }
    if (!cardList.includes(val) && val) {
      errors.push('対象範囲画の数字です')
    }

    if (errors.length === 0) {
      setAlreadyList((p) => {
        localStorage.setItem('alreadyList', JSON.stringify([...p, val]))
        return [...p, val]
      })
    } else {
      errors.map((title) => {
        toast({
          title,
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'bottom-right',
        })
      })
    }
  }

  return (
    <Container maxW="100vw" pt={4}>
      <Grid
        templateColumns={{
          base: 'repeat(4, 1fr)',
          md: 'repeat(6, 1fr)',
          xl: 'repeat(8, 1fr)',
        }}
        columnGap={8}
        mb={4}
      >
        {alreadyList.map((list) => (
          <Card key={list}>{list}</Card>
        ))}
      </Grid>
      <Flex justify="space-between" mb={8}>
        <Flex justify="center" alignItems="center">
          <Button
            bg="sTNotice"
            borderRadius={6}
            color="gray.200"
            px={4}
            h="100%"
            onClick={resetList}
          >
            リセット
          </Button>
        </Flex>
        <Flex gap={4}>
          <Input
            maxW="100px"
            borderColor="sTMainColor"
            type="number"
            onChange={(e) => {
              onChangeVal(e)
            }}
          />
          <Button onClick={addAlreadyList}>
            <IoIosAddCircle fontSize="40px" />
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
