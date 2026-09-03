"use client";

import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: "hair" | "nail" | "skin" | "makeup";
};

const courses: Course[] = [
  {
    id: 1,
    title: "Hair Designing",
    description:
      "Master cutting-edge techniques from classic cuts to modern trends",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=90",
    icon: "hair",
  },
  {
    id: 2,
    title: "Nail Artistry",
    description:
      "Master manicures, pedicures, and creative nail designs",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=90",
    icon: "nail",
  },
  {
    id: 3,
    title: "Skin Care Expertise",
    description:
      "Advanced dermatological knowledge and treatment techniques",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=90",
    icon: "skin",
  },
  {
    id: 4,
    title: "Advance Makeup Course",
    description:
      "Specialized training for wedding day perfection",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1400&q=90",
    icon: "makeup",
  },
];

function HairIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 17c-5 0-8 3-8 7s3 7 8 7h8" />
      <path d="M17 13c-4 0-7 3-7 7s3 7 7 7h11c5 0 8 3 8 8v2" />
      <path d="M21 31h11c4 0 6 2 6 5s-2 5-6 5H20" />
    </svg>
  );
}

function NailIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 11c-4 5-6 10-6 16v8c0 4 3 7 8 7s8-3 8-7v-8c0-6-2-11-6-16" />
      <path d="M19 12v23" />
      <path d="M31 9l6 7" />
      <path d="M36 7l4 4" />
    </svg>
  );
}

function SkinIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 24c0-8 6-14 14-14 7 0 12 4 14 10" />
      <path d="M10 24c0 8 6 14 14 14 7 0 12-4 14-10" />
      <circle cx="19" cy="22" r="2" fill="currentColor" />
      <circle cx="29" cy="27" r="2" fill="currentColor" />
    </svg>
  );
}

function MakeupIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 37L32 15" />
      <path d="M28 12l9 9" />
      <path d="M8 40c4-1 7 0 10 3-4 1-7 0-10-3Z" />
      <path d="M34 13l4-4 4 4-4 4" />
    </svg>
  );
}

function CourseIcon({ type }: { type: Course["icon"] }) {
  switch (type) {
    case "hair":
      return <HairIcon />;
    case "nail":
      return <NailIcon />;
    case "skin":
      return <SkinIcon />;
    case "makeup":
      return <MakeupIcon />;
  }
}

export default function CoursesGrid() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909] px-5 py-[10px] sm:px-8 lg:px-10">
      <div className="relative mx-auto w-full max-w-[1125px]">
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className={`group relative overflow-hidden rounded-[13px] border border-[#554008] bg-black p-[20px] transition-all duration-700 ease-out ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[35px] opacity-0"
              } hover:-translate-y-[7px] hover:border-[#a17811] hover:shadow-[0_25px_70px_rgba(0,0,0,0.55)]`}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
            >
              {/* Image */}
              <div className="course-image-frame relative h-[335px] overflow-hidden rounded-[7px] bg-black">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image absolute inset-0 z-0 h-full w-full object-cover brightness-[0.55] saturate-[0.85] opacity-100 transition-all duration-[900ms] ease-out group-hover:scale-[1.07] group-hover:brightness-[0.72] group-hover:saturate-100"
                />

                {/* Dark image overlay */}
                <div className="course-image-overlay absolute inset-0 z-[1] transition-opacity duration-500" />

                {/* Bottom image fade */}
                <div className="course-image-gradient absolute inset-x-0 bottom-0 z-[2] h-[28%]" />

                {/* Shine */}
                <div className="pointer-events-none absolute inset-y-0 -left-[80%] w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-[1100ms] group-hover:translate-x-[360%]" />
              </div>

              {/* Content */}
              <div className="px-[1px] pb-[1px] pt-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="text-[#e2b72b] transition-transform duration-500 group-hover:scale-110">
                    <CourseIcon type={course.icon} />
                  </div>

                  <h2 className="text-[20px] font-extrabold leading-none tracking-[-0.03em] text-[#dfb328] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ffd21a] sm:text-[21px]">
                    {course.title}
                  </h2>
                </div>

                <p className="mt-[22px] text-[14px] font-medium leading-[1.45] tracking-[-0.01em] text-[#b58c15] transition-colors duration-300 group-hover:text-[#d0a519] sm:text-[15px]">
                  {course.description}
                </p>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#ffd21a] transition-all duration-700 group-hover:w-full" />

              {/* Corner glow */}
              <div className="pointer-events-none absolute -right-[80px] -top-[80px] h-[180px] w-[180px] rounded-full bg-[#ffd21a]/[0.045] blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .course-image-frame {
          isolation: isolate;
        }

        .course-image {
          display: block;
        }

        .course-image-overlay {
          background: rgba(0, 0, 0, 0.2);
        }

        .group:hover .course-image-overlay {
          background: rgba(0, 0, 0, 0.05);
        }

        .course-image-gradient {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        }
      `}</style>
    </section>
  );
}