import { Helmet } from "react-helmet";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {
   const generateImageUrls = (count) => {
      const imageBaseURL = "/images/gallery/img";
      return Array.from({ length: count }, (_, index) => `${imageBaseURL}${index + 1}.jpeg`);
   };

   const images = generateImageUrls(24);
   //  console.log(images)
   return (
      <div className="pt-20">
         <Helmet>
            <title>SmartPulse Tracker | Gallery</title>
         </Helmet>
         <h2 className="text-4xl text-center font-bold">Gallery</h2>

         <div className="">

            <div className="">
               <PhotoProvider>
                  <div className="foo grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
                     {images.map((item, index) => (
                        <PhotoView key={index} src={item}>
                           <img src={item} alt="" className="w-96 rounded-xl h-60" />
                        </PhotoView>
                     ))}
                  </div>
               </PhotoProvider>
            </div>
         </div>
      </div>
   );
};
export default Gallery;