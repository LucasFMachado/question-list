import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { QuestionDetails } from '@/components/Questions/Details'
import { useQuestions } from '@/contexts/QuestionsContext'
import { IQuestion } from '@/types/globalTypes'

export default function DetailScreen() {
  const router = useRouter()
  const { questionId } = router.query
  const { getQuestionData, loading } = useQuestions()
  const [question, setQuestion] = useState<IQuestion | undefined>(undefined)
  const [vote, setVote] = useState('')

  useEffect(() => {
    if (questionId) {
      getQuestionData(+questionId).then(question => setQuestion(question))
    }
  }, [questionId])

  async function submitVote() {
    router.push('/questions')
  }
  if (loading || !question) {
    return <Loading />
  }

  return (
    <QuestionDetails
      questionData={question}
      submitVote={submitVote}
      vote={vote}
      setVote={setVote}
    />
  )
}
