import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Signup.css";
import defaultImg from "../img/pngwing.com.png";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	// -- Image upload states
	const [image, setImage] = useState(null);
	const [uploadingImg, setUploadingImg] = useState(false);
	const [imgPreview, setImgPreview] = useState(null);

	const validateImg = (e) => {
		const file = e.target.files[0];
		setImage(file);
		setImgPreview(URL.createObjectURL(file));
	};

	const uploadImage = async () => {
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "gryo01tc");
		try {
			setUploadingImg(true);
			let res = await fetch(
				"https://api.cloudinary.com/v1_1/dfgwwkjqz/image/upload",
				{
					method: "POST",
					body: data,
				}
			);
			const urlData = await res.json();
			setUploadingImg(false);
			return urlData.url;
		} catch (error) {
			setUploadingImg(false);
			console.log(error);
		}
	};

	const handleSignup = async (e) => {
		e.preventDefault();
		if (!image) return alert("Загрузите фото!");
		const url = await uploadImage(image);
		console.log(url);
	};

	return (
		<Container>
			<Row>
				<Col
					md={7}
					className="d-flex flex-direction-column align-items-center justify-content-center"
				>
					<Form style={{ width: "70%" }} onSubmit={handleSignup}>
						<h1 className="text-center">Создайте аккаунт</h1>
						<div className="signup-profile-pic-container">
							<img
								src={imgPreview || defaultImg}
								className="signup-profile-pic"
								alt="Logo"
							/>
							<label htmlFor="image-upload" className="image-upload-label">
								<i className="fas fa-plus-circle add-picture-icon"></i>
							</label>
							<input
								type="file"
								id="image-upload"
								hidden
								accept="image/png, image/jpeg, image/jpg"
								onChange={validateImg}
							/>
						</div>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>Имя</Form.Label>
							<Form.Control
								type="text"
								placeholder="Введите имя"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

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
							{uploadingImg ? (
								<Spinner animation="border" role="status"></Spinner>
							) : (
								"Зарегистрироваться"
							)}
						</Button>
						<div className="py-4">
							<p className="text-center">
								Есть аккаунт? <Link to="/login">Авторизуйся</Link>
							</p>
						</div>
					</Form>
				</Col>
				<Col md={5} className="signup-bg"></Col>
			</Row>
		</Container>
	);
}

export default Signup;
