import type { FilterCategory, FilterOptionInfo } from "../type/filterData";

export const filterCategories: FilterCategory[] = ["grade", "subject", "productType"];

export const filterOptionData: FilterOptionInfo = {
  grade: {
    key: "grade",
    name: "年級",
    options: [
      { label: "一年級", value: "1" },
      { label: "二年級", value: "2" },
      { label: "三年級", value: "3" },
      { label: "四年級", value: "4" },
      { label: "五年級", value: "5" },
      { label: "六年級", value: "6" },
    ],
  },
  subject: {
    key: "subject",
    name: "科目",
    options: [
      { label: "國語", value: "chinese" },
      { label: "英語", value: "english" },
      { label: "數學", value: "math" },
      { label: "自然", value: "science" },
      { label: "社會", value: "social" },
      { label: "閩客語", value: "dialect" },
      { label: "科技", value: "technology" },
    ],
  },
  productType: {
    key: "productType",
    name: "類別",
    options: [
      { label: "課本進度", value: "textbook" },
      { label: "素養主題", value: "competency" },
      { label: "卓越盃", value: "contest" },
      { label: "段考複習", value: "exam_review" },
      { label: "音檔", value: "audio" },
    ],
  },
};
