import React from 'react'

interface GroupProps{
    value: React.ReactNode,
    text: string
}

function Group({value, text}:GroupProps) {
    return (
        <div className='group flex flex-col gap-2 mb-5 items-center rounded-lg'>
            <div className="value">
                {value}
            </div>
            <span className='text-md font-semibold'>{text}</span>
        </div>
    )
}

export default Group