import JanataHeader from './header/JanataHeader';
import Main from './main/Main';
import wp_config from './config';
import { useState, useEffect } from 'react';
import { getGraphqlPosts } from './rest-api/GetData';

function App() {

  const [data, setData] = useState({});

  useEffect(()=>{
      getGraphqlPosts('2022-08-28')
      .then((data)=>setData(data))
  },[])

  console.log("JanataApp Rendered...");
  return (
  <>
    { Object.keys(data).length != 0 ? <> 
      <JanataHeader config={data.generalSettings}/>
      <Main currentIssueList={data.posts.nodes}/>
    </> : 
    <div className='loading-bg'>
          <div className="spinner-grow text-primary loading" role="status">
              <span className="sr-only"></span>
          </div>
    </div>}
  </>
  );
}

export default App;
