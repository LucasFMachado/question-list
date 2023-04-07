import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Loading } from '@/components/Loading'
import { ServerError } from '@/components/ServerError'
import { useServer } from '@/contexts/ServerContext'

export default function Home() {
  const router = useRouter()
  const { getServerStatus, serverStatus, loading } = useServer()

  useEffect(() => {
    getServerStatus()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (serverStatus === 'DOWN') {
    return <ServerError />
  }

  router.push('/questions')
}
