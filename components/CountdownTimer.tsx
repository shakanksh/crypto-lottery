import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import Countdown from "react-countdown";

type Props = {
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
};

function CountdownTimer() {
	const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

	const { data: expirationTime, isLoading: isLoadingExpiration } =
		useContractRead(contract, "ExpirationTime");

	const renderer = ({ hours, minutes, seconds, completed }: Props) => {
		if (completed) {
			return (
				<div>
					<h2>Draw has ended</h2>
				</div>
			);
		} else {
			return (
				<div>
					<h2>Draw ends in:</h2>
					{hours}:{minutes}:{seconds}
				</div>
			);
		}
	};

	return (
		<div>
			<Countdown date={expirationTime?.toNumber() * 1000} renderer={renderer} />
		</div>
	);
}

export default CountdownTimer;
