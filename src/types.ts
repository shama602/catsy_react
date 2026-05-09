export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
}

export interface Cat {
  id: string;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  tags: string[];
  status: "available" | "adopted" | "pending";
}

export interface AdoptionRequest {
  catId: string;
  catName: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  message: string;
  status: "pending" | "approved" | "rejected";
  createdAt: any; // serverTimestamp
}
