import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";

export async function GET() {
  const username = siteConfig.links.githubUsername;
  const url = `https://api.github.com/users/${username}`;

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add GitHub token if available
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(
      {
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        company: data.company,
        bio: data.bio,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
