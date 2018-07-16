import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Counter from './containers/Counter'
import Rest from './containers/Rest'
import CASMBatchJobComp from './containers/CASMBatchJobComp'

const Routes = () => {
  return (
    <Switch>
    <Route path="/" exact component={CASMBatchJobComp}></Route>
    <Route path="/counter" exact component={Counter}></Route>
    <Route path="/rest" exact component={Rest}></Route>
    <Route path="/Products" exact component={CASMBatchJobComp}></Route>
  </Switch>
  )
}

export default Routes;