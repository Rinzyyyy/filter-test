import { useState } from "react";
import type { TestDataInfo } from "../constant/testData";

export default function useProducts() {
  const [selectProducts, setSelectProducts] = useState<TestDataInfo[]>([]);
  const [isCompare, setIsCompare] = useState(false);
  const isDisableCompare = selectProducts.length < 3 || isCompare;
  const isDisableReset = !selectProducts.length;

  function handleSelectProducts(product: TestDataInfo, isSelected: boolean) {
    if (isCompare) {
      setIsCompare(false);
      setSelectProducts([product]);
    } else {
      setSelectProducts((pre) => {
        if (isSelected) return pre.filter(({ id }) => product.id !== id);
        if (pre.length >= 3) return pre;
        return [...pre, product];
      });
    }
  }

  function handleCompare() {
    setIsCompare(true);
  }

  function handleReset() {
    setIsCompare(false);
    setSelectProducts([]);
  }

  return {
    selectProducts,
    isCompare,
    isDisableCompare,
    isDisableReset,
    handleSelectProducts,
    handleCompare,
    handleReset,
  };
}
