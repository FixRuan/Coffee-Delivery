import React from "react";

import { OrderForm } from "./components/OrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { Container } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export enum PaymentMethod {
	credit = "credit",
	debit = "debit",
	money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
	cep: zod.string().min(1, "Informe o CEP"),
	street: zod.string().min(1, "Informe a rua"),
	number: zod.string().min(1, "Informe o número"),
	complement: zod.string(),
	neighborhood: zod.string().min(1, "Informe o bairro"),
	city: zod.string().min(1, "Informe a cidade"),
	uf: zod.string().min(1, "Informe o estado"),
	paymentMethod: zod.nativeEnum(PaymentMethod, {
		errorMap: () => {
			return { message: "Informe o método de pagamento" };
		}
	}),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

export function OrderPage() {

	const navigate = useNavigate();
	const { clearCart } = useCart();

	const confimOrderForm = useForm<ConfirmOrderFormData>({
		resolver: zodResolver(confirmOrderFormValidationSchema),
	});

	const { handleSubmit } = confimOrderForm;

	function handleConfirmOrder(data: ConfirmOrderFormData) {
		navigate("/order-success", {
			state: data
		});

		clearCart();
	}

	return (
		<FormProvider {...confimOrderForm}>
			<Container className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
				<OrderForm />
				<SelectedCoffees />
			</Container>
		</FormProvider>
	);
}