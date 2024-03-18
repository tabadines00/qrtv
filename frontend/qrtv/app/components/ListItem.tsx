import React from 'react'
import Link from 'next/link'

function ListItem(props: any) {
  return (
    <div className='max-w-screen-lg w-[80vw] my-4 border-b-2'>
        <Link href={"/projects/" + props.link} className='text-xl text-blue-300 hover:text-blue-950'>{props.title}</Link>
        <p className='text-gray-600'>{props.description}</p>
    </div>
  )
}

export default ListItem