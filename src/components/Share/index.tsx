import { Dispatch, SetStateAction } from 'react'
import { HiCheckCircle } from 'react-icons/hi'

import { Widget, Wrapper } from './styles'

interface IShareUrlProps {
  url: string
  setEmail: Dispatch<SetStateAction<string>>
  email: string
  handleSubmit: (fullUrl: string) => Promise<void>
}

export function ShareUrl({
  url,
  email,
  setEmail,
  handleSubmit,
}: IShareUrlProps) {
  return (
    <Wrapper>
      <Widget>
        <form>
          <h3>Share URL:</h3>
          <div className="inputControl">
            <label htmlFor="url">URL:</label>
            <input id="url" value={window.location.origin + url} disabled />
          </div>
          <div className="inputControl">
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <button
            onClick={() => handleSubmit(window.location.origin + url)}
            disabled={!email}
          >
            <HiCheckCircle />
            Share
          </button>
        </form>
      </Widget>
    </Wrapper>
  )
}
