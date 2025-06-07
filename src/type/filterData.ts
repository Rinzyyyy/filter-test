export type GradeOption = "1" | "2" | "3" | "4" | "5" | "6";

export type SubjectOption =
  | "chinese"
  | "english"
  | "math"
  | "science"
  | "social"
  | "dialect"
  | "technology";

export type TypeOption =
  | "textbook"
  | "competency"
  | "contest"
  | "exam_review"
  | "audio";

export type FilterCategory = "grade" | "subject" | "productType";

export interface FilterItem<T = string> {
  label: string;
  value: T;
}

export interface FilterGroup<T = string> {
  key: string;
  name: string;
  options: FilterItem<T>[];
}

type FilterGroupValueMap = {
  grade: FilterGroup<GradeOption>;
  subject: FilterGroup<SubjectOption>;
  productType: FilterGroup<TypeOption>;
};

export type FilterOptionInfo = {
  [K in FilterCategory]: FilterGroupValueMap[K];
};
