import CarouselLarge from "./CarouselLarge";
import CarouselSmall from "./CarouselSmall";



const ImageCarousel = () => {

  return (
    <div>
        <div className="hidden lg:flex">
            <CarouselLarge />
        </div>
        <div className="flex lg:hidden">
            <CarouselSmall />
        </div>
    </div>
    
  )
}

export default ImageCarousel