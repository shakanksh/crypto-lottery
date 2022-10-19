import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React from "react";

function PriceBox() {
	const [quantity, setQuantity] = React.useState<number>(1);

	const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
	const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
	const { data: expiration } = useContractRead(contract, "expiration");
	const { data: remainingTickets } = useContractRead(
		contract,
		"Remaining Tickets"
	);

	const { data: ticketCommission } = useContractRead(
		contract,
		"ticketCommission"
	);

	return (
		<div className='stats-container space-y-2'>
			<div className='stats-container'>
				<div className='flex justify-between items-center text-white pb-2'>
					<h2 className=''>Price Per Ticket</h2>
					<p>
						{ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}
						MATIC
					</p>
				</div>
				<div className='flex text-white items-center p-4 space-x-2 bg-[#091B18] border-[#004337] border'>
					<p>TICKETS</p>
					<input
						className='flex w-full bg-transparent text-right outline-none'
						type='number'
						min={1}
						max={10}
						value={quantity}
						onChange={(e) => setQuantity(Number(e.target.value))}
					/>
				</div>

				<div className='space-y-2 mt-5'>
					<div className='flex items-center justify-between text-emerald-300 text-sm font-extrabold italic'>
						<p>Total Costs Of Tickets</p>
						<p>
							{ticketPrice &&
								Number(ethers.utils.formatEther(ticketPrice.toString())) *
									quantity}{" "}
							MATIC
						</p>
					</div>

					<div className='flex items-center justify-between text-emerald-300 text-xs italic'>
						<p>Service Fee</p>
						<p>
							{ticketCommission &&
								ethers.utils.formatEther(ticketCommission.toString())}{" "}
							MATIC
						</p>
					</div>

					<div className='flex items-center justify-between text-emerald-300 text-xs italic'>
						<p>+ Network Fees</p>
						<p>TBC</p>
					</div>
				</div>

				<button
					disabled={
						(expiration && expiration.toNumber() < Date.now()) ||
						remainingTickets?.toNumber() === 0
					}
					className='mt-5 bg-emerald-500 w-full px-10 py-5 text-white rounded-md hover:bg-emerald-600 shadow-xl disabled:bg-slate-500 disabled:cursor-not-allowed'>
					Buy Tickets
				</button>
			</div>
		</div>
	);
}

export default PriceBox;
