import CompaniesCard from '@/blocks/companies/card'
import { Company } from '@/utils/types'
import React from 'react'

interface IProps {
  companies: Company[]
}

const Companies:React.FC<IProps> = ({ companies }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

      {companies?.map((company: Company, index: number) => (
        <CompaniesCard key={index} company={company} />
      ))}

    </div>
  )
}

export default Companies