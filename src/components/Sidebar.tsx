'use client';
import Link from "next/link"; // Changed this import
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Sidebar = () => {

	return (
		<aside
			className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass'
		>
			<nav className='h-full flex flex-col gap-3'>
				<Link href='/github' className='flex justify-center'>
					<img className='h-8' src='/github.svg' alt='Github Logo' />
				</Link>

				<Link
					href='/github'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
				>
					<IoHomeSharp size={20} />
				</Link>

				
					<Link
						href='/github/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
					</Link>
			
				

					<Link
						href='/github/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						{/* Changed icon for login */}
						{/* Replace with your desired login icon */}
						<FaSignInAlt size={25} />
					</Link>
			

					<Link
						href='/github/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaUserPlus size={25} />
					</Link>
			

					<div className='flex flex-col gap-2 mt-auto'>
					</div>
			</nav>
		</aside>
	);
};
export default Sidebar;
