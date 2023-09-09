import { Button } from '@/components/Button'
import Image from 'next/image'
import Benefit from '@/components/Benefit';
import dataBenefit from '../data/dataBenefit.json';
import dataFAQ from '../data/dataFAQ.json';
import dataPartner from '../data/dataPartner.json';
import FAQ from '@/components/FAQ';
import Partner from '@/components/Partner';
import CTA from '@/components/CTA';
// TODO:
//  

export default function Home() {
	return (
		// <main className="flex min-h-nscreen flex-col items-center justify-between p-24">
		//   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
		//       Get started by editing&nbsp;
		//       <code className="font-mono font-bold">src/app/page.tsx</code>
		//     </p>
		//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
		//       <a
		//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
		//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         By{' '}
		//         <Image
		//           src="/vercel.svg"
		//           alt="Vercel Logo"
		//           className="dark:invert"
		//           width={100}
		//           height={24}
		//           priority
		//         />
		//       </a>
		//     </div>
		//   </div>

		//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
		//     <Image
		//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
		//       src="/next.svg"
		//       alt="Next.js Logo"
		//       width={180}
		//       height={37}
		//       priority
		//     />
		//   </div>

		//   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
		//     <a
		//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2 className={`mb-3 text-2xl font-semibold`}>
		//         Docs{' '}
		//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		//           -&gt;
		//         </span>
		//       </h2>
		//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		//         Find in-depth information about Next.js features and API.
		//       </p>
		//     </a>

		//     <a
		//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2 className={`mb-3 text-2xl font-semibold`}>
		//         Learn{' '}
		//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		//           -&gt;
		//         </span>
		//       </h2>
		//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		//         Learn about Next.js in an interactive course with&nbsp;quizzes!
		//       </p>
		//     </a>

		//     <a
		//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2 className={`mb-3 text-2xl font-semibold`}>
		//         Templates{' '}
		//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		//           -&gt;
		//         </span>
		//       </h2>
		//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		//         Explore the Next.js 13 playground.
		//       </p>
		//     </a>

		//     <a
		//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2 className={`mb-3 text-2xl font-semibold`}>
		//         Deploy{' '}
		//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		//           -&gt;
		//         </span>
		//       </h2>
		//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
		//         Instantly deploy your Next.js site to a shareable URL with Vercel.
		//       </p>
		//     </a>
		//   </div>
		// </main>
		<main className='container min-w-full bg-[#0A090F]'>

			{/* BANNER */}
			<section className='bgjumbotron grid gap-6 px-6 py-16 h-screen min-h-full md:px-12 lg:grid-cols-2 lg:px-32 lg:py-0 lg:min-h-screen lg:gap-12'>
				<div className='text-center grid gap-6 content-center order-last lg:order-1 lg:text-start'>
					<h1><span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>OrbitDebt</span> AI</h1>
					<p>Temukan Kemampuan Pinjaman Anda: Solusi Pelunasan Strategis yang Dirancang sesuai Kelayakan Finansial Anda.</p>
					<Button />
				</div>
				<div className='grid justify-center content-center w-full h-full lg:order-1'>
					{/* <Image
						src="/assets/images/banner.gif"
						alt="OrbitDebt Banner"
						className="min-w-full h-auto"
						width={1468}
						height={1268}
						quality={100}
						priority
					/> */}
					<Image
						src="/assets/images/banner.png"
						alt="OrbitDebt Banner"
						className="min-w-full h-auto"
						width={1468}
						height={1268}
						quality={100}
						priority
					/>
				</div>
			</section>

			{/* PARTNER */}
			<section className="w-full grid border-y border-[#353539] h-full">
				<div className='md:hidden'>
					<Partner />
				</div>
				<div className='hidden md:flex gap-6 justify-center'>
					{dataPartner.map((data, key) => {
						return (
							<a key={key} className='py-8' target='_blank' href={data.link}>
								<Image
									className='mx-4 self-center transition duration-150 ease-in-out grayscale hover:grayscale-0'
									src={data.img}
									width={data.width}
									height={data.height}
									alt="partner OrbitDebt"
									quality={100}
									priority
									sizes='100%'
								/>
							</a>
						)
					})}

				</div>
			</section>

			{/* ABOUT */}
			<section className='grid gap-6 px-6 py-12 md:py-20 md:px-12 md:gap-12 lg:grid-cols-2 lg:px-32 lg:py-28'>
				<div className='text-center grid gap-6 content-center order-last md:order-1 lg:text-start'>
					<h2>Kenapa <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>OrbitDebt</span>?</h2>
					<p>
						Dengan memanfaatkan teknologi kecerdasan buatan, OrbitDebt memungkinkan pengguna melakukan pengecekan kelayakan peminjaman secara cermat.
						<br /><br />
						Fitur utama kami membantu Anda menghindari tunggakan biaya pinjaman dengan memperkirakan anggaran keuangan pengguna. Dengan ini, OrbitDebt menjadikan pengelolaan pinjaman lebih terkendali dan berkelanjutan, memberikan Anda rasa yakin dalam perencanaan strategi pelunasan pinjaman yang efektif.
					</p>
				</div>
				<div className='grid justify-center content-center h-full md:order-1'>
					<Image
						src="/assets/images/about.png"
						alt="About OrbitDebt"
						className="h-auto min-w-full"
						width={1468}
						height={1268}
						quality={100}
						priority
					/>
					{/* <Image
						src="/assets/images/about.gif"
						alt="About OrbitDebt"
						className="h-auto min-w-full"
						width={1468}
						height={1268}
						quality={100}
						priority
					/> */}
				</div>
			</section>

			{/* BENEFITS */}
			<section className='grid gap-6 px-6 py-12 md:py-20 md:px-12 lg:px-32 lg:py-28 lg:gap-12'>
				<div className='grid gap-4 justify-center text-center lg:gap-6'>
					<h2>Tingkatkan <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>perencanaan</span> Anda</h2>
					<p className='max-w-3xl'>Tingkatkan perencanaan pengambilan utang. Buat pandangan jelas tentang langkah-langkah pembayaran dengan AI</p>
				</div>


				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-12'>
					{dataBenefit.map((data, key) => {
						return (
							<Benefit key={key} title={data.title} description={data.description} icon={data.icon} />
						)
					})}
				</div>
			</section>

			{/* USER JOURNEY */}
			<section>

			</section>

			{/* FAQ */}
			<section className='grid gap-6 px-6 py-12 md:py-20 md:px-12 lg:px-32 lg:py-28'>
				<div className='grid gap-4 text-center'>
					<h2>Frequently Asked Question</h2>
					<p>Semua yang anda perlu tahu mengenai produk. Tidak menemukan jawaban? <a className='hover:underline text-blue-600' href="mailto:orbit.smkn4bdg@gmail.com" target='_blank'>Hubungi kami</a>.</p>
				</div>

				<div className='grid gap-4'>
					{dataFAQ.map((data, key) => {
						return (
							<FAQ key={key} title={data.title} description={data.description} />
						)
					})}
				</div>
			</section>


			<section className='grid py-12 px-6 md:py-20 md:px-12 lg:px-32'>
				<CTA />
			</section>
		</main>

	)
}
