import {Button, CardLink, Container, Navbar} from "react-bootstrap";

export default function Mainnav() {
    return (
        <Navbar expand="sm" className="bg-body-tertiary"
                style={{
                    paddingLeft: '15px',
                    background: 'whitesmoke',
                    borderRadius: '25px',
                    boxShadow: "1px 1px 10px 1px grey",
                }}>
            <Container>
                <Navbar.Brand href="/" className={'home'} style={{fontSize: 'xx-large'}}>Home</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <CardLink href={'https://www.linkedin.com/in/jusrogers/'} target={'_blank'}>
                        <Button style={{margin: '15px', color: 'black'}} className={'metallic-element'}>
                            LinkedIn
                        </Button>
                    </CardLink>
                    <CardLink href={'https://github.com/Jrog378'} target={'_blank'}>
                        <Button style={{margin: '15px', color: 'black'}} className={'metallic-element'}>
                            GitHub
                        </Button>
                    </CardLink>
                    <CardLink href={'mailto:jusrogers378@gmail.com'} target={'_blank'}>
                        <Button style={{margin: '15px', color: 'black'}} className={'metallic-element'}>
                            Email Me
                        </Button>
                    </CardLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}