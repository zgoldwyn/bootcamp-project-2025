var Blogs = [
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
var blogContainer = document.getElementById("blog-container");
Blogs.forEach((function (blog) {
    var blogdiv = document.createElement("div");
    blogdiv.classList.add("blog");
    var title = document.createElement("h1");
    title.classList.add("blog-title");
    title.textContent = blog.title;
    var date = document.createElement("h2");
    date.classList.add("blog-date");
    date.textContent = blog.date;
    var description = document.createElement("p");
    description.classList.add("blog-description");
    description.textContent = blog.description;
    var image = document.createElement("img");
    image.classList.add("blog-image");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var content = document.createElement("div");
    content.classList.add("blog-content");
    content.append(title, date, description);
    blogdiv.append(content, image);
    // create link for blog
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.classList.add("blog-link");
    // Wrap the blog div inside the link
    link.append(blogdiv);
    // Append the link to the container
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(link);
}));
