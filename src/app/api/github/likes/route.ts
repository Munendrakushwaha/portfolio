import { NextResponse } from "next/server";

export async function GET() {
	const likes = [
        { username: "Aarav Sharma", avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg", likedDate: "2023-10-01" },
        { username: "Vivaan Patel", avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg", likedDate: "2023-10-02" },
        { username: "Reyansh Gupta", avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg", likedDate: "2023-10-03" },
        { username: "Anaya Singh", avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg", likedDate: "2023-10-04" },
        { username: "Ishaan Verma", avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg", likedDate: "2023-10-05" },
        { username: "Diya Mehta", avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg", likedDate: "2023-10-06" },
        { username: "Kabir Joshi", avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg", likedDate: "2023-10-07" },
        { username: "Saanvi Rao", avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg", likedDate: "2023-10-08" },
        { username: "Arjun Nair", avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg", likedDate: "2023-10-09" },
        { username: "Pooja Reddy", avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg", likedDate: "2023-10-10" },
    ];
	return NextResponse.json(likes);
}
