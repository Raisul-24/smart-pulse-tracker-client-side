/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";
import { FaTrophy } from "react-icons/fa";

const Testimonial = () => {
   const testimonials = [
      {
         id: 1,
         name: 'John Doe',
         achievement: 'Lost 20 pounds in 2 months!',
         quote: 'This platform has transformed my fitness journey. The personalized plans and supportive community made all the difference.',
         image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80',
      },
      {
         id: 2,
         name: 'Alice Johnson',
         achievement: 'Built lean muscle mass',
         quote: "Ive never felt stronger! The trainers on this platform guided me to build lean muscle mass, and I couldn't be happier with the results.",
         image: 'https://i.ibb.co/tbVvNz2/How-to-become-a-peer-reviewer-Tips-for-early-career-researchers-resized-0-0.jpg',
      },
      {
         id: 3,
         name: 'Emma White',
         achievement: 'Improved flexibility and endurance',
         quote: 'Thanks to the diverse range of classes, my flexibility and endurance have improved significantly. It\'s a game-changer for anyone serious about their fitness.',
         image: 'https://i.ibb.co/V2PMc5R/Google-Reviews-for-Fitness-Businesses-scaled.jpg',
      },
      {
         id: 4,
         name: 'Michael Brown',
         achievement: 'Transformed my overall well-being',
         quote: 'This platform is not just about physical fitness; it\'s about holistic well-being. I feel more energized, focused, and positive in every aspect of my life.',
         image: 'https://i.ibb.co/HVPskP5/Personal-Trainer-in-Chicago.jpg',
      },
      {
         id: 5,
         name: 'Sophia Davis',
         achievement: 'Achieved my fitness goals',
         quote: 'I set ambitious fitness goals, and with the guidance of the trainers and the incredible support from the community, I not only achieved but exceeded my expectations.',
         image: 'https://i.ibb.co/TbcN8zq/jennifer-bourn-barre-blend.jpg',
      },
      {
         id: 6,
         name: 'Bob Smith',
         achievement: 'Enjoyable and effective workouts',
         quote: "I've tried many fitness platforms, but this one stands out for its enjoyable and effective workouts. It doesn't feel like a chore; it's a part of my day that I look forward to.",
         image: 'https://i.ibb.co/80cb3Mr/Fitbit-Inspire-2-FI.jpg',
      },
   ];

   return (
      <div>
         <h2 className="text-4xl text-center font-bold text-black mb-6">Client Reviews</h2>
         <Marquee pauseOnHover={true} speed={50}>
         {
            testimonials.map(review => <div key={review.id} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mr-6">
               <div className="relative flex items-center gap-4 pt-0 pb-8 mx-2 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <img
                     src={review.image}
                     alt="tania andrew"
                     className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                     <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           {review.name}
                        </h5>

                     </div>
                     <div className="flex gap-x-2">
                        <FaTrophy className="text-2xl text-amber-500"></FaTrophy>
                        <p> {review.achievement}</p>
                     </div>
                  </div>
               </div>
               <div className="p-0 mb-6">
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{review.quote}</p>
               </div>
            </div>)
         }
</Marquee>


      </div >
   );
};

export default Testimonial;