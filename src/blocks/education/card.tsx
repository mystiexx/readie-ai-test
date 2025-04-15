import { EducationHistory } from '@/utils/types'
import React from 'react'
import { IoSchool } from "react-icons/io5";
interface EducationProps {
  education: EducationHistory
}

const EducationCard:React.FC<EducationProps> = ({ education }) => {
  return (
    <div className='bg-white border border-zircon rounded-xl p-4 flex flex-col gap-3'>
        <div className='bg-blue-whale rounded-md w-10 h-10 grid place-items-center'>
        <IoSchool className='text-white' size={20} />
        </div>
        <div className='flex flex-col gap-1'>
            <p className='font-semibold text-[16px]'>{education.school}</p>
            <p className='text-lynch text-[14px]'>{education.degree}</p>
            <p className='text-[12px] text-lynch'>{education.years}</p>
        </div>

    </div>
  )
}

export default EducationCard