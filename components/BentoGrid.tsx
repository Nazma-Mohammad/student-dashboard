import type { Course } from "@/types/course";
import ActivityTile from "./ActivityTile";
import AnimatedWrapper from "./AnimatedWrapper";
import CourseCard from "./CourseCard";
import HeroTile from "./HeroTile";

type BentoGridProps = {
  courses: Course[];
};

export default function BentoGrid({ courses }: BentoGridProps) {
  const averageProgress =
    courses.length === 0
      ? 0
      : Math.round(
          courses.reduce((total, course) => total + course.progress, 0) /
            courses.length
        );
  const completedCount = courses.filter((course) => course.progress >= 100).length;
  const nextCourse = courses
    .filter((course) => course.progress < 100)
    .sort((a, b) => b.progress - a.progress)[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_18rem]">
      <div className="space-y-6">
        <AnimatedWrapper>
          <HeroTile
            totalCourses={courses.length}
            averageProgress={averageProgress}
          />
        </AnimatedWrapper>

        <section>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Your courses
              </p>
              <h2 className="mt-1 text-2xl font-bold text-neutral-950">
                Current learning path
              </h2>
            </div>
            <p className="text-sm text-neutral-600">
              {courses.length} modules synced from Supabase
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {courses.map((course, index) => (
              <AnimatedWrapper key={course.id} delay={index * 0.06}>
                <CourseCard course={course} />
              </AnimatedWrapper>
            ))}
          </div>
        </section>
      </div>

      <AnimatedWrapper delay={0.15}>
        <ActivityTile
          completedCount={completedCount}
          nextCourseTitle={nextCourse?.title}
        />
      </AnimatedWrapper>
    </div>
  );
}
