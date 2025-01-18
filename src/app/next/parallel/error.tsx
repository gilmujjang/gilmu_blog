'use client' // Error components must be Client Components

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
    <section style={{ display: 'flex', height: 96, width: 160, border: '2px solid gray', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ color: 'red' }}>Team Error!</h2>
    </section>
  )
}