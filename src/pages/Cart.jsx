import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
`;
const Details = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-self: center;
`;
const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;
const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
	font-weight: 200;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(1)</TopText>
						<TopText>Tour Wishlist(3)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetails>
								<Image src="data:image/jpeg;base64,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" />
								<Details>
									<ProductName>
										<b>Product:</b> shoes
									</ProductName>
									<ProductId>
										<b>ID:</b>123213213
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size</b>42
									</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>30$</ProductPrice>
							</PriceDetails>
						</Product>
						<Hr />
						<Product>
							<ProductDetails>
								<Image src="data:image/jpeg;base64,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" />
								<Details>
									<ProductName>
										<b>Product:</b> shoes
									</ProductName>
									<ProductId>
										<b>ID:</b>123213213
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size</b>42
									</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>30$</ProductPrice>
							</PriceDetails>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Order summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>SubTotal</SummaryItemText>
							<SummaryItemPrice>80$</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated shipping</SummaryItemText>
							<SummaryItemPrice>1$</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total Price</SummaryItemText>
							<SummaryItemPrice>81$</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
