import useProducts from "../../hooks/useProducts";
import ProductBox from "../../components/ProductBox";
import { testData } from "../../constant/testData";

const CompareProductPage = () => {
  const {
    selectProducts,
    isCompare,
    isDisableCompare,
    isDisableReset,
    handleSelectProducts,
    handleCompare,
    handleReset,
  } = useProducts();

  return (
    <div className="bg-[#f8f8f8] w-fit m-auto mt-10">
      <ProductBox
        products={testData}
        selectedProducts={selectProducts}
        isCompare={isCompare}
        onClickItem={handleSelectProducts}
      />

      <section className="w-fit m-auto mt-3">
        <button
          className={
            "border m-3 p-2 cursor-pointer" +
            " " +
            `${isDisableCompare ? "opacity-30" : "opacity-100"}`
          }
          onClick={handleCompare}
          disabled={isDisableCompare}
        >
          compare 3 products
        </button>

        <button
          className={
            "border m-3 p-2 cursor-pointer" +
            " " +
            `${isDisableReset ? "opacity-30" : "opacity-100"}`
          }
          onClick={handleReset}
        >
          reset
        </button>
      </section>

      <hr className="m-5" />

      {!!selectProducts.length && isCompare && (
        <ProductBox products={selectProducts} />
      )}
    </div>
  );
};

export default CompareProductPage;
