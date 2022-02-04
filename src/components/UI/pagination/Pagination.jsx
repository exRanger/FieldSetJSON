import React from 'react'
import { getPagesArray } from '../../../utils/pages'

export default function Pagination({totalPages, page, setPage}) {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p => {
                return <span
                        onClick={() => {
                            setPage(p)
                        }}
                        className={p === page ? 'page page__current' : 'page'}
                        >
                        {p}
                        </span>
            })}
        </div>
    )
}
