import { NextResponse } from "next/server";
import { getFeaturedGitHubProjects } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  try {
    const payload = await getFeaturedGitHubProjects();
    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error("Failed to sync GitHub projects:", error);
    return NextResponse.json(
      {
        projects: [],
        errors: ["Unexpected error while syncing GitHub repositories."],
      },
      { status: 500 }
    );
  }
}
