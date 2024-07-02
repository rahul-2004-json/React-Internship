import React from 'react'
import ReactDOM from 'react-dom/client'
import ConditionalRendering from './ConditionalRendering'
import RenderingList from './RenderingList'
import TeaSet from './PureFunction'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ConditionalRendering /> */}
    {/* <RenderingList/> */}
    <TeaSet/>

  </React.StrictMode>,
)
