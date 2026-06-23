"use client";

import React, { useEffect, useRef } from "react";

interface SlowVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  rate?: number;
}

export default function SlowVideo({ rate = 1, ...rest }: SlowVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = rate;
  }, [rate]);

  return <video ref={ref} {...rest} />;
}
