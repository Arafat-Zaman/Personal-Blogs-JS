import { fetchdata } from "../components/functions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [articles, setarticles] = useState();
  const navigate =useNavigate()
  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/articles", { method: 'GET' });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data =await response.json()
            console.log(response)
            setarticles(data.articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    fetchArticles();
},[]);
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="underline">Personal Blog</h1>
        <button className="text-xl" onClick={()=>{navigate("/Admin/Add")} }>+ Add</button>
      </div>
      <div className="my-6">
        {articles &&
          articles.map((v, i, arr) => {
            return (
              <div key={v.key} className="flex flex-row justify-between items-center">
                <h2>{i}- {v.title}</h2>
                <div className="flex flex-row justify-around items-center">
                  <button onClick={()=>{navigate(`/Admin/Edit/${v.id}`)}} className="text-gray-400 px-1 text-xl">Edit</button>
                  <button onClick={async()=>{await deletearticle(v.id);navigate("/")}} className="text-gray-400 px-1 text-xl">Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

async function deletearticle(id){
  await fetch(`http://localhost:3000/api/articles/delete/${id}`,{
    method:"DELETE",
    headers:{"Content-type":"Application/json"},
   
  })
}
