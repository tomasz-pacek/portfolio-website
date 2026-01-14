import { cacheLife } from "next/cache";
const GITHUB_API_URL =
  "https://api.github.com/search/repositories?q=user:tomasz-pacek+topic:portfolio";

export default async function ProjectsPage() {
  const getGithubProjects = async () => {
    "use cache";
    cacheLife("hours");
    const response = await fetch(GITHUB_API_URL);
    const data = await response.json();
    return data;
  };

  const projects = await getGithubProjects();
  console.log(projects);

  return (
    <div
      id="projects"
      className="flex h-screen items-start justify-center bg-zinc-900"
    >
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
}
