import React from 'react'

import { ExampleComponent } from 'ewamplerdem'
import 'ewamplerdem/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent type='primary' />
      <ExampleComponent type='default' />
      <ExampleComponent type='dashed' />
      <ExampleComponent type='text' />
      <ExampleComponent type='link' />
    </div>
  )
}

export default App
