import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateAdminFailure, updateAdminStart, updateAdminSuccess,signOutAdminFailure,signOutAdminStart,signOutAdminSuccess } from "../redux/admin/adminSlice.js";


export default function Profile() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentAdmin,loading,error } = useSelector((state) => state.admin);
  const [filePrec, setFilePrec] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showVacancyError, setShowVacancyError] = useState(false);
  const [showVacancy, setShowVacancy] = useState([]);

  const dispatch = useDispatch();
  // console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log("Upload is " + progress + "% done");
      setFilePrec(Math.round(progress));
    },
    (error) => {
      setFileUploadError(true);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData({ ...formData, avatar: downloadURL });
      });
    });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateAdminStart());
      const res = await fetch(`/api/admin/update-admin/${currentAdmin._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(updateAdminFailure(data.message));
        return;
      }
      dispatch(updateAdminSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateAdminFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutAdminStart());
      const res = await fetch("/api/admin/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutAdminFailure(data.message));
        return;
      }
      dispatch(signOutAdminSuccess(data));
    } catch (error) {
      dispatch(signOutAdminFailure(error.message));
    }
  };

  const handleShowVacancy = async () => {
    try {
      setShowVacancyError(false);
      const res = await fetch("/api/vacancy/get-vacancies");
      const data = await res.json();
      if (data.success === false) {
        setShowVacancyError(true);
        return;
      }
      setShowVacancy(data);
    } catch (error) {
      setShowVacancyError(true);
      console.log(showVacancyError)
    }
  }

  const handleVacancyDelete = async(vacancyId) => {
    try {
      const res = await fetch(`/api/vacancy/delete-vacancy/${vacancyId}`,{
        method:"DELETE"
      
      });
      const data = await res.json();
      if(data.success === false){
        console.log(data.message)
        return;
      }

      setShowVacancy((prev) => prev.filter((vacancy)=>vacancy._id !== vacancyId))
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/.*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentAdmin.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Upload (image must be less than 3 MB)
            </span>
          ) : filePrec > 0 && filePrec < 100 ? (
            <span className="text-slate-700">Uploading {filePrec}%</span>
          ) : filePrec === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          defaultValue={currentAdmin.username}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95">
        {loading ? "Loading..." : "Update"}
        </button>
        <Link
          to={"/create-vacancy"}
          className="bg-green-700 uppercase rounded-lg text-center p-3 text-white hover:opacity-95"
        >
          Create Vacancy
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        
        <span className="text-green-700 cursor-pointer " >Admin Panel</span>
        <span className="text-red-700 cursor-pointer" onClick={handleSignOut}>Sign out</span>

      </div>
      <p className="text-red-700 mt-5">{error ? error : ""}</p>
      <p className="text-green-700 mt-5">
        {updateSuccess ? "User is updated successfully!" : ""}
      </p>
      <button onClick={handleShowVacancy} className="text-green-700 w-full">
        Show Vacancy
      </button>
      <p className="text-red-700 mt-5">
        {" "}
        {showVacancyError ? "Error showing Listing" : ""}
      </p>

      {showVacancy && showVacancy.length > 0 &&
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-center mt-5 text-2xl font-semibold">Vacancies</h1>
          {showVacancy.map((vacancy) => (
        <div
          key={vacancy._id}
          className="border rounded-lg p-3 flex justify-between items-center gap-4"
        >
          <Link to={`/vacancy/${vacancy._id}`}>
            <img
              src={vacancy.countryFlag}
              alt="country flag"
              className="h-16 w-16 object-contain "
            />
          </Link>
          <Link className="flex-1 text-slate-700 font-semibold hover:underline truncate" to={`/vacancy/${vacancy._id}`}>
            <p >{vacancy.title}</p>
          </Link>

          <div className="flex flex-col items-center">
            <button onClick={()=>handleVacancyDelete(vacancy._id)}  className="text-red-700 uppercase">delete</button>
            <Link>
              <button className="text-green-700 uppercase">edit</button>
            </Link>
            
          </div>
        </div>
      ))}
        </div>
      }
    </div>
  );
}
