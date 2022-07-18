import React from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { HomePage } from "./pages/Home";
import { OrderPage } from "./pages/Order";
import { OrderSuccessPage } from "./pages/OrderSuccess";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/order" element={<OrderPage />} />
				<Route path="/order-success" element={<OrderSuccessPage />} />
			</Route>
		</Routes>
	);
}