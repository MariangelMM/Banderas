import React from 'react';
import './App.css';

import Header from './components/Header';
import Buscador from './components/Buscador';
import SelectBox from './components/SelectBox';
import Countries from './components/Countries';

class App extends React.Component {
  state = {
    regiones: ['Africa', 'Americas', 'Artartic', 'Asis', 'Europa', 'Oceania'],
    paises: [],
    filtered: [],
    busqueda: "",
    region: "",
    modo: "light",
    isFetch: true
  }

  consultarAPI = () =>{
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
  .then(response => response.json()) 
  .then(data => {
       var countries = Array.from(data);
    
      this.setState({
        paises : countries,
        filtered: countries,
        isFetch: true
      });    
      console.log(countries);   
      })
      .catch(error => {
        console.log(error);
       })
    }

  componentDidMount(){
    this.consultarAPI();
    console.log("Component did Mount");
    console.log("Se hizo una llamada a la API");
  }

  render (){
    return(
      <div className="App">
        <Header />
       <div className="container-80">
         <div className="search-filters">
         <Buscador/>
         <SelectBox width={200} />
         </div>
         <Countries countries={this.state.filtered} isFetch={this.state.isFetch} />    
       </div>
      </div>
    )
  }
}

export default App;