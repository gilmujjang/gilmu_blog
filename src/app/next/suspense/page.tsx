import React from 'react';
import { Delay, Suspense } from '@suspensive/react';
import AwaitComponent from '../../../page/next/components/AwaitComponent';

export default function page() {
  return (
    <Suspense fallback={<div>Suspense Page Loading...</div>}>
      <div
        style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 32 }}
      >
        <div style={{ display: 'flex', gap: 32 }}>
          <p>@suspensive/react: Delay</p>
          <Delay ms={1500} fallback={<div>Loading Delay component</div>}>
            <div>Suspense test</div>
          </Delay>
        </div>
        <p>es-toolkit: delay</p>
        <div style={{ display: 'flex', flex: 1, gap: 24, flexWrap: 'wrap' }}>
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
          <AwaitComponent />
        </div>
      </div>
    </Suspense>
  );
}
