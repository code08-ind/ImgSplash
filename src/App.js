import React from 'react';
import Home from './components/Home';
import Search from './components/Search';
import Searchs from './components/Searchs';
import Sports from './components/Sports';
import Interiors from './components/Interiors';
import Film from './components/Film';
import Entertainment from './components/Entertainment';
import Nature from './components/Nature';
import People from './components/People';
import License from './components/License';
import Explore from './components/Explore';
import Drinks from './components/Drinks';
import About from './components/About';
import Culture from './components/Culture';
import Fashion from './components/Fashion';
import Health from './components/Health';
import Animals from './components/Animals';
import Travel from './components/Travel';
import Food from './components/Food';
import Athletics from './components/Athletics';
import Spirituality from './components/Spirituality';
import Arts from './components/Arts';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/interiors" component={Interiors} />
        <Route exact path="/film" component={Film} />
        <Route exact path="/entertainment" component={Entertainment} />
        <Route exact path="/nature" component={Nature} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/license" component={License} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/animals" component={Animals} />
        <Route exact path="/drinks" component={Drinks} />
        <Route exact path="/culture" component={Culture} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/athletics" component={Athletics} />
        <Route exact path="/spirituality" component={Spirituality} />
        <Route exact path="/arts" component={Arts} />
        <Route exact path="/people" component={People} />
        <Route exact path="/fashion" component={Fashion} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/searchs" component={Searchs} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
