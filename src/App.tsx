import React,{FunctionComponent} from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import PageNotFound from './pages/page-not-found';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonList from './pages/pokemon-list';

const App: FunctionComponent = () => {
 
 return (
   <Router>
      <div>
         {/*Barre de navigation comun a toutes les pages */}
            <nav className="nav-wrapper teal">
               <div>
                  <Link to="/" className="brand-logo center">Pokedex</Link>
               </div>
            </nav>
         {/*Systeme de gestion des routes de l'application*/}
         <Switch>
            <Route exact path="/" component={PokemonList}/>
            <Route exact path="/pokemons" component={PokemonList}/>
            <Route exact path="/pokemons/edit/:id" component={PokemonEdit}/>
            <Route path="/pokemons/:id" component={PokemonsDetail}/>
            <Route component={PageNotFound}/>

         </Switch>
      </div>
   </Router>
 )
}
 
export default App;