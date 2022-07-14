import React, {useEffect, useState} from 'react';
// import './App.css';
import '../src/YourApp.css';
import GithubUsers from './GitHubUser/GithubUsers';
import Navbar from './Navbar/Navbar';

function App(props) {
  const [isUsersData, setfetchUsers] = useState([]);
  const [isSearchFilter, isSetSearchFilter] = useState([]);
  const [isSearch, IsSetInputSearch] = useState("");
  const [isStatus, IsSetStatus] = useState(true);

  const getDataList = (() => {

    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setfetchUsers(response)
      })
  })

  useEffect(() => {
    getDataList()
  }, [])

  const SearchUsers = (InputSearch) => {
    IsSetInputSearch(InputSearch)
    IsSetStatus(false)
    if(isSearch !== ''){
      const filterData = isUsersData.filter((itm) => {
        return Object.values(itm).join('').toLocaleLowerCase().includes(isSearch.toLocaleLowerCase())
      })
      isSetSearchFilter(filterData)
    }else{
      isSetSearchFilter(isUsersData)
    }
  }

  const whenSearch = (yourData) => {
    SearchUsers(yourData.target.value)
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* This is heading tag */}
        <div className="flex-container">
          <h1>Welcome to your Github User Landing Page</h1>

        {/* This is Search bar tag */}
        <form>
          <input className='search-input-user' type="text" placeholder='Search your talent.....' onChange={whenSearch} />
          <br />
          <button className='ButtonSearch'>Search</button>
        </form>
        </div>
        
          <GithubUsers usrData={isUsersData} yourFilter={isSearchFilter} yourStatus={isStatus}/>

      </header>
    </div>
  );
}

export default App;
