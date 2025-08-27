import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nine from './usestate/nine.tsx'
// import Ten from './usestate/ten.tsx'
// import Eight from './usestate/eight.tsx'
// import Seventh from './usestate/seventh.tsx'
// import Sixth from './usestate/sixth.tsx'
// import Fifth from './usestate/fifth.tsx'
// import Forth from './usestate/forth.tsx'
// import Second from './usestate/second.tsx'
// import Third from './usestate/third.tsx'
// import First from './usestate/first.tsx'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nine />
  </StrictMode>,
)
