import BentoGrid from "@/components/BentoGrid";
import Sidebar from "@/components/Sidebar";
import { getCourses } from "@/lib/courses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="w-full p-4 sm:p-6 lg:p-8">
          <BentoGrid courses={courses} />
        </main>
      </div>
    </div>
  );
}
