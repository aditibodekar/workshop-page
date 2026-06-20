import { ChipIcon, CodeIcon, GearIcon, SparkleIcon, StarIcon } from "./icons";

/**
 * Playful floating decorative layer: blobs + AI/robotics/coding icons.
 * Purely decorative — aria-hidden so it never confuses screen readers.
 */
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Soft color blobs */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-blob bg-coral-200/60 blur-2xl animate-blobMove" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-blob bg-violet-200/60 blur-2xl animate-blobMove" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-blob bg-teal-200/50 blur-2xl animate-blobMove" />

      {/* Floating icons */}
      <div className="absolute left-[8%] top-[18%] h-12 w-12 rounded-2xl bg-white/80 shadow-soft flex items-center justify-center text-violet-500 animate-float">
        <ChipIcon className="h-6 w-6" />
      </div>
      <div className="absolute right-[10%] top-[22%] h-12 w-12 rounded-2xl bg-white/80 shadow-soft flex items-center justify-center text-coral-500 animate-floatSlow">
        <CodeIcon className="h-6 w-6" />
      </div>
      <div className="absolute left-[16%] bottom-[16%] h-11 w-11 rounded-full bg-white/80 shadow-soft flex items-center justify-center text-teal-500 animate-float">
        <GearIcon className="h-6 w-6 animate-spinSlow" />
      </div>
      <div className="absolute right-[18%] bottom-[24%] h-10 w-10 rounded-full bg-white/80 shadow-soft flex items-center justify-center text-sun-500 animate-floatSlow">
        <StarIcon className="h-5 w-5" />
      </div>
      <div className="absolute left-[42%] top-[10%] h-9 w-9 rounded-full bg-white/70 shadow-soft flex items-center justify-center text-violet-400 animate-float">
        <SparkleIcon className="h-5 w-5" />
      </div>
    </div>
  );
}
