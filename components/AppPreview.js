"use client";

import { useEffect, useMemo, useState } from "react";
import BrandMark from "./BrandMark";

const demoEvents = [
  { time: "00:00.00", ms: 0, key: "F6", label: "Recording started", detail: "Hotkey pressed" },
  { time: "00:00.42", ms: 420, key: "W", label: "Key W pressed", detail: "Key down" },
  { time: "00:01.08", ms: 1080, key: "Move", label: "Mouse moved", detail: "842, 318" },
  { time: "00:01.44", ms: 1440, key: "LMB", label: "Left click", detail: "Button down" },
  { time: "00:01.68", ms: 1680, key: "LMB", label: "Left click released", detail: "Button up" },
  { time: "00:02.14", ms: 2140, key: "E", label: "Key E pressed", detail: "Key down" },
  { time: "00:02.46", ms: 2460, key: "W", label: "Key W released", detail: "Key up" },
  { time: "00:03.20", ms: 3200, key: "F8", label: "Recording stopped", detail: "Stop hotkey" },
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
  const [visibleCount, setVisibleCount] = useState(0);
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
    setPlayIndex(0);
    setElapsed(demoEvents[0].ms);

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
  const displayedEvents = useMemo(() => {
    if (hasRecording || mode !== "ready") {
      return demoEvents.slice(0, visibleCount);
    }

    return demoEvents.slice(0, 4);
  }, [hasRecording, mode, visibleCount]);

  const actionLabel =
    hasRecording || mode === "recorded" || mode === "playing"
      ? "12 actions recorded"
      : "No recording yet";
  const progress =
    mode === "playing"
      ? ((playIndex + 1) / demoEvents.length) * 100
      : hasRecording
        ? (visibleCount / demoEvents.length) * 100
        : 0;
  const timerLabel =
    mode === "recorded" || (mode === "ready" && hasRecording)
      ? "00:08.32"
      : formatElapsed(elapsed);

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
      setElapsed(8320);
      return;
    }

    if (mode === "playing") {
      setMode("recorded");
      setPlayIndex(-1);
      setElapsed(8320);
      setActiveMacro(null);
    }
  }

  function playRecording(macroName = "Demo macro") {
    if (mode === "recording") {
      return;
    }

    setVisibleCount(demoEvents.length);
    setMode("playing");
    setActiveMacro(macroName);
  }

  return (
    <section className="px-5 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20" aria-label="Application preview" data-reveal>
      <div className="macro-container preview-glow">
        <h2 className="sr-only">Macroly application preview</h2>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#08090b] shadow-[0_32px_110px_rgba(0,0,0,0.48)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#101114] px-3 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <BrandMark className="size-8" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">Macroly</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500" aria-live="polite">
                  <span className={`size-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
                  <span>Status: {status.label}</span>
                </div>
              </div>
            </div>
            <div className="hidden items-center text-zinc-500 sm:flex" aria-hidden="true">
              <span className="grid size-8 place-items-center text-sm">-</span>
              <span className="grid size-8 place-items-center text-xs">□</span>
              <span className="grid size-8 place-items-center text-sm">x</span>
            </div>
            <span className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${status.badge}`}>
              {status.label}
            </span>
          </div>

          <div className="grid gap-3 p-3 sm:gap-4 sm:p-4 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-3 sm:space-y-4">
              <section className="rounded-lg border border-white/10 bg-[#0d0e10] p-3 sm:p-4" aria-label="Macro controls">
                <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <h3 className="text-sm font-semibold text-white">Controls</h3>
                  <span className="hidden font-mono text-xs text-zinc-500 min-[420px]:inline">
                    F6 / F7 / F8
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    className={`macro-button h-11 min-h-0 px-2 text-sm ${
                      mode === "recording"
                        ? "border-red-300/55 bg-red-500/[0.18] text-red-50"
                        : "border-red-400/35 bg-red-500/10 text-red-100 hover:border-red-300/50 hover:bg-red-500/15"
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
                    className="macro-button macro-button-ghost h-11 min-h-0 px-2 text-sm"
                    disabled={mode === "recording" || !hasRecording}
                    onClick={() => playRecording()}
                  >
                    <PlayIcon />
                    <span>Play</span>
                  </button>
                  <button
                    type="button"
                    className="macro-button macro-button-secondary h-11 min-h-0 px-2 text-sm"
                    disabled={mode !== "recording" && mode !== "playing"}
                    onClick={stopRecording}
                  >
                    <StopIcon />
                    <span>Stop</span>
                  </button>
                </div>
              </section>

              <section className="rounded-lg border border-white/10 bg-[#0d0e10] p-3 sm:p-4" aria-label="Repeat controls">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">Repeat</h3>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="grid size-9 place-items-center rounded-md border border-white/10 bg-[#070809] text-base font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.04] active:scale-95"
                      aria-label="Decrease repeat count"
                      disabled={isInfinite}
                      onClick={() => setRepeatCount((current) => Math.max(1, current - 1))}
                    >
                      -
                    </button>
                    <output
                      className="grid h-9 min-w-12 place-items-center rounded-md border border-white/10 bg-[#070809] px-3 font-mono text-sm text-white"
                      aria-label="Repeat count"
                    >
                      {repeatCount}
                    </output>
                    <button
                      type="button"
                      className="grid size-9 place-items-center rounded-md border border-white/10 bg-[#070809] text-base font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.04] active:scale-95"
                      aria-label="Increase repeat count"
                      disabled={isInfinite}
                      onClick={() => setRepeatCount((current) => Math.min(99, current + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  aria-pressed={isInfinite}
                  className={`mt-3 flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm transition active:scale-[0.99] ${
                    isInfinite
                      ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
                      : "border-white/10 bg-[#070809] text-zinc-300 hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                  onClick={() => setIsInfinite((current) => !current)}
                >
                  <span className="font-medium">Infinite</span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-base" aria-hidden="true">
                      ∞
                    </span>
                    <span
                      className={`relative inline-flex h-6 w-11 items-center rounded-full border transition ${
                        isInfinite
                          ? "border-cyan-300/30 bg-cyan-300/25"
                          : "border-white/10 bg-zinc-800"
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`size-4 rounded-full transition ${
                          isInfinite ? "translate-x-5 bg-cyan-100" : "translate-x-1 bg-zinc-500"
                        }`}
                      />
                    </span>
                  </span>
                </button>
              </section>

              <section className="rounded-lg border border-white/10 bg-[#0d0e10] p-3 sm:p-4" aria-label="Recording timeline">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Recording Timeline</h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      Input order and timing are preserved.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-zinc-300">{timerLabel}</p>
                    <p className="mt-1 text-xs text-zinc-500">{actionLabel}</p>
                  </div>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-cyan-200/75 transition-[width] duration-200"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>

                <ol className="mt-3 grid gap-2">
                  {displayedEvents.length > 0 ? (
                    displayedEvents.map((event, index) => {
                      const isActive = mode === "playing" && playIndex === index;
                      const isPlaceholder = !hasRecording && mode === "ready";

                      return (
                        <li
                          key={`${event.time}-${event.label}`}
                          className={`timeline-event grid grid-cols-[70px_46px_minmax(0,1fr)] items-center gap-2 rounded-md border px-2.5 py-2 text-xs ${
                            isActive
                              ? "border-cyan-300/35 bg-cyan-300/10"
                              : "border-white/[0.08] bg-[#070809]"
                          } ${isPlaceholder ? "opacity-55" : ""}`}
                        >
                          <span className="font-mono text-zinc-500">{event.time}</span>
                          <span className="keycap min-w-0 px-1">{event.key}</span>
                          <span className="min-w-0">
                            <span className="block truncate font-medium text-zinc-200">
                              {event.label}
                            </span>
                            <span className="mt-0.5 block truncate text-zinc-500">
                              {event.detail}
                            </span>
                          </span>
                        </li>
                      );
                    })
                  ) : (
                    <li className="rounded-md border border-dashed border-white/10 bg-[#070809] px-3 py-5 text-center text-sm text-zinc-500">
                      Waiting for simulated input events...
                    </li>
                  )}
                </ol>
              </section>
            </div>

            <aside className="rounded-lg border border-white/10 bg-[#0d0e10] p-3 sm:p-4" aria-label="Saved macros">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-sm font-semibold text-white">Saved Macros</h3>
                <span className="text-xs text-zinc-500">Local</span>
              </div>
              <div className="space-y-2.5">
                {savedMacros.map((macro) => (
                  <div
                    key={macro.name}
                    className="group rounded-md border border-white/10 bg-[#070809] p-3 transition hover:border-cyan-300/25 hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{macro.name}</p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {macro.actions} actions <span aria-hidden="true">/</span> {macro.duration}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Play ${macro.name}`}
                          className="grid size-9 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 transition hover:border-cyan-200/45 hover:bg-cyan-300/15 active:scale-95"
                          onClick={() => playRecording(macro.name)}
                        >
                          <PlayIcon />
                        </button>
                        <button
                          type="button"
                          aria-label={`More options for ${macro.name}`}
                          className="grid size-9 place-items-center rounded-md border border-white/10 bg-white/[0.02] font-semibold text-zinc-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white active:scale-95"
                        >
                          ...
                        </button>
                      </div>
                    </div>
                    {activeMacro === macro.name && mode === "playing" ? (
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-cyan-200/75 transition-[width] duration-200"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs leading-5 text-zinc-500">
                Recordings shown here are demo data. Macroly will keep saved macros on the PC.
              </div>
            </aside>
          </div>

          <div className="grid gap-2 border-t border-white/10 bg-[#101114] px-3 py-3 text-xs text-zinc-400 sm:grid-cols-3 sm:px-5">
            {[
              ["F6", "Record"],
              ["F7", "Play"],
              ["F8", "Stop"],
            ].map(([key, label]) => (
              <div
                key={key}
                className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2"
              >
                <span className="keycap">{key}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
