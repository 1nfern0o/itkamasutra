import React from "react";
import "./Paginator.css";

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => (
                <span className={`user__page-number ${currentPage === p && "user__page-select"}`}
                      onClick={() => { onPageChanged(p) }}>{p}</span>
            ))}
        </div>
    );
}

export default Paginator;