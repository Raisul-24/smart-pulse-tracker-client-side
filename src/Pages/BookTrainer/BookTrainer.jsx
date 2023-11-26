import { useLocation } from "react-router-dom";


const BookTrainer = () => {
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const selectedTime = params.get('time');
   const trainerInfo = params.get('trainerInfo');
   console.log(selectedTime)
   console.log(trainerInfo)
   return (
      <div className="pt-24">
         <h2>Trainer Booked</h2>
         <h2>Selected Time Slot: {selectedTime}</h2>
         <h2>Trainer: {trainerInfo}</h2>
      {/* <h3>{trainerInfo.trainerName}</h3> */}
      </div>
   );
};

export default BookTrainer;