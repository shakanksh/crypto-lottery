import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import {
	useContract,
	useMetamask,
	useDisconnect,
	useAddress,
	useContractMetadata,
} from "@thirdweb-dev/react";
import Login from "../components/Login";
import Loading from "../components/Loading";

const Home: NextPage = () => {
	const address = useAddress();
	const { contract, isLoading } = useContract(
		process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
	);

	/* if (isLoading) return <Loading />; */

	if (!address) return <Login />;

	return (
		<div className='bg-[#091B18] min-h-screen flex flex-col'>
			<Head>
				<title>CryptoDraw</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
		</div>
	);
};

export default Home;
