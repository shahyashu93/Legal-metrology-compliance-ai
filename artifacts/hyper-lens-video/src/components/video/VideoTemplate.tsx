import {
  VideoCanvas,
  VideoPausedContext,
  type VideoAspectRatio,
  useVideoPlayer,
} from '@/lib/video';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, type ComponentType } from 'react';

import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from './video_scenes';

export const SCENE_DURATIONS = {
  identity: 6000,
  scan: 8000,
  review: 8000,
  rules: 8000,
  finding: 8000,
  close: 7000,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '16:9';
const SCENES: Record<string, ComponentType> = {
  identity: Scene1,
  scan: Scene2,
  review: Scene3,
  rules: Scene4,
  finding: Scene5,
  close: Scene6,
};
const SCENE_START_SEC = Object.entries(SCENE_DURATIONS).reduce(
  (state, [key, duration]) => {
    state.offsets[key] = state.total / 1000;
    state.total += duration;
    return state;
  },
  { offsets: {} as Record<string, number>, total: 0 },
).offsets;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  paused = false,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  paused?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({
    durations,
    loop,
    paused,
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastSceneKey = useRef<string | null>(null);
  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const SceneComponent = SCENES[baseSceneKey];

  useEffect(() => onSceneChange?.(currentSceneKey), [currentSceneKey, onSceneChange]);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    if (paused) {
      audio.pause();
      return;
    }
    if (lastSceneKey.current !== currentSceneKey) {
      lastSceneKey.current = currentSceneKey;
      const target = SCENE_START_SEC[baseSceneKey] ?? 0;
      if (Math.abs(audio.currentTime - target) > 0.18) audio.currentTime = target;
    }
    audio.play().catch(() => {});
  }, [baseSceneKey, currentSceneKey, muted, paused]);

  return (
    <VideoPausedContext.Provider value={paused}>
      <VideoCanvas
        aspectRatio={VIDEO_ASPECT_RATIO}
        className="bg-[hsl(45_20%_96%)]"
      >
        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
        <audio
          ref={audioRef}
          src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
          preload="auto"
          autoPlay
          muted={muted}
        />
      </VideoCanvas>
    </VideoPausedContext.Provider>
  );
}
