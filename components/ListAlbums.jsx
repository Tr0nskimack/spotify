import Link from 'next/link'


const ListAlbums = (props) => {

    const {title, albums} = props
  return (
    <div className='pt-28 pl-72 pr-8 flex justify-between items-center'>
      <Link href={"/"} className='font-medium text-2xl text-gray-200 hover:underline'>{title}</Link>
      <Link href={"/"} className='text-xs uppercase font-bold tracking-[2px] hover:underline'>Ver todo</Link>



      
    </div>
  )
}

export default ListAlbums
