import { useEffect } from 'react'

import { Loading } from '@/components/Loading'
import { QuestionList } from '@/components/Questions/List'
import { useQuestions } from '@/contexts/QuestionsContext'

export default function ListScreen() {
  const { getQuestions, loading } = useQuestions()

  useEffect(() => {
    getQuestions()
  }, [])

  if (loading) {
    return <Loading />
  }

  return <QuestionList />
}
