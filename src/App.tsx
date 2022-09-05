import { Flex, Grid, Text } from '@chakra-ui/react'
import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Card } from './components/card'
import db from './libs/firebase'

const App = () => {
  const [alreadyList, setAlreadyList] = useState<number[]>([])

  useEffect(() => {
    const init = async () => {
      const alreadyListRef = doc(db, 'lists', 'alreadyList')
      onSnapshot(alreadyListRef, (doc) => {
        if (doc.exists()) {
          const numbers = doc.data().numbers as number[]
          setAlreadyList(numbers)
        }
      })
    }
    init()
  }, [])

  return (
    <>
      {alreadyList.length > 0 ? (
        <Grid
          templateColumns="repeat(6, 1fr)"
          maxW="90vw"
          margin="auto"
          rowGap={2}
          py={4}
        >
          {alreadyList.map((list) => (
            <Card key={list}>{list}</Card>
          ))}
        </Grid>
      ) : (
        <Flex
          justify="center"
          alignItems="center"
          h="100vh"
          textAlign="center"
          flexDirection="column"
          gap={4}
        >
          <Text>ビンゴ開始までもうしばらくお待ち下さい...</Text>
        </Flex>
      )}
    </>
  )
}

export default App
