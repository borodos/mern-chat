import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Sidebar() {
	const rooms = ["Комната №1", "Комната №2", "Комната №3"];
	return (
		<>
			<h2>Доступные комнаты</h2>
			<ListGroup>
				{rooms.map((value, index, array) => (
					<ListGroupItem key={index}>{value}</ListGroupItem>
				))}
			</ListGroup>
			<h2>Участники</h2>
		</>
	);
}

export default Sidebar;
