import Firsthalf from './Firsthalf'
import SecondHalf from './SecondHalf'

function Background() {
  return (
    <div className="max-w-[1920px] mx-auto h-screen grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-8 xl:pl-[31px] xl:pr-[77px] py-[29px] bg-linear-to-b from-[#282C31] to-[#191B1F]">
      <Firsthalf/>
      <SecondHalf/>
    </div>
  )
}

export default Background