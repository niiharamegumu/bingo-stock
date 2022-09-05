import { useState, useEffect } from 'react'

export const useCardList = (startNum: number, endNum: number): number[] => {
  const [cardList, setCardList] = useState<number[]>([])
  useEffect(() => {
    if (endNum > startNum) {
      setCardList([...Array(endNum + 1 - startNum)].map((_, i) => i + startNum))
    }
  }, [])
  return cardList
}
