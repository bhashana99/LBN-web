import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { updateAdminFailure, updateAdminStart, updateAdminSuccess,signOutAdminFailure,signOutAdminStart,signOutAdminSuccess } from "../redux/admin/adminSlice.js";


export default function Profile() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentAdmin } = useSelector((state) => state.admin);
  const [filePrec, setFilePrec] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

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
        <button className="bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95">
          update
        </button>
      </form>
      <div className="flex justify-end mt-5">
        
        <span className="text-red-700 cursor-pointer" onClick={handleSignOut}>Sign out</span>
      </div>
    </div>
  );
}
