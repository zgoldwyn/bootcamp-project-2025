type Blog = {
  title: string
  date: string
  description: string
  image: string
  imageAlt: string
  slug: string
};
const Blogs: Blog[] = [
  {
    title: "Blog1",
    date: "Oct 7",
    description: "first blog",
    image: "screenshot1.png",
    imageAlt: "stars",
    slug: "blog1",
  },
  {
    title: "Blog2",
    date: "Oct 7",
    description: "second blog",
    image: "screenshot1.png",
    imageAlt: "also stars",
    slug: "blog2",
  },
];

const blogContainer = document.getElementById("blog-container");

Blogs.forEach((blog => {
  const blogdiv = document.createElement("div");
  blogdiv.classList.add("blog");
  
  const title = document.createElement("h1");
  title.classList.add("blog-title");
  title.textContent = blog.title;
  
  const date = document.createElement("h2");
  date.classList.add("blog-date");
  date.textContent = blog.date;

  const description = document.createElement("p");
  description.classList.add("blog-description");
  description.textContent = blog.description;

  const image = document.createElement("img");
  image.classList.add("blog-image");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  
  const content = document.createElement("div");
  content.classList.add("blog-content");
  content.append(title, date, description);

  blogdiv.append(content, image);

  // create link for blog
  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`;
  link.classList.add("blog-link");

  // Wrap the blog div inside the link
  link.append(blogdiv);

  // Append the link to the container
  blogContainer?.append(link);

}))