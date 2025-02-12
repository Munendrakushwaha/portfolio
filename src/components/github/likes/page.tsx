"use client";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { formatDate } from "@/utils/functions";
import Image from 'next/image';

const LikesPage = () => {
	const [likes, setLikes] = useState([]);
	useEffect(() => {
		const fetchLikes = async () => {
			const response = await fetch("/api/github/likes");
			const data = await response.json();
			setLikes(data);
		};
		fetchLikes();
	}, []);
	return (
		<div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='min-w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
				<thead className='text-xs uppercase bg-glass'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Username
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{likes.map((user: { username: string; avatarUrl: string; likedDate: string }, idx) => (
						<tr className='bg-glass border-b' key={user.username}>
							<td className='w-4 p-4'>
								<div className='flex items-center'>
									<span>{idx + 1}</span>
								</div>
							</td>
							<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
								<Image className='w-10 h-10 rounded-full' src={user.avatarUrl} alt='User Avatar' width={40} height={40} />
								<div className='ps-3'>
									<div className='text-base font-semibold'>{user.username}</div>
								</div>
							</th>
							<td className='px-6 py-4'>{formatDate(user.likedDate)}</td>
							<td className='px-6 py-4'>
								<div className='flex items-center'>
									<FaHeart size={22} className='text-red-500 mx-2' />
									Liked your profile
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default LikesPage;
