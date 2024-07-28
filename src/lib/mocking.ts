export async function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 100 이하의 숫자를 입력하면 그 확률에 해당하는 시뮬레이션 실행
export function simulateProbability(percent: number): boolean {
  if (percent >= 100) return true;
  const randomNumber = Math.round(Math.random() * 10000) / 100;
  if (randomNumber <= percent) return true;
  return false;
}
