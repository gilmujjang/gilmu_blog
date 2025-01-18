'use client';
import { delay } from 'es-toolkit';
import React, { CSSProperties, useEffect, useState } from 'react';

const AwaitComponent = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function esToolkitDelay() {
      try {
        const random = Math.random(); // 0 ~ 1
        await delay(random * 5000); // 0 ~ 5 seconds
      } finally {
        setIsReady(true);
      }
    }
    esToolkitDelay();
  }, []);

  const containerStyle: CSSProperties = {
    width: 96,
    height: 36,
    color: 'white',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const Loading = () => {
    return (
      <div
        style={{
          ...containerStyle,
          backgroundColor: 'red',
        }}
      >
        Loading...
      </div>
    );
  };
  const Ready = () => {
    return (
      <div
        style={{
          ...containerStyle,
          backgroundColor: 'green',
        }}
      >
        Ready
      </div>
    );
  };

  return isReady ? <Ready /> : <Loading />;
};

export default AwaitComponent;
