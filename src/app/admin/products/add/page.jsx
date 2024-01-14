import AddProduct from "@/components/admin/products/addProduct/addProduct";
import styles from "@/components/admin/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <AddProduct />
    </div>
  );
};

export default AddProductPage;
