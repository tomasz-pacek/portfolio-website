type GithubRepoResponse = {
  total_count: number;
  items: GithubRepo[];
};

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
};
