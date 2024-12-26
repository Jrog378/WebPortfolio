import './App.css'
import {Card, Col, Container, Image, Row} from "react-bootstrap";

function App() {
    return (
        <Container>
            <Container>
                <h2 style={{padding: '25px 10px'}}>
                    My name is Justin Rogers and these are my websites
                </h2>
            </Container>
            <Container>
                <Col>
                    <Container>
                        <Row style={{padding: '10px'}}>
                            <Col sm={12} lg={6}>
                                <Container style={{padding: '10px'}}>
                                    <a target={'_blank'} href={'https://rolesclothing.com'}>
                                        <Image style={{width: '100%', borderRadius: '5px'}} src={'/RolesClothing.png'}/>
                                    </a>
                                </Container>
                            </Col>
                            <Col sm={12} lg={6}>
                                <h3>
                                    Roles Clothing Brand
                                </h3>
                                <Card.Text>
                                    Roles Clothing is an innovating and creative clothing brand. The website I have
                                    created for this company is packed with precise designs to optimize user experience
                                    and increase sales by making a promising first impression. This website is
                                    constructed with animations, transitions, and unique product displays. On top of
                                    these visual features, functionality comes from seamless strip integration to ensure
                                    secure and timely order processing and shipping. <a target={'_blank'}
                                                                                        href={'https://rolesclothing.com'}>This website</a> is made with Vite and
                                    ReactJS Routing and is currently operating without a backend framework.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row style={{padding: '10px'}}>
                            <Col sm={12} lg={6}>
                                <Container style={{padding: '10px'}}>
                                    <a target={'_blank'} href={'https://patriothacks2024.vercel.app/'}>
                                        <Image style={{width: '100%', borderRadius: '5px'}} src={'/OpenCV.png'}/>
                                    </a>
                                </Container>
                            </Col>
                            <Col sm={12} lg={6}>
                                <h3>
                                    Computer Vision Hackathon
                                </h3>
                                <Card.Text>
                                    PatriotHacks 2024 was a hackathon at GMU where various employers came together to
                                    task
                                    participants with complicated problems with a time limit of less than 36 hours. The
                                    employers that I chose to work with were MetroStar, AWS, and Peraton. Our project
                                    used
                                    AWS and OpenCV, a Python computer vision library, to reach an accuracy of 100
                                    percent on
                                    the easiest part, 96 percent accuracy on the mediocre task, and 80% accuracy on the
                                    most
                                    challenging task. Our group achieved the highest accuracies out of the finalists and
                                    finished second place overall with <a style={{fontWeight: 'bold'}} target={"_blank"}
                                                                          href={'https://patriothacks2024.vercel.app/'}>
                                    this website</a> as our presentation.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row style={{padding: '10px'}}>
                            <Col sm={12} lg={6}>
                                <Container style={{padding: '10px'}}>
                                    <a target={'_blank'} href={'https://www.webminers.dev'}>
                                        <Image style={{width: '100%', borderRadius: '5px'}} src={'/Webminers.png'}/>
                                    </a>
                                </Container>
                            </Col>
                            <Col sm={12} lg={6}>
                                <h3>
                                    Webminers
                                </h3>
                                <Card.Text>
                                    Webminers is an investment website that uses Modern Portfolio Theory to find
                                    comparatively efficient assets from a custom algorithm that results in a value that
                                    can
                                    be plotted and visualized on <a style={{fontWeight: 'bold'}} target={"_blank"}
                                                                    href={'https://www.webminers.dev'}>Webminers.dev</a>.
                                    Webminers also includes
                                    efficiency-balanced
                                    portfolios and investing calculators. Achieved pages include subscriptions with
                                    payments, logins, and economic indicators from custom macro/micro-economic
                                    algorithms.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container
                        style={{background: 'whitesmoke', padding: '10px', borderRadius: '25px', margin: '25px 0'}}>
                        <h3>Additional Skills</h3>
                        <p>
                            Expertise in Python, R, SQL, JavaScript, and other Web Development / Data Science tools or
                            libraries. Support skills include Project Management, Problem-Solving, Algorithms, and
                            Machine Learning
                        </p>
                    </Container>
                </Col>
            </Container>
        </Container>
    )
}

export default App
