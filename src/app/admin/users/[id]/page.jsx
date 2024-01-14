import styles from "@/components/admin/users/editUser/editUser.module.css";
import Image from "next/image";

const AdminEditUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        username
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="John Doe"
          />
          <label>Email</label>
          <input type="email" name="email" id="emain" placeholder="john@doe" />
          <label>Role</label>
          <select name="role" id="role">
            <option value="ROLE_USER">User</option>
            <option value="ROLE_ADMIN">Admin</option>
          </select>
          <label>Is Active?</label>
          <select name="active" id="active">
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditUser;
