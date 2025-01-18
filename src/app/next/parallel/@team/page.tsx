import Card from "@/page/next/components/Card";
import { pause, simulateProbability } from '@/lib/mocking'
import React from 'react'

const page = async () => {
  await pause(1000)
  if (simulateProbability(0)) {
    throw new Error('0%의 확률로 에러 발생')
  }
  return (
    <Card style={{ backgroundColor: 'blue' }}>
      <h2 style={{ color: 'white' }}>Team</h2>
    </Card>
  )
}

export default page