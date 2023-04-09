import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { HiArrowCircleLeft, HiCheckCircle, HiShare } from 'react-icons/hi'

import { IQuestion } from '@/types/globalTypes'

import { Item, Wrapper } from './styles'

interface IQuestionItemProps {
  questionData: IQuestion
  handleVote: () => void
  vote: string
  setVote: Dispatch<SetStateAction<string>>
}

export function QuestionDetails({
  questionData,
  handleVote,
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
          <form>
            <h3>{question}</h3>
            <p>
              {new Intl.DateTimeFormat('pt-BR').format(new Date(published_at))}
            </p>
            <div className="votes">
              {choices?.map(({ choice }) => (
                <Fragment key={choice}>
                  <input
                    type="radio"
                    id={choice}
                    name="choice"
                    value={choice}
                    onChange={() => setVote(choice)}
                  />
                  <label htmlFor={choice}>{choice}</label>
                </Fragment>
              ))}
            </div>
          </form>
          <div className="actions">
            <Link href={'/questions'}>
              <HiArrowCircleLeft />
              Back to list
            </Link>
            <button onClick={() => router.push(`/share?url=/questions/${id}`)}>
              <HiShare />
              Share question
            </button>
            <button onClick={handleVote} disabled={!vote}>
              <HiCheckCircle />
              Submit vote
            </button>
          </div>
        </div>
      </Item>
    </Wrapper>
  )
}
