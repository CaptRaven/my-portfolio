// Vercel API Types
export interface VercelProject {
  id: string;
  name: string;
  framework: string | null;
  updatedAt: number;
  targets?: {
    production?: {
      url: string;
      readyState: string;
    };
  };
}

export interface VercelDeployment {
  url: string;
  readyState: string; // 'READY', 'ERROR', 'BUILDING', etc.
}

// Utility to fetch projects from Vercel
export async function getVercelProjects(): Promise<VercelProject[]> {
  const token = process.env.VERCEL_TOKEN;

  if (!token) {
    console.warn("No VERCEL_TOKEN found. Skipping Vercel API fetch.");
    return [];
  }

  try {
    const response = await fetch("https://api.vercel.com/v9/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch Vercel projects: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();
    return data.projects || [];
  } catch (error) {
    console.error("Error fetching Vercel projects:", error);
    return [];
  }
}

// Helper to get deployment URL
export function getProductionUrl(project: VercelProject): string | null {
  if (project.targets?.production?.url) {
    return `https://${project.targets.production.url}`;
  }
  return null;
}

// Helper to get ready state
export function getReadyState(project: VercelProject): string {
  return project.targets?.production?.readyState || "UNKNOWN";
}
