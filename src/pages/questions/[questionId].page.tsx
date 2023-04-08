import { useRouter } from 'next/router'

export default function DetailScreen() {
  const router = useRouter()
  const { questionId } = router.query

  return <h1>{questionId}</h1>
}
