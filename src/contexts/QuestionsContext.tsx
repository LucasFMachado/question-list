import { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

import { api } from '@/services/api'
import { IQuestion } from '@/types/globalTypes'

interface QuestionsProps {
  children: ReactNode
}

interface QuestionsContextValues {
  questions: any
  getQuestions: () => Promise<void>
  loading: boolean
}
const QuestionsContext = createContext({} as QuestionsContextValues)

const QuestionsProvider = ({ children }: QuestionsProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [loading, setLoading] = useState(false)

  async function getQuestions() {
    setLoading(true)
    const { data } = await api.get('/questions?limit=10&offset=0&filter=""')
    setQuestions(data)
    setLoading(false)
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        getQuestions,
        loading,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

const useQuestions = () => useContext(QuestionsContext)

export { QuestionsContext, QuestionsProvider, useQuestions }
