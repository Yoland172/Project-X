import { useState } from "react";

const usePagination = (startPageIndex?: number) => {
    const [currentPage, setCurrentPage] = useState<number>(startPageIndex || 0);

    const setNextPage = () => setCurrentPage(page => page + 1);
    const setPreviousPage = () => setCurrentPage(page => page - 1);
    const resetPageState = () => setCurrentPage(startPageIndex || 0);

    return {
        currentPage,
        setNextPage,
        resetPageState,
        setPreviousPage,
        setCurrentPage
    }
}


export default usePagination;