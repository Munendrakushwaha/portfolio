import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("https://api.github.com/users/Munendrakushwaha");
    const data = await response.json();
    return NextResponse.json(data);
}
