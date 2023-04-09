import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { HiSearchCircle, HiShare } from 'react-icons/hi'

import { useQuestions } from '@/contexts/QuestionsContext'

import { Component } from './styles'

export function Header() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const { getQuestions } = useQuestions()

  return (
    <Component>
      <div>
        <Link href="/questions">
          <h1>Home</h1>
        </Link>
        {router.pathname === '/questions' && (
          <div className="searchControl">
            <input
              placeholder="Insert your search"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
            <button disabled={!search} onClick={() => getQuestions(search)}>
              <HiSearchCircle />
            </button>
            <button
              disabled={!search}
              onClick={() =>
                router.push(`/share?url=/questions?filter=${search}`)
              }
            >
              <HiShare />
            </button>
          </div>
        )}
      </div>
    </Component>
  )
}
