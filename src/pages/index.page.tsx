import { useEffect } from 'react'

import { Loading } from '@/components/Loading'
import { ServerError } from '@/components/ServerError'
import { useServer } from '@/contexts/ServerContext'

export default function Home() {
  const { getServerStatus, loading } = useServer()

  useEffect(() => {
    getServerStatus()
  }, [])

  return loading ? <Loading /> : <ServerError />
}
