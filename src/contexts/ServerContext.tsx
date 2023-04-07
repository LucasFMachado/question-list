import { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

import { api } from '@/services/api'

type ServerStatus = 'UP' | 'DOWN'

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
  const [serverStatus, setServerStatus] = useState<ServerStatus>('DOWN')
  const [loading, setLoading] = useState(false)

  async function getServerStatus() {
    try {
      setLoading(true)
      const data = await api.get('/health')
      console.log('datadata: ', data)
      setServerStatus('UP')
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
