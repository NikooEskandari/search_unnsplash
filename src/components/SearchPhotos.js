import React, { useState } from "react";
import { createApi } from 'unsplash-js';

const unsplash = createApi({ accessKey: 'XStI319cvaDkNBHLb9dv3t3zpE8XBk-pJNA6z-RmZxI' });

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
    .getPhotos({
      query: query
    })
    .then((data) => {
      setPics(data.response.results);

      let userObject = {
        id: 1, 
        search_result: data.response.results
      };

      fetch('http://localhost:3000/edit-user/1', {  
        method: 'GET'
      }).then((response) => 
        console.log(response)
      );


      fetch('http://localhost:3000/update-user/1', {  
        method: 'PUT', 
        body: JSON.stringify(data.response.results),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then((response) => 
        console.log(response)
      );

      
    });
  }

    return (
        <>
          <form className="form" onSubmit={searchPhotos}> 
            <label className="label" htmlFor="query"> 
              {" "}
            </label>

            <input
              type="text"
              name="query"
              className="input"
              placeholder={`Search knowledge`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}  
            />

            <button type="submit" className="button">
              Search
            </button>
          </form> 

          <div className="card-list">
            {
              pics.map((pic) => 
              <div className="card" key={pic.id}>
                <img
                  className="card--image"
                  alt={pic.alt_description}
                  src={pic.urls.full}
                  width="50%"
                  height="50%"
                ></img>
              </div>)
            }
          </div>
        </>
      );
}
