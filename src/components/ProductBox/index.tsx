import { type TestDataInfo } from "../../constant/testData";

type ProductBoxProps = {
  products: TestDataInfo[];
  selectedProducts?: TestDataInfo[];
  isCompare?: boolean;
  onClickItem?: (product: TestDataInfo, isSelected: boolean) => void;
};

const ProductBox = ({
  products,
  selectedProducts,
  isCompare = false,
  onClickItem = () => {},
}: ProductBoxProps) => {
  const selectIds = selectedProducts?.map(({ id }) => id);

  return (
    <ul className="flex gap-3 justify-center">
      {products.map((product) => {
        const { id, name, price } = product;
        const isSelected = !!selectIds?.includes(id);
        return (
          <li
            key={id}
            className={
              "border p-2 cursor-pointer" +
              " " +
              `${isSelected && !isCompare ? "bg-red-50" : "bg-none"}`
            }
            onClick={() => onClickItem(product, isSelected)}
          >
            <p>{name}</p>
            <p>${price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductBox;
