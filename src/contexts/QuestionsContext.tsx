import { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

import { api } from '@/services/api'
import { IQuestion } from '@/types/globalTypes'

interface QuestionsProps {
  children: ReactNode
}

interface QuestionsContextValues {
  questions: any
  getQuestions: (filter?: string) => Promise<void>
  getQuestionData: (questionId: number) => Promise<IQuestion>
  submitVote: (questionId: number) => Promise<void>
  loading: boolean
}
const QuestionsContext = createContext({} as QuestionsContextValues)

const QuestionsProvider = ({ children }: QuestionsProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [loading, setLoading] = useState(false)

  async function getQuestions(filter = ''): Promise<void> {
    setLoading(true)
    const filterUrl = filter ? `?filter=${filter}` : ''
    const { data } = await api.get(`/questions${filterUrl}`)
    setQuestions(data)
    setLoading(false)
  }

  async function getQuestionData(questionId: number): Promise<IQuestion> {
    setLoading(true)
    const { data } = await api.get(`/questions/${questionId}`)
    setLoading(false)
    return data
  }

  async function submitVote(questionId: number): Promise<void> {
    setLoading(true)
    await api.put(`/questions/${questionId}`)
    setLoading(false)
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        getQuestions,
        getQuestionData,
        submitVote,
        loading,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

const useQuestions = () => useContext(QuestionsContext)

export { QuestionsContext, QuestionsProvider, useQuestions }
