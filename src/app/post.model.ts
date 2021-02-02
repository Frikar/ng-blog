export interface IPost {
  id: number;
  tittle: {
    rendered: string
  };
  content: {
    rendered: string
  };
  excerpt: {
    rendered: string
  };
  date: Date;
  slug: string;
}
