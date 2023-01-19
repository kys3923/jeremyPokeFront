export const RedButton = ({type, text}) => {
  return (
    <button type={type} className='rounded-md py-1 px-4 bg-red-800 border-2 text-white border-red-800 mt-2 hover:bg-white hover:text-red-800'>{text}</button>
  )
}