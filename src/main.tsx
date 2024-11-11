import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Mainnav from "./assets/navbar.tsx";
import Mainfoot from "./assets/footer.tsx";
import {Container} from "react-bootstrap";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Container>
            <Mainnav/>
            <App/>
        </Container>
        <Mainfoot/>
    </StrictMode>,
)
