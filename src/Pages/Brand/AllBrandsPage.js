import React from 'react'
import BrandCardContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Utilies/Pagination'
const AllBrandsPage = () => {
    return (
        <div style={{minHeight:'670px'}}>
            <BrandCardContainer />
            <Pagination />
        </div>
    )
}

export default AllBrandsPage