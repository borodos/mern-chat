import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<Row>
				<Col md={5} className="login-bg"></Col>
				<Col
					md={7}
					className="d-flex flex-direction-column align-items-center justify-content-center"
				>
					<Form style={{ width: "70%" }} onSubmit={handleLogin}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email почта</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder="Введите email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder="Пароль"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Войти
						</Button>
						<div className="py-4">
							<p className="text-center">
								Нет аккаунта? <Link to="/signup">Зарегистрируйся</Link>
							</p>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Login;
