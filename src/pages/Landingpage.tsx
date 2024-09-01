import LandingCards from '../components/LandingCards'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

export const landingpage = () => {
  return (
    <div className="h-screen w-full overflow-y-auto dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] absolute">
    {/* Radial gradient for the container to give a faded look */}
    <div className=" relative pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
   <ResponsiveAppBar type=''></ResponsiveAppBar>
   <LandingCards/>
  </div>
  )
}

export default landingpage