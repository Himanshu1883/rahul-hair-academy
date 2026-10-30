import { createFileRoute, notFound } from "@tanstack/react-router";

import { getCourseBySlug, site } from "@/content";
import { CoursePage } from "@/sections/CoursePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const course = loaderData?.course;
    return pageHead({
      title: course?.seoTitle ?? site.seo.title,
      description: course?.seoDescription ?? site.seo.description,
      path: course ? `/courses/${course.slug}` : "/",
    });
  },
  component: CourseRoute,
});

function CourseRoute() {
  const { course } = Route.useLoaderData();
  return <CoursePage course={course} />;
}
