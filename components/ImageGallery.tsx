import React from 'react';
import './style.scss';

interface imageGalleryProps{
    currentImageIndex:number;
}
export const imageURLs:string[] = [
    'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
    'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg',
    'https://th.bing.com/th/id/R.64ee139946f1339f95d51edb6c3a4c1d?rik=BrKTlsT0L%2bsLkA&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2016%2f02%2fAutumn-river-sky-wooden-bridge-ultra-HD-3840x2160-wallpaper.jpg&ehk=U%2fLoTHZBiTcl3z37Egkm12yWyXlhJ9j%2fZjJIGOwtXi4%3d&risl=&pid=ImgRaw&r=0',
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg'

];

const imageGallery:React.FC<imageGalleryProps> = ({currentImageIndex}) => {
  
    return( 
            
            <img key={currentImageIndex} 
                src={imageURLs[currentImageIndex]} 
                alt={`${currentImageIndex+1}`} 
                className='imageContainer'/>
    )
}

export default imageGallery;