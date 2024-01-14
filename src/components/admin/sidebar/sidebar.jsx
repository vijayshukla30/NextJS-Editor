import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/libs/auth";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/admin/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/admin/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/admin/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/admin/reports", icon: <MdAnalytics /> },
      { title: "Teams", path: "/admin/teams", icon: <MdPeople /> },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/admin/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", path: "/admin/help", icon: <MdHelpCenter /> },
    ],
  },
];
const Sidebar = async () => {
  const { user } = await auth();
  console.log("user", user);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.avatar || "/noavatar.png"}
          alt={user.name}
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.name}</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((menu) => (
          <li key={menu.title} className={styles.menu}>
            <span>{menu.title}</span>
            {menu.list.map((submenu) => (
              <MenuLink menu={submenu} key={submenu.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
