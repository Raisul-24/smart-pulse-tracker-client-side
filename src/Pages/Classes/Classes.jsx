import { Link } from "react-router-dom";


const Classes = () => {
   return (
      <div className="pt-24 text-black">
         <div className="">
            <h2 className="text-4xl text-center font-bold ">Weekly Class Schedule</h2>
            <div className="overflow-x-auto my-6 mb-14 ml-0 lg:ml-10">
               <table className="table ">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Time Slot</th>
                        <th>Sunday</th>
                        <th>Tuesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     <tr>
                        <th>
                           9:00 AM - 10:00 AM
                        </th>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Yoga</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Yoga</h3>
                                    <p className="py-4">A holistic practice that combines physical postures, breath control, and meditation.</p>
                                    <p>Key Features: Improved flexibility, Stress relief, Enhanced mental clarity</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
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
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Pilates</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Pilates</h3>
                                    <p className="py-4">Focuses on core strength, flexibility, and overall body awareness.</p>
                                    <p>Key Features: Improved posture, Core strength, Muscle toning</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
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
                        </td>
                     </tr>
                     {/* row 2 */}
                     <tr>
                        <th>
                           10:00 AM - 11:00 AM
                        </th>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
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
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Strength</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Strength Training</h3>
                                    <p className="py-4">Focuses on building muscular strength through resistance exercises.</p>
                                    <p>Key Features: Muscle development, Bone health, Increased metabolism</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Barre</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Barre</h3>
                                    <p className="py-4">Combines elements of ballet, Pilates, and yoga for a full-body workout.</p>
                                    <p>Key Features: Improved posture, Core strength, Muscle tune, Enhanced flexibility</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Cycling</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Cycling</h3>
                                    <p className="py-4">Indoor cycling class focusing on endurance and cardiovascular fitness.</p>
                                    <p>Key Features: Cardiovascular fitness, Coordination improvement, Cardiovascular health</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                     </tr>
                     {/* row 3 */}
                     <tr>
                        <th>
                           3:00 PM - 4:00 PM
                        </th>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Pilates</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Pilates</h3>
                                    <p className="py-4">Focuses on core strength, flexibility, and overall body awareness.</p>
                                    <p>Key Features: Improved posture, Core strength, Muscle toning</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Yoga</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Yoga</h3>
                                    <p className="py-4">A holistic practice that combines physical postures, breath control, and meditation.</p>
                                    <p>Key Features: Improved flexibility, Stress relief, Enhanced mental clarity</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
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
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Strength</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Strength Training</h3>
                                    <p className="py-4">Focuses on building muscular strength through resistance exercises.</p>
                                    <p>Key Features: Cardiovascular fitness, Increased metabolism, Cardiovascular health</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                     </tr>
                     {/* row 4 */}
                     <tr>
                        <th>
                           3:00 PM - 4:00 PM
                        </th>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Cycling</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Cycling</h3>
                                    <p className="py-4">Indoor cycling class focusing on endurance and cardiovascular fitness.</p>
                                    <p>Key Features: Cardiovascular fitness, Coordination improvement, Cardiovascular health</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
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
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Barre</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Barre</h3>
                                    <p className="py-4">Combines elements of ballet, Pilates, and yoga for a full-body workout.</p>
                                    <p>Key Features: Improved posture, Core strength, Muscle tune, Enhanced flexibility</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                        <td>
                           <div className="card w-40 lg:w-60 shadow-xl p-3">
                              <h2 className="text-lg font-semibold text-center mb-1">Yoga</h2>
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
                                    <h3 className="font-bold text-lg">Session Name: Yoga</h3>
                                    <p className="py-4">A holistic practice that combines physical postures, breath control, and meditation.</p>
                                    <p>Key Features: Improved flexibility, Stress relief, Enhanced mental clarity</p>
                                 </div>
                              </dialog>
                           </div>
                        </td>
                     </tr>
                  </tbody>

               </table>
            </div>
         </div>
      </div>
   );
};

export default Classes;