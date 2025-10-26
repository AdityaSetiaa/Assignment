import Profile from './SubComponent/Profile'
import Gallery from './SubComponent/Gallery'

function SecondHalf() {
  return (
    <div className='flex flex-col items-center gap-4'>
        <Profile/>
        <div className='h-2 m-1 w-[80%] bg-linear-to-b from-[#2F3236] to-[#414448] rounded-2xl shadow-[3px_3px_3px_1px_rgba(0,0,0,0.4)] '></div>
        <Gallery/>
        <div className='h-2 m-1 w-[80%] bg-linear-to-b from-[#2F3236] to-[#414448] rounded-2xl shadow-[3px_3px_3px_1px_rgba(0,0,0,0.4)]'></div>
    </div>
    
  )
}

export default SecondHalf