import UseUser from "../../../hooks/UseUser";


const Profile = () => {
   const user = UseUser();
   console.log(user);
   return (
      <div>
         <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img src={user?.photoURL} className="w-96 rounded-lg shadow-2xl" />
               <div className="text-black">
               <h2 className="text-4xl font-extrabold text-black mb-10">Profile Information:</h2>
                  <h1 className="text-5xl font-bold">Welcome !! {user.displayName} </h1>
                  <p className="py-6">Email: {user.email}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;