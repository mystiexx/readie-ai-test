import { Certification } from '@/utils/types'
import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";

interface CertificationProps {
  certification: Certification
}

const CertificationCard:React.FC<CertificationProps> = ({ certification}) => {
  return (
    <div className='p-4 border border-zircon rounded-xl bg-white'>
        <div className='w-10 h-10 rounded-lg grid place-items-center bg-dodger-blue mb-4'>
        <LiaCertificateSolid className='text-white' size={24} />
        </div>
        <p className='text-blue-whale text-[16px] font-semibold'>{certification.name}</p>
        <p className='text-lynch text-[14px]'>{certification.provider}</p>

        <p className='py-6 text-[14px]'>{certification.relevance}</p>
    </div>
  )
}

export default CertificationCard