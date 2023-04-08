import Link from 'next/link'
import { HiPlus } from 'react-icons/hi'

import { IQuestion } from '@/types/globalTypes'

import { Item } from './styles'

interface IQuestionItemProps {
  questionData: IQuestion
}

export function QuestionItem({ questionData }: IQuestionItemProps) {
  const { id, thumb_url, question, published_at } = questionData

  return (
    <Item>
      <img src={thumb_url} alt={`Image from question "${question}"`} />
      <div className="information">
        <h3>{question}</h3>
        <p>{new Intl.DateTimeFormat('pt-BR').format(new Date(published_at))}</p>
        <div className="votes">
          <span>voto1</span>
          <span>voto2</span>
          <span>voto3</span>
          <span>voto4</span>
        </div>
        <div className="actions">
          <Link href={`/questions/${id}`}>
            <HiPlus />
            More info..
          </Link>
        </div>
      </div>
    </Item>
  )
}
