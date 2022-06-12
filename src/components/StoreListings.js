import { Container, Col, Image, Row } from 'react-bootstrap'

const StoreListings = () => {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Choose your store in <span style={{ color: "green" }}>Philadelphia</span></h2>
            <Container style={{ borderBottom: "1px solid" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col>
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Dilvery * Pickup</p>
                    </Col>
                    <Col>
                        <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col>
                        <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>

                <br />

                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col>
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/243/a80cd095-b1cc-4649-a6cb-f088f89224e1.jpg" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Giant</h5>
                        <p>Dilvery * Pickup</p>
                    </Col>
                    <Col>
                        <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col>
                        <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default StoreListings;



