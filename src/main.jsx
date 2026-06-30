
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  createElement('h1', null, 'Hello, React!')
)
