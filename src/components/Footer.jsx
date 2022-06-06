import {
	Facebook,
	Instagram,
	Mail,
	Phone,
	Room,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
	margin: 20px 0;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-content: center;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Bar.</Logo>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
					culpa provident dolores debitis, vel alias quo deserunt id neque
					doloribus ad, ex commodi labore incidunt? Facilis doloribus deserunt
					debitis.
				</Description>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>WIshlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} />
					1367 Pride Avenue,Elmhurst 11373{" "}
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} />
					718-335-3640
				</ContactItem>
				<ContactItem>
					<Mail style={{ marginRight: "10px" }} />
					contact@email.com
				</ContactItem>
			</Right>
		</Container>
	);
};

export default Footer;
