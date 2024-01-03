import React from "react";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "The Latest Trends in Fashion",
      author: "John Doe",
      date: "June 10, 2024",
      image: "/blog/fashion-trends.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Tips for Healthy Living",
      author: "Jane Smith",
      date: "June 5, 2024",
      image: "/blog/healthy-living.jpg",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Tech Innovations You Should Know",
      author: "Alex Johnson",
      date: "June 1, 2024",
      image: "/blog/tech-innovations.jpg",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className='container mx-auto my-8 p-8'>
      <h2 className='text-3xl font-bold mb-6'>Blog</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogData.map((blog) => (
          <div key={blog.id} className='bg-white p-6 rounded-md shadow-md'>
            <img
              src={blog.image}
              alt={blog.title}
              className='w-full h-auto rounded-md mb-4'
            />
            <p className='text-gray-800 font-semibold text-lg mb-2'>
              {blog.title}
            </p>
            <p className='text-gray-500 mb-2'>{`By ${blog.author} | ${blog.date}`}</p>
            <p className='text-gray-600'>{blog.content}</p>
            <a
              href='#'
              className='text-blue-500 hover:underline mt-4 inline-block'
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
