type Artwork = {
  title: string;
  slug: string;
  date: Date;
  medium: string;
  size: string;
}

export const dataArtworks: Artwork[] = [
  {
    "title": "An Example",
    "slug": "an-example",
    "date": new Date("2023-01-01"),
    "medium": "Example Medium",
    "size": "10 x 10 x 10"
  },
  {
    "title": "Another Example",
    "slug": "another-example",
    "date": new Date("2023-02-02"),
    "medium": "Example Medium",
    "size": "10 x 10 x 10"
  }
]
