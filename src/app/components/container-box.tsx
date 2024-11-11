import React from 'react'

interface ContainerProps{
    extraClass?: string;
    children: React.ReactNode
}

function ContainerBox({ extraClass, children }: ContainerProps) {
    return (
        <div className={`container-box border border-white p-3 rounded-2xl ${extraClass}`}>
{children}
        </div>
    )
}

export default ContainerBox