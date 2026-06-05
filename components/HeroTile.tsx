import { BookOpenCheck, CalendarDays } from "lucide-react";

type HeroTileProps = {
  totalCourses: number;
  averageProgress: number;
};

export default function HeroTile({
  totalCourses,
  averageProgress,
}: HeroTileProps) {
  return (
    <section className="rounded-lg bg-neutral-950 p-6 text-white shadow-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-emerald-400 text-neutral-950">
            <BookOpenCheck size={25} aria-hidden="true" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Next-gen learning
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Student Dashboard
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-300">
            Track course progress, review upcoming work, and keep your learning
            rhythm visible from one focused workspace.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-72">
          <div className="rounded-md bg-white/10 p-4">
            <p className="text-3xl font-bold">{totalCourses}</p>
            <p className="mt-1 text-sm text-neutral-300">Active courses</p>
          </div>
          <div className="rounded-md bg-white/10 p-4">
            <p className="text-3xl font-bold">{averageProgress}%</p>
            <p className="mt-1 text-sm text-neutral-300">Avg. progress</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-sm text-neutral-300">
        <CalendarDays size={18} aria-hidden="true" />
        <span>Today&apos;s focus: complete one lesson and review your notes.</span>
      </div>
    </section>
  );
}
