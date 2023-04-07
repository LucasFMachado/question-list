import { BiErrorAlt } from 'react-icons/bi'

import { useServer } from '@/contexts/ServerContext'

import { Component } from './styles'

export function ServerError() {
  const { getServerStatus } = useServer()
  return (
    <Component>
      <div className="content">
        <BiErrorAlt />
        <p>Server OFF</p>
        <button onClick={getServerStatus}>Retry Action</button>
      </div>
    </Component>
  )
}
