import {
  Code,
  FileCode,
  LucideIcon,
  Network,
  Rocket,
  Sparkles,
} from "lucide-react";
import type { Course } from "@/types/course";
import ProgressBar from "./ProgressBar";

const iconMap: Record<string, LucideIcon> = {
  Code,
  FileCode,
  Network,
  Rocket,
};

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] ?? Sparkles;
  const status = course.progress >= 85 ? "On track" : "In progress";

  return (
    <article className="group flex min-h-52 flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-white">
          <Icon size={22} aria-hidden="true" />
        </div>

        <span className="rounded-sm bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-900">
          {status}
        </span>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold leading-tight text-neutral-950">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Continue the module and keep your weekly learning streak moving.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-neutral-700">Progress</span>
          <span className="font-semibold text-neutral-950">
            {course.progress}%
          </span>
        </div>
        <ProgressBar value={course.progress} />
      </div>
    </article>
  );
}
