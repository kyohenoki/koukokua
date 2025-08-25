import { tasu } from 'koukokua'

export default function Home() {
	const kotae = tasu(10, 20).toString()
	return (
		<div className="antialiased p-5 w-full flex justify-center">
			<div className="max-w-3xl w-full flex flex-col">
				<h1 className="text-[1.35rem]">実験場</h1>
				<h1 className="text-[1.35rem] text-stone-500">{kotae}</h1>
			</div>
		</div>
	)
}
