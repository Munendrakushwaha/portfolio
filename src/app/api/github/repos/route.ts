export async function GET() {  
  const response = await fetch('https://api.github.com/users/Munendrakushwaha/repos', {
    headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',

    }
});  
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  

  