import Card from '@/components/Card';
import { pause, simulateProbability } from '@/lib/mocking'
import React from 'react'

export default async function Analytics() {
  await pause(2000);
  if (simulateProbability(20)) {
    throw new Error('20%의 확률로 에러 발생')
  }
  return (
    <Card style={{ backgroundColor: 'blue' }}>
      <h2 style={{ color: 'white' }}>Analytics</h2>
    </Card>
  )
}