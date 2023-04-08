import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

import { api } from '@/services/api'
import { ServerStatus } from '@/types/globalTypes'

interface ServerProps {
  children: ReactNode
}

interface ServerContextValues {
  serverStatus: ServerStatus
  getServerStatus: () => Promise<void>
  loading: boolean
}
const ServerContext = createContext({} as ServerContextValues)

const ServerProvider = ({ children }: ServerProps) => {
  const router = useRouter()
  const [serverStatus, setServerStatus] = useState<ServerStatus>('DOWN')
  const [loading, setLoading] = useState(false)

  async function getServerStatus() {
    try {
      setLoading(true)
      await api.get('/health')
      setServerStatus('UP')
      router.push('/questions')
    } catch (error) {
      setServerStatus('DOWN')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ServerContext.Provider
      value={{
        serverStatus,
        getServerStatus,
        loading,
      }}
    >
      {children}
    </ServerContext.Provider>
  )
}

const useServer = () => useContext(ServerContext)

export { ServerContext, ServerProvider, useServer }
