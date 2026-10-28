import { createFileRoute, notFound } from "@tanstack/react-router";

import { getCourseBySlug, site } from "@/content";
import { CoursePage } from "@/sections/CoursePage";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const course = loaderData?.course;
    const title = course ? `${course.title} | ${site.brand}` : site.seo.title;
    const description = course?.teaser ?? site.seo.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CourseRoute,
});

function CourseRoute() {
  const { course } = Route.useLoaderData();
  return <CoursePage course={course} />;
}
