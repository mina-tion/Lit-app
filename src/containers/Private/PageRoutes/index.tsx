import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Genres from '../Genres'
import History from '../History'
import Main from '../Main'
import TableСontainer from '../Table'


const PrivatePages: React.FC = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/history" component={History} />
      <Route exact path="/genres" component={Genres} />
      <Route exact path="/table" component={TableСontainer} />
    </Switch>
  )
}

export default PrivatePages
