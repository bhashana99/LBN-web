import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login-admin",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      
      });
      const data = await res.json();
      
      if(data.success === false){
        setError(data.message)
        setLoading(false)
        return
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
   
  }


  return (
    <div className="bg-slate-50">
      <div className="px-5 max-w-md py-5 md:py-20 mx-auto ">
        <h1 className="text-3xl text-center font-semibold my-8">Sign In</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            className="border p-3 rounded-lg"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button disabled={loading} className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
             {loading ? 'Loading...' : 'Sign In'} 
          </button>
        </form>
        {error && <p className="text-red-700 mt-5">{error}</p>}
      </div>
     
    </div>
  );
}
