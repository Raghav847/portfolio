"use server";

import { siteConfig } from "@/config/site";

export async function getGitHubStatsServerAction() {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add GitHub token if available
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${siteConfig.links.githubUsername}`,
      { headers }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return {
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      company: data.company,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      hireable: data.hireable,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to get GitHub stats",
    };
  }
}
