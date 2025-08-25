export default function Koukoku({ className }: { className?: string }): React.ReactNode {
	return (
		<div className={`max-w-sm w-full aspect-[3/2] bg-stone-200 ${className}`}>
			<div className="cursor-pointer w-full h-full flex flex-col justify-center items-center text-stone-400">
				<div className="select-none">
					<h2>場所取り用</h2>
				</div>
			</div>
		</div>
	)
}
