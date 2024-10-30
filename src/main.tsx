import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Mainnav from "./assets/navbar.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Mainnav/>
        <App/>
    </StrictMode>,
)
