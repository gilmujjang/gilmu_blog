// pages/three-body.tsx (또는 components/ThreeBodySimulation.tsx)
'use client';

import { useEffect, useRef } from 'react';

// 타입 정의
interface Body {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  color: string;
  radius: number;
}

// 상수
const G = 1;
const MASS = 1;
const TIME_STEP = 0.001;
const SCALE = 200;
const C = 100000000; // 정확도 (1억)

const sample1 = [
  {
    x: C * 1,
    y: C * 0,
    vx: C * 0,
    vy: -C * 0.5,
    mass: 1,
    color: '#ff0000',
    radius: 5,
  },
  {
    x: C * -1,
    y: C * 0,
    vx: C * 0,
    vy: C * 0.5,
    mass: 1,
    color: '#00ff00',
    radius: 5,
  },
];

const sample2 = [
  {
    x: C * Math.sin(0),
    y: C * Math.cos(0),
    vx: (C * Math.cos(0)) / 1.3,
    vy: (C * Math.sin(0)) / 1.3,
    mass: MASS,
    color: '#ff0000',
    radius: 5,
  },
  {
    x: C * Math.sin(Math.PI / 3),
    y: -C * Math.cos(Math.PI / 3),
    vx: (-C * Math.cos(Math.PI / 3)) / 1.3,
    vy: (-C * Math.sin(Math.PI / 3)) / 1.3,
    mass: MASS,
    color: '#00ff00',
    radius: 5,
  },
  {
    x: -C * Math.sin(Math.PI / 3),
    y: -C * Math.cos(Math.PI / 3),
    vx: (-C * Math.cos(Math.PI / 3)) / 1.3,
    vy: (C * Math.sin(Math.PI / 3)) / 1.3,
    mass: MASS,
    color: '#0000ff',
    radius: 5,
  },
];

const sample3 = [
  {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    mass: 10000,
    color: '#ff0000',
    radius: 10,
  },
  {
    x: C * 1,
    y: C * 0,
    vx: C * 0,
    vy: C * 100,
    mass: 1,
    color: '#00ffff',
    radius: 5,
  },
  {
    x: C * 1.5,
    y: C * 0,
    vx: C * 0,
    vy: C * 50,
    mass: 1,
    color: '#00ff00',
    radius: 5,
  },
  {
    x: C * 2,
    y: C * 0,
    vx: C * 0,
    vy: C * 50,
    mass: 1,
    color: '#0000ff',
    radius: 5,
  },
];

// 초기 질량체 배열
const initialBodies: Body[] = sample3;

// 중력에 의한 가속도 계산
const calculateAcceleration = (
  body: Body,
  bodies: Body[],
): { ax: number; ay: number } => {
  return bodies.reduce(
    (acc, other) => {
      if (body === other) return acc;

      const dx = other.x - body.x;
      const dy = other.y - body.y;
      const distanceSquared = dx * dx + dy * dy;
      const force = (G * body.mass * other.mass * C * C * C) / distanceSquared;
      const angle = Math.atan2(dy, dx);
      const ax = Math.round(acc.ax + (force * Math.cos(angle)) / body.mass);
      const ay = Math.round(acc.ay + (force * Math.sin(angle)) / body.mass);

      return {
        ax,
        ay,
      };
    },
    { ax: 0, ay: 0 },
  );
};

// 상태 업데이트 (불변성 유지)
const updateBody = (body: Body, bodies: Body[]): Body => {
  const { ax, ay } = calculateAcceleration(body, bodies);

  return {
    ...body,
    vx: Math.round(body.vx + ax * TIME_STEP),
    vy: Math.round(body.vy + ay * TIME_STEP),
    x: Math.round(body.x + (body.vx + ax * TIME_STEP) * TIME_STEP),
    y: Math.round(body.y + (body.vy + ay * TIME_STEP) * TIME_STEP),
  };
};

// 캔버스에 그리기 (부수 효과 분리)
const drawBody = (ctx: CanvasRenderingContext2D, body: Body): void => {
  ctx.beginPath();
  ctx.arc(
    (body.x * SCALE) / C + 500,
    (body.y * SCALE) / C + 400,
    body.radius,
    0,
    Math.PI * 2,
  );
  ctx.fillStyle = body.color;
  ctx.fill();
  ctx.closePath();
};

const ThreeBodySimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bodiesRef = useRef<Body[]>(initialBodies); // 상태를 ref로 관리

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // 애니메이션 루프
    const animate = () => {
      // 캔버스 지우기
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 모든 질량체 업데이트 (불변성 유지)
      const updatedBodies = bodiesRef.current.map((body) =>
        updateBody(body, bodiesRef.current),
      );
      bodiesRef.current = updatedBodies;

      // 그리기
      updatedBodies.forEach((body) => drawBody(ctx, body));

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 클린업
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1000}
        height={800}
        style={{ border: '1px solid #000', background: '#000' }}
      />
    </div>
  );
};

export default ThreeBodySimulation;
