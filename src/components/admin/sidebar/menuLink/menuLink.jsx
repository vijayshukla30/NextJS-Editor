"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";
const MenuLink = ({ menu }) => {
  const pathname = usePathname();
  return (
    <Link
      href={menu.path}
      className={`${styles.container} ${
        pathname === menu.path && styles.active
      }`}
    >
      {menu.icon}
      {menu.title}
    </Link>
  );
};

export default MenuLink;
