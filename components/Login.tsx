import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

function Login() {
	const connectWithMetamask = useMetamask();

	return (
		<div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
			<div className='flex flex-col items-center mb-10'>
				<img
					className='rounded-full h-56 w-56 mb-10'
					src='https://i.imgur.com/4h7mAu7.png'
					alt='Logo'
				/>
				<h1 className='text-6xl text-white font-bold'>The CryptoDraw</h1>
				<h2 className='text-white mt-5'>
					Get Started By Logging In With MetaMask
				</h2>

				<button
					onClick={connectWithMetamask}
					className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'>
					Login With MetaMask
				</button>
			</div>
		</div>
	);
}

export default Login;
