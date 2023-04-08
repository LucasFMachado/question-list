import { useQuestions } from '@/contexts/QuestionsContext'
import { IQuestion } from '@/types/globalTypes'

import { QuestionItem } from '../Item'
import { List } from './styles'

export function QuestionList() {
  const { questions } = useQuestions()

  return (
    <List>
      {questions?.map((question: IQuestion) => (
        <QuestionItem key={question.id} questionData={question} />
      ))}
    </List>
  )
}
