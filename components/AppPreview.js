"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const demoEvents = [
  { time: "00:00.00", ms: 0, key: "W", label: "Key W pressed" },
  { time: "00:00.58", ms: 580, key: "Move", label: "Mouse moved" },
  { time: "00:01.12", ms: 1120, key: "Click", label: "Left click" },
  { time: "00:01.64", ms: 1640, key: "E", label: "Key E pressed" },
  { time: "00:02.10", ms: 2100, key: "W", label: "Key W released" },
];

const savedMacros = [
  { name: "Daily Farm", actions: 12, duration: "00:08" },
  { name: "Collect Rewards", actions: 7, duration: "00:04" },
  { name: "Test Macro", actions: 21, duration: "00:15" },
];

const statusMeta = {
  ready: {
    label: "Ready",
    dot: "bg-emerald-400",
    badge: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
  },
  recording: {
    label: "Recording",
    dot: "bg-red-400 record-pulse",
    badge: "border-red-300/25 bg-red-500/10 text-red-100",
  },
  recorded: {
    label: "Recorded",
    dot: "bg-cyan-300",
    badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  },
  playing: {
    label: "Playing",
    dot: "bg-cyan-300",
    badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  },
};

function formatElapsed(ms) {
  const totalCentiseconds = Math.floor(ms / 10);
  const seconds = Math.floor(totalCentiseconds / 100);
  const centiseconds = totalCentiseconds % 100;

  return `00:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
}

function PlayIcon({ className = "size-3" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M5 3.6v8.8L12 8 5 3.6Z" />
    </svg>
  );
}

function StopIcon() {
  return <span className="size-2.5 rounded-[2px] bg-current" aria-hidden="true" />;
}

export default function AppPreview() {
  const [mode, setMode] = useState("ready");
  const [visibleCount, setVisibleCount] = useState(demoEvents.length);
  const [elapsed, setElapsed] = useState(0);
  const [playIndex, setPlayIndex] = useState(-1);
  const [repeatCount, setRepeatCount] = useState(5);
  const [isInfinite, setIsInfinite] = useState(false);
  const [activeMacro, setActiveMacro] = useState(null);

  useEffect(() => {
    if (mode !== "recording") {
      return undefined;
    }

    const clock = window.setInterval(() => {
      setElapsed((current) => Math.min(current + 100, 9900));
    }, 100);

    const eventTimer = window.setInterval(() => {
      setVisibleCount((current) => Math.min(current + 1, demoEvents.length));
    }, 520);

    return () => {
      window.clearInterval(clock);
      window.clearInterval(eventTimer);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== "playing") {
      return undefined;
    }

    let index = 0;
    const playback = window.setInterval(() => {
      index += 1;

      if (index >= demoEvents.length) {
        window.clearInterval(playback);
        setMode("ready");
        setPlayIndex(-1);
        setActiveMacro(null);
        setElapsed(0);
        return;
      }

      setPlayIndex(index);
      setElapsed(demoEvents[index].ms);
    }, 540);

    return () => window.clearInterval(playback);
  }, [mode]);

  const status = statusMeta[mode];
  const hasRecording = visibleCount > 0;
  const displayedEvents = demoEvents.slice(0, visibleCount);
  const progress =
    mode === "playing"
      ? ((playIndex + 1) / demoEvents.length) * 100
      : hasRecording
        ? (visibleCount / demoEvents.length) * 100
        : 0;
  const timerLabel =
    mode === "recorded" || (mode === "ready" && hasRecording)
      ? "00:02.10"
      : formatElapsed(elapsed);
  const countLabel =
    mode === "recording"
      ? `${visibleCount} events`
      : hasRecording || mode === "recorded" || mode === "playing"
        ? `${demoEvents.length} events`
        : "0 events";

  function startRecording() {
    setMode("recording");
    setVisibleCount(0);
    setElapsed(0);
    setPlayIndex(-1);
    setActiveMacro(null);
  }

  function stopRecording() {
    if (mode === "recording") {
      setMode("recorded");
      setVisibleCount(demoEvents.length);
      setElapsed(2100);
      return;
    }

    if (mode === "playing") {
      setMode("recorded");
      setPlayIndex(-1);
      setElapsed(2100);
      setActiveMacro(null);
    }
  }

  function playRecording(macroName = "Current recording") {
    if (mode === "recording") {
      return;
    }

    setVisibleCount(demoEvents.length);
    setActiveMacro(macroName);
    setPlayIndex(0);
    setElapsed(demoEvents[0].ms);
    setMode("playing");
  }

  return (
    <section
      className="px-5 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20"
      aria-label="Application preview"
      data-reveal
    >
      <div className="macro-container preview-glow">
        <h2 className="sr-only">Macroly application preview</h2>
        <div className="overflow-hidden rounded-lg border border-white/[0.09] bg-[#0a0b0d] shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] bg-[#111215]/80 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <BrandMark className="size-8" />
              <p className="truncate text-sm font-semibold text-white">Macroly</p>
            </div>

            <div className="hidden items-center text-zinc-600 sm:flex" aria-hidden="true">
              <span className="grid size-7 place-items-center text-sm">-</span>
              <span className="grid size-7 place-items-center text-xs">□</span>
              <span className="grid size-7 place-items-center text-sm">x</span>
            </div>

            <span
              className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs font-semibold ${status.badge}`}
              aria-live="polite"
            >
              <span className={`size-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
              {status.label}
            </span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0 p-4 sm:p-5 lg:pr-6">
              <section aria-label="Macro controls">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    className={`macro-button h-11 min-h-0 px-3 text-sm ${
                      mode === "recording"
                        ? "border-red-300/45 bg-red-500/[0.16] text-red-50"
                        : "border-red-300/25 bg-red-500/[0.08] text-red-100 hover:border-red-300/40 hover:bg-red-500/[0.12]"
                    }`}
                    aria-pressed={mode === "recording"}
                    onClick={startRecording}
                  >
                    <span
                      className={`relative size-2.5 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.45)] ${
                        mode === "recording" ? "record-pulse" : ""
                      }`}
                    />
                    <span>Record</span>
                  </button>
                  <button
                    type="button"
                    className="macro-button h-11 min-h-0 border-white/[0.08] bg-white/[0.035] px-3 text-sm text-zinc-200 hover:border-cyan-300/20 hover:bg-white/[0.06]"
                    disabled={mode === "recording" || !hasRecording}
                    onClick={() => playRecording()}
                  >
                    <PlayIcon />
                    <span>Play</span>
                  </button>
                  <button
                    type="button"
                    className="macro-button h-11 min-h-0 border-white/[0.08] bg-white/[0.025] px-3 text-sm text-zinc-300 hover:border-white/[0.12] hover:bg-white/[0.055]"
                    disabled={mode !== "recording" && mode !== "playing"}
                    onClick={stopRecording}
                  >
                    <StopIcon />
                    <span>Stop</span>
                  </button>
                </div>

                <div className="mt-4 grid gap-3 border-b border-white/[0.07] pb-5 sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm font-semibold text-white">Repeat</span>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-grid h-8 grid-cols-[2rem_2.5rem_2rem] overflow-hidden rounded-md border border-white/[0.07] bg-[#15171a]/70">
                      <button
                        type="button"
                        className="grid place-items-center text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-45"
                        aria-label="Decrease repeat count"
                        disabled={isInfinite}
                        onClick={() => setRepeatCount((current) => Math.max(1, current - 1))}
                      >
                        -
                      </button>
                      <output
                        className="grid place-items-center border-x border-white/[0.06] font-mono text-sm text-white"
                        aria-label="Repeat count"
                      >
                        {repeatCount}
                      </output>
                      <button
                        type="button"
                        className="grid place-items-center text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-45"
                        aria-label="Increase repeat count"
                        disabled={isInfinite}
                        onClick={() => setRepeatCount((current) => Math.min(99, current + 1))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      aria-pressed={isInfinite}
                      className={`inline-flex h-8 items-center gap-2 rounded-md border px-2.5 text-sm transition active:scale-[0.99] ${
                        isInfinite
                          ? "border-cyan-300/18 bg-cyan-300/10 text-cyan-50"
                          : "border-white/[0.06] bg-white/[0.025] text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                      }`}
                      onClick={() => setIsInfinite((current) => !current)}
                    >
                      <span className="font-mono text-base" aria-hidden="true">
                        ∞
                      </span>
                      Infinite
                    </button>
                  </div>
                </div>
              </section>

              <section className="pt-5" aria-label="Recording timeline">
                <div className="mb-3 flex items-end justify-between gap-4">
                  <h3 className="text-sm font-semibold text-white">Timeline</h3>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-mono text-zinc-300">{timerLabel}</span>
                    <span className="text-zinc-500">{countLabel}</span>
                  </div>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-cyan-200/75 transition-[width] duration-200"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>

                <ol className="mt-3 divide-y divide-white/[0.06]">
                  {displayedEvents.length > 0 ? (
                    displayedEvents.map((event, index) => {
                      const isActive = mode === "playing" && playIndex === index;

                      return (
                        <li
                          key={`${event.time}-${event.label}`}
                          className={`grid grid-cols-[4.5rem_3.25rem_minmax(0,1fr)] items-center gap-2.5 py-2 text-xs sm:gap-3 ${
                            isActive ? "text-cyan-100" : "text-zinc-300"
                          }`}
                        >
                          <span className="font-mono text-zinc-400">{event.time}</span>
                          <span className="keycap justify-self-start">{event.key}</span>
                          <span className="truncate font-medium">{event.label}</span>
                        </li>
                      );
                    })
                  ) : (
                    <li className="py-5 text-sm text-zinc-500">Waiting for simulated input events...</li>
                  )}
                </ol>
              </section>
            </div>

            <aside
              className="border-t border-white/[0.08] p-4 sm:p-5 lg:border-l lg:border-t-0 lg:pl-5"
              aria-label="Saved macros"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Saved Macros</h3>
                <span className="text-xs text-zinc-500">Local</span>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {savedMacros.map((macro) => (
                  <div
                    key={macro.name}
                    className="group py-3 first:pt-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{macro.name}</p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {macro.actions} actions <span aria-hidden="true">/</span> {macro.duration}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Play ${macro.name}`}
                        className="grid size-8 shrink-0 place-items-center rounded-md text-cyan-100 transition hover:bg-cyan-300/10 active:scale-95"
                        onClick={() => playRecording(macro.name)}
                      >
                        <PlayIcon />
                      </button>
                    </div>
                    {activeMacro === macro.name && mode === "playing" ? (
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-cyan-200/75 transition-[width] duration-200"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.08] bg-[#101114]/60 px-4 py-3 text-xs text-zinc-500 sm:px-5">
            {[
              ["F6", "Record"],
              ["F7", "Play"],
              ["F8", "Stop"],
            ].map(([key, label]) => (
              <div key={key} className="flex items-center gap-2.5">
                <span className="keycap keycap-shortcut">{key}</span>
                <span className="font-medium text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
