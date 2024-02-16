"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import styles from "../styles/pagination.module.css";
import { PageProps } from "@/types/page";

export default function Pagination({ pages, currentPage }: PageProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (data: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (data.selected + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <ReactPaginate
        pageCount={pages}
        forcePage={currentPage}
        onPageChange={handlePageChange}
        className={styles["react-paginate"]}
      />
    </div>
  );
}
