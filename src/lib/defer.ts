"use client";

type DeferredCallback = () => void;

export function runWhenUserReady(callback: DeferredCallback): () => void {
  let started = false;
  const listeners = ["scroll", "pointerdown", "keydown", "touchstart"] as const;

  const run = () => {
    if (started) return;
    started = true;
    const requestIdle = (globalThis as typeof globalThis & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void;
    }).requestIdleCallback;

    if (typeof requestIdle === "function") {
      requestIdle(callback, { timeout: 1200 });
      return;
    }
    globalThis.setTimeout(callback, 400);
  };

  for (const eventName of listeners) {
    window.addEventListener(eventName, run, { passive: true, once: true });
  }

  const timeoutId = window.setTimeout(run, 2500);

  return () => {
    window.clearTimeout(timeoutId);
    for (const eventName of listeners) {
      window.removeEventListener(eventName, run);
    }
  };
}
