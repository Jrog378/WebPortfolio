import {Container} from "react-bootstrap";

export default function Mainfoot() {
    return (
        <footer style={{width: '100%'}}>
            <div className="bg-body-tertiary"
                 style={{
                     padding: '15px',
                     background: 'whitesmoke',
                     borderRadius: '25px 25px 0 0',
                     boxShadow: "1px 1px 10px 1px grey",
                 }}>
                <Container>
                    Created With ReactJS
                </Container>
            </div>
        </footer>
    )
}