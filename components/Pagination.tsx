"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
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
    <div className="flex justify-center w-full mt-10">
      <ReactPaginate
        pageCount={pages}
        forcePage={currentPage}
        onPageChange={handlePageChange}
        className="flex list-none m-0 p-0 items-center"
        pageClassName={"mx-2 cursor-pointer"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={"mx-2 bg-gray-300 p-2 rounded cursor-pointer"}
        nextClassName={"mx-2 bg-gray-300 p-2 rounded cursor-pointer"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
  );
}
