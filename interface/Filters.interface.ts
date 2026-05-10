export interface FilterGroup {
  id: string;
  options: string[];
}

export interface CourseFilters {
  category: FilterGroup;
  learningType: FilterGroup;
  duration: FilterGroup;
  difficulty: FilterGroup;
}