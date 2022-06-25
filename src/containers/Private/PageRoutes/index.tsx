import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Authors from '../Authors'
import Bookmarks from '../Bookmarks'
import Genres from '../Genres'
import History from '../History'
import Main from '../Main'

const PrivatePages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/history" component={History} />
      <Route exact path="/genres" component={Genres} />
      <Route exact path="/authors" component={Authors} />
      <Route exact path="/bookmarks" component={Bookmarks} />
    </Switch>
  )
}

export default PrivatePages
