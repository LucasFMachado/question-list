import { useEffect } from 'react'

import { QuestionList } from '@/components/Questions/List'
import { useQuestions } from '@/contexts/QuestionsContext'

export default function ListScreen() {
  const { getQuestions } = useQuestions()

  useEffect(() => {
    getQuestions()
  }, [])

  return <QuestionList />
}
