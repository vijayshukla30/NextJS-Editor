import styles from "./addProduct.module.css";
const AddProduct = () => {
  return (
    <form action="" className={styles.form}>
      <input type="text" placeholder="Title" name="title" required />
      <select name="category" id="category">
        <option value="">Choose a Category</option>
        <option value="kitchen">Kitchen</option>
        <option value="phone">Phone</option>
        <option value="computer">Computer</option>
      </select>
      <input type="number" name="price" id="price" placeholder="Price" />
      <input type="number" name="stock" id="stock" placeholder="Stock" />
      <input type="text" name="color" placeholder="Color" />
      <input type="text" name="size" placeholder="Size" />
      <textarea
        name="description"
        id="description"
        rows="16"
        placeholder="Description"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
