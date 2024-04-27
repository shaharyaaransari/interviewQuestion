import { useEffect, useState } from "react";
import "./App.css";
import { Search } from "./component/Search";
import { Pagination } from "./component/Pagination";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [totalPages,setTotalPages] =useState(0)
    const [page,setPage] = useState(1)
  const [matchWord, setMatchWord] = useState("");
  const fetchData = () => {
      let url = `http://localhost:8080/movie`
        if(search){
            url = `http://localhost:8080/movie?q=${search}`
        }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
       
        setData(res);
        setTotalPages(Math.ceil(res.length / 6));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    setMatchWord(search);
      fetchData()
   
    setSearch("")
  };
  useEffect(() => {
    fetchData();
  }, []);
    
  return (
    <div className="App">
      <h3>Search functionality</h3>
      <Search search={search} setSearch={setSearch} handleClick={handleClick} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          margin: "20px",
        }}
      >
        {data.length > 0 &&
          data.slice((page - 1) * 6, page * 6).map((el) => {
            return (
              <div key={el.id} className="card">
                  <div style={{margin:"20px"}}>
                  {el.name.split(" ").map((word, i) => {
                      const isMatched = matchWord.toLowerCase().split(" ").some((matchWord)=>word.toLowerCase()==matchWord)
                return  <span
                    key={i}
                    style={{
                      color:
                       isMatched
                          ? "red"
                          : "",
                           marginBottom:'10px',
                           fontSize:"20px"
                    }}
                  >
                    {word}{" "}
                  </span>;
                })}
                  </div>
               

                <h5>Release:{el.release}</h5>
                <h5>Rating: {el.rating}</h5>
              </div>
            );
          })}
      </div>
    { totalPages > 1 &&  <Pagination page={page} setPage={setPage} totalPages ={totalPages}/>}  
    </div>
  );
}

export default App;
