'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}
const Header: React.FC<HeaderProps> = (children, className) => {
	const router = useRouter();
	const handleLogout = () => {
		//handle logout logic
	};
	return (
		<div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6', className)}>
			<div className="w-full mb-4 flex justify-between items-center">
				<div className="hidden md:flex gap-x-4 items-center">
					<button
						className="bg-black flex items-center justify-center rounded-full hover:opacity-75 transition"
						onClick={() => router.back()}
					>
						<RxCaretLeft
							className="text-white"
							size={35}
						/>
					</button>
					<button
						className="bg-black flex items-center justify-center rounded-full hover:opacity-75 transition"
						onClick={() => router.forward()}
					>
						<RxCaretRight
							className="text-white"
							size={35}
						/>
					</button>
				</div>
				<div className="flex md:hidden gap-x-2 items-center">
					<button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
						<HiHome
							className="text-black"
							size={20}
						/>
					</button>
					<button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
						<BiSearch
							className="text-black"
							size={20}
						/>
					</button>
				</div>
				<div className="flex gap-x-4 items-center justify-between">
					<>
						<div>
							<Button
								onClick={() => {}}
								className="bg-transparent text-neutral-300 font-medium"
							>
								Sign Up
							</Button>
						</div>
						<div>
							<Button
								onClick={() => {}}
								className="bg-white py-2 px-6"
							>
								Log in
							</Button>
						</div>
					</>
				</div>
			</div>
		</div>
	);
};

export default Header;