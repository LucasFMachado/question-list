import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { HiArrowCircleLeft, HiCheckCircle, HiShare } from 'react-icons/hi'

import { IQuestion } from '@/types/globalTypes'

import { Item, Wrapper } from './styles'

interface IQuestionItemProps {
  questionData: IQuestion
  submitVote: () => void
  vote: string
  setVote: Dispatch<SetStateAction<string>>
}

export function QuestionDetails({
  questionData,
  submitVote,
  vote,
  setVote,
}: IQuestionItemProps) {
  const router = useRouter()
  const { id, image_url, question, published_at, choices } = questionData

  return (
    <Wrapper>
      <Item>
        <img src={image_url} alt={`Image from question "${question}"`} />
        <div className="information">
          <h3>{question}</h3>
          <p>
            {new Intl.DateTimeFormat('pt-BR').format(new Date(published_at))}
          </p>
          <div className="votes">
            {choices?.map(({ choice }) => (
              <>
                <input
                  type="radio"
                  id={choice}
                  name="choice"
                  value={choice}
                  onChange={() => setVote(choice)}
                />
                <label htmlFor={choice}>{choice}</label>
              </>
            ))}
          </div>
          <div className="actions">
            <Link href={'/questions'}>
              <HiArrowCircleLeft />
              Back to list
            </Link>
            <button onClick={() => router.push(`/share?url=/questions/${id}`)}>
              <HiShare />
              Share question
            </button>
            <button onClick={submitVote} disabled={!vote}>
              <HiCheckCircle />
              Submit vote
            </button>
          </div>
        </div>
      </Item>
    </Wrapper>
  )
}
