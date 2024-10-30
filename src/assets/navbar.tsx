import {Button, Col, Nav, Navbar, Row} from "react-bootstrap";

export default function Mainnav() {
    return (
        <Navbar style={{background: 'whitesmoke', borderRadius: '25px', boxShadow: "1px 1px 10px 1px grey", margin:'5px'}}>
            <Row style={{width:'100%', margin:'auto'}}>
                <Col md={2} sm={12}>
                    <Nav style={{margin: '15px', fontWeight: 'bold'}}>
                        <h2 className={'home'} style={{margin:'auto'}}>Home</h2>
                    </Nav>
                </Col>
                <Col md={8} sm={0}>
                    <Nav>
                    </Nav>
                </Col>
                <Col md={2} sm={12}>
                    <Nav style={{justifyContent:'center'}}>
                        <Button style={{margin: '15px', color:'black'}} className={'metallic-element'}>
                            LinkedIn
                        </Button>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    )
}