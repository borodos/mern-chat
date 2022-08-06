import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../css/MessageForm.css";

function MessageForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="messages-output"></div>

			<Form onSubmit={handleSubmit}>
				<Row>
					<Col md={11}>
						<Form.Group>
							<Form.Control type="text" placeholder="Введите сообщение" />
						</Form.Group>
					</Col>
					<Col md={1}>
						<Button
							variant="primary"
							type="submit"
							style={{ width: "100%", backgroundColor: "orange" }}
						>
							<i className="fas fa-paper-plane" />
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}

export default MessageForm;
