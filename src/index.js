import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header'
import './index.css'
import List from './components/list/List'
import NotFound from './components/notfound/Notfound'
import Detail from './components/detail/Detail'
import { BrowserRouter, Route, Switch} from 'react-router-dom';


const App = ()=> {
  const title = 'React Coin'
  return(
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
      <Route path = '/' component={List} exact/>
      <Route path= '/currency/:id'component={Detail} exact/>
      <Route component ={NotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<div>
    <App/>
</div>, document.getElementById('root'))











// component-children