import { Link } from "react-router-dom";


const RecommendedClasses = () => {
   return (
      <div>
         <h2 className="text-4xl text-center font-bold text-black">Recommended Classes</h2>
         <div className=" grid grid-cols-2">
            <div className="card w-96 shadow-xl p-7 bg-orange-100 border-2 border-orange-500 m-10">
               <h2 className="text-lg font-semibold text-center mb-1">Kickboxing</h2>
               <div className="flex justify-center gap-x-4">
                  <button className="btn btn-xs btn-ghost text-amber-400 bg-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Know More</button>
                  <Link to="/trainer">
                     <button className="btn btn-xs btn-ghost text-amber-400 bg-white">Join Now</button>
                  </Link>
               </div>
               <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-white text-black">
                     <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                     </form>
                     <h3 className="font-bold text-lg">Session Name: Cardio Kickboxing</h3>
                     <p className="py-4">High-intensity cardio workout with elements of martial arts.</p>
                     <p>Key Features: Calorie burning, Improved cardiovascular health, Stress release</p>
                  </div>
               </dialog>
            </div>
            <div className="card w-96 shadow-xl p-7 bg-orange-100 border-2 border-orange-500 m-10">
               <h2 className="text-lg font-semibold text-center mb-1">Zumba</h2>
               <div className="flex justify-center gap-x-4">
                  <button className="btn btn-xs btn-ghost text-amber-400 bg-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Know More</button>
                  <Link to="/trainer">
                     <button className="btn btn-xs btn-ghost text-amber-400 bg-white">Join Now</button>
                  </Link>
               </div>
               <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-white text-black">
                     <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                     </form>
                     <h3 className="font-bold text-lg">Session Name: Zumba</h3>
                     <p className="py-4">Dance-based fitness class with a mix of Latin and international music.</p>
                     <p>Key Features: Cardiovascular fitness, Coordination improvement, Fun and energetic</p>
                  </div>
               </dialog>
            </div>
            <div className="card w-96 shadow-xl p-7 bg-orange-100 border-2 border-orange-500 m-10">
               <h2 className="text-lg font-semibold text-center mb-1">HIIT</h2>
               <div className="flex justify-center gap-x-4">
                  <button className="btn btn-xs btn-ghost text-amber-400 bg-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Know More</button>
                  <Link to="/trainer">
                     <button className="btn btn-xs btn-ghost text-amber-400 bg-white">Join Now</button>
                  </Link>
               </div>
               <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-white text-black">
                     <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                     </form>
                     <h3 className="font-bold text-lg">Session Name: HIIT</h3>
                     <p className="py-4">High-Intensity Interval Training for maximum calorie burn and muscle toning.</p>
                     <p>Key Features: Fat burning, Improved metabolism, Time-efficient</p>
                  </div>
               </dialog>
            </div>
         </div>
      </div>
   );
};

export default RecommendedClasses;