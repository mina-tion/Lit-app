import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main'
import TableСontainer from '../Table'


const PrivatePages: React.FC = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/table" component={TableСontainer} />
    </Switch>
  )
}

export default PrivatePages
