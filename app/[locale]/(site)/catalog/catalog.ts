import { CourseFilters } from "@/interface/Filters.interface";

export const catalogData: CourseFilters = {
  category: {
    id: "category",
    options: [
      "all",
      "finance",
      "crypto",
      "money-psychology",
      "marketing",
      "self-development",
    ],
  },

  learningType: {
    id: "learningType",
    options: ["all", "video", "practice", "live"],
  },

  duration: {
    id: "duration",
    options: ["all", "under-1h", "1-5h", "5-10h", "over-10h"],
  },

  difficulty: {
    id: "difficulty",
    options: ["all", "easy", "medium", "advanced"],
  },
};