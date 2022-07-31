import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../css/Home.css";

function Home() {
	return (
		<Row className="w-100 m-auto">
			<Col
				md={6}
				className="d-flex flex-direction-column align-items-center justify-content-center"
			>
				<div>
					<h1>Поделись миров со своими друзьями!</h1>
					<p>Присоединяйтесь к миру с Chat App</p>
					<LinkContainer to="/chat">
						<Button variant="success">
							Начать <i className="fas fa-comments home-message-icon"></i>
						</Button>
					</LinkContainer>
				</div>
			</Col>
			<Col md={6} className="home-bg"></Col>
		</Row>
	);
}

export default Home;
