import { supabase } from "./supabase";
import type { Course } from "../types/course";

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch courses");
  }

  return data ?? [];
}