
export type TestDataInfo = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlights:string[]
};

export const testData: TestDataInfo[] = [
  {
    id: 1,
    name: "SmartPad X10",
    price: 3999,
    description: "10.1 吋高畫質平板，輕巧耐用",
    features: ["觸控螢幕", "支援手寫筆", "雙鏡頭", "Wi-Fi 6"],
    highlights: ["電池續航12小時", "支援快充"],
  },
  {
    id: 2,
    name: "FitWatch Pro",
    price: 1899,
    description: "智慧手錶，支援心率、運動追蹤",
    features: ["防水", "NFC付款", "血氧監測", "通知同步"],
    highlights: ["睡眠偵測", "錶帶可替換"],
  },
  {
    id: 3,
    name: "SoundBuds Air",
    price: 299,
    description: "真無線藍牙耳機，輕巧便攜",
    features: ["主動降噪", "觸控操作", "IPX5防水"],
    highlights: ["充電盒可用20小時"],
  },
  {
    id: 4,
    name: "RoboVac Mini",
    price: 4999,
    description: "智慧掃地機器人，自動回充",
    features: ["雷射導航", "自訂清掃路線", "APP遠端控制"],
    highlights: ["超薄設計", "語音助理整合"],
  },
  {
    id: 5,
    name: "UltraBook S",
    price: 23999,
    description: "13吋超輕薄筆電，金屬機身",
    features: ["Intel i7", "16G RAM", "1TB SSD", "Type-C充電"],
    highlights: ["指紋解鎖", "背光鍵盤"],
  },
];
