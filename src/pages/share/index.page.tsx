import { useRouter } from 'next/router'
import { useState } from 'react'

import { Loading } from '@/components/Loading'
import { ShareUrl } from '@/components/Share'
import { api } from '@/services/api'

export default function ShareScreen() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)
  const { url } = router.query

  async function shareUrl(fullUrl: string) {
    setSubmitLoading(true)
    await api.post(`share?destination_email=${email}&content_url=${fullUrl}`)
    setSubmitLoading(false)
    router.push('/questions')
  }

  if (submitLoading) {
    return <Loading />
  }

  return (
    <ShareUrl
      url={String(url)}
      setEmail={setEmail}
      email={email}
      handleSubmit={shareUrl}
    />
  )
}
