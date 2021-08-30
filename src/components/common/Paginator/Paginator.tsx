import React, { useState, FC } from "react";
import "./Paginator.css";

type PropsType = {
    totalItemsCount: number,
    currentPage?: number,
    onPageChanged?: (pageNumber: number) => void,
    pageSize: number,
    portionSize?: number
}

const Paginator: FC<PropsType> = ({
          totalItemsCount,
          currentPage = 1,
          onPageChanged = x => x,
          pageSize,
          portionSize = 10
}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className="paginator">
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => (
                    <span className={`${(currentPage === p ?"user__page-select": "")} user__page-number`}
                          key={p}
                          onClick={() => { onPageChanged(p) }}>{p}</span>
                ))
            }
            {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    );
}

export default Paginator;