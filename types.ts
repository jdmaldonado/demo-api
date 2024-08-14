interface Review {
  rating: string;
  comment?: string | null;
  author: string;
}

interface ProjectReview {
  id: string;
  projectName: string;
  description: string;
  implemented?: boolean;
  reivew?: Review | null;
}
