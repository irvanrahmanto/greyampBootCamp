import React, {useEffect, useState} from 'react';
// import './App.css';
import GithubUsers from './GitHubUser/GithubUsers';

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
    if(isSearch !== ' '){
      const filterData = isUsersData.filter((itm) => {
        return Object.values(itm).join('').toLocaleLowerCase().includes(isSearch.toLocaleLowerCase())
      })
      isSetSearchFilter(SearchUsers)
    }
  }

  const whenSearch = (yourData) => {
    SearchUsers(yourData.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* This is heading tag */}
        <h1>Welcome to your Github User Landing Page</h1>

        {/* This is Search bar tag */}
        <form action="">
          <input type="text" placeholder='Search...'/>
        </form>

          <GithubUsers usrData={isUsersData} />

      </header>
    </div>
  );
}

export default App;
