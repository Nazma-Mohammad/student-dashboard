import { CheckCircle2, Clock3, Flame } from "lucide-react";

type ActivityTileProps = {
  completedCount: number;
  nextCourseTitle?: string;
};

export default function ActivityTile({
  completedCount,
  nextCourseTitle,
}: ActivityTileProps) {
  return (
    <aside className="grid gap-4 lg:grid-cols-1">
      <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-rose-100 text-rose-700">
            <Flame size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Learning streak</p>
            <p className="text-xl font-bold text-neutral-950">12 days</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
            <CheckCircle2 size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Completed courses</p>
            <p className="text-xl font-bold text-neutral-950">
              {completedCount}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sky-100 text-sky-700">
            <Clock3 size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Next session</p>
            <p className="text-base font-bold leading-tight text-neutral-950">
              {nextCourseTitle ?? "Pick a course"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
