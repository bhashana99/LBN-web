import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase.js";
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    countryFlag: "",
    title: "",
    country: "",
    description: "",
    address: "",
    requiredQualifications: "",
    requiredExperience: "",
    remarks: "",
    contractPeriod: "",
    salary: "",
    food: false,
    accommodation: false,
    medical: false,
    airTicket: false,
    googleFormLink: "",
    
  });

  const {currentAdmin} = useSelector((state) => state.admin)
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  

  const handleFlagUpload = (e) => {
    e.preventDefault();
    if (file && file.length === 1) {
      setUploading(true);
      setImageUploadError(false);
      storeImage(file[0])
        .then((url) => {
          setUploading(false);
          setFormData({
            ...formData,
            countryFlag: url,
          });
        })
        .catch((error) => {
          setUploading(false);
          setImageUploadError(true);
        });
    } else {
      setImageUploadError("You can only upload one flag per vacancy");
      setUploading(false);
    }
  };

  const storeImage = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(error);
            });
        }
      );
    });
  };

  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      countryFlag: "",
    });
  };

  const handleChange = (e) => {
    if (e.target.type === "text" || e.target.type === "textarea") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.countryFlag === "") {
        setImageUploadError("Please upload a country flag");
        return;
      }

      setLoading(true);
      setError(false);
      const res = await fetch('/api/vacancy/create-vacancy', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          ...formData,
          adminRef: currentAdmin._id,
        }),
      });

      const data = await res.json();
      console.log("Server Response:", data);
      setLoading(false);
      if(data.success === false){
        setError(data.message);
      }
      navigate(`/vacancy/${data._id}`)
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <main className="p-3 max-w-4xl mx-auto pt-20">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Vacancy
      </h1>
      <form onSubmit={handleSubmit}  className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Job Title"
            className="border p-3 rounded-lg"
            id="title"
            onChange={handleChange}
            value={formData.title}
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="border p-3 rounded-lg"
            id="country"
            required
            onChange={handleChange}
            value={formData.country}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Company Address"
            className="border p-3 rounded-lg"
            id="address"
            
            onChange={handleChange}
            value={formData.address}
          />
          <input
            type="text"
            placeholder="Contract Period"
            className="border p-3 rounded-lg"
            id="contractPeriod"
            required
            onChange={handleChange}
            value={formData.contractPeriod}
          />
          <input
            type="text"
            placeholder="Salary Range"
            className="border p-3 rounded-lg"
            id="salary"
            required
            onChange={handleChange}
            value={formData.salary}
          />
          <textarea
          rows={2}
            type="text"
            placeholder="Required Qualifications"
            className="border p-3 rounded-lg"
            id="requiredQualifications"
            onChange={handleChange}
            value={formData.requiredQualifications}
          />
           <textarea
          rows={2}
            type="text"
            placeholder="Required Experience"
            className="border p-3 rounded-lg"
            id="requiredExperience"
            onChange={handleChange}
            value={formData.requiredExperience}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
       
        <textarea
          rows={4}
            type="text"
            placeholder="Remarks"
            className="border p-3 rounded-lg"
            id="requiredRemarks"
            onChange={handleChange}
            value={formData.remarks}
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="food"
                className="w-5"
                onChange={handleChange}
                checked={formData.food}
              />
              <span>Food</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="accommodation"
                className="w-5"
                onChange={handleChange}
                checked={formData.accommodation}
              />
              <span>Accommodation</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="medical"
                className="w-5"
                onChange={handleChange}
                checked={formData.medical}
              />
              <span>Medical</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="airTicket"
                className="w-5"
                onChange={handleChange}
                checked={formData.airTicket}
              />
              <span>Air Ticket</span>
            </div>
          </div>
          <input
            type="text"
            placeholder="Google Form Link"
            className="border p-3 rounded-lg"
            id="googleFormLink"
            required
            onChange={handleChange}
            value={formData.googleFormLink}
          />
          <p className="font-semibold">Country Flag:</p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="flag"
              accept="image/*"
              onChange={(e) => setFile(e.target.files)}
            />
            <button
            disabled={uploading}
            type="button"

              onClick={handleFlagUpload}
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
           
          </div>
         
          <p className="text-red-700">{imageUploadError && imageUploadError}</p>

          {formData.countryFlag ? (
            <div className="flex justify-between p-3 border items-center">
              <img src={formData.countryFlag} alt="country flag"  className="w-30 h-20 object-contain rounded-lg" />
              <button
                onClick={() => handleRemoveImage()}
                type="button"
                className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )}

          <button disabled={loading || uploading} className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
           {loading ? "Creating..." : "Create Vacancy"}
          </button>
          <Link to='/profile' className="p-3 bg-green-700 text-white text-center rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          <button disabled={loading || uploading}>Back</button>
          </Link>
          {error && <p className="text-red-700">{error}</p>}
        </div>
      </form>
    </main>
  );
}
