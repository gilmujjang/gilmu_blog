'use client' // Error components must be Client Components

import Card from "@/page/next/components/Card";
import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Card style={{ backgroundColor: 'purple' }}>
      <h2 style={{ color: 'white' }}>Team Error!</h2>
    </Card>
  )
}