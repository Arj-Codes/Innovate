import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
    },
    {
      id: 2,
      title: "Blog 2",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
    },
    {
      id: 1,
      title: "Blog 3",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
    },
  ];
  return (
    <div id="Blog">
      <div className="page__title text-4xl sm:text-6xl font-bold font- text-white flex justify-center mt-2 mb-10">
        <h1>Our stories -</h1>
      </div>
      <div className="container flex flex-wrap justify-around hover:cursor-pointer">
        {blogs.map((b) => (
          <div className="blogs items-center text-white border-1 rounded-lg p-[1.5rem] m-5 flex flex-col justify-around h-[65vh]">
            <img
              src="./blog.jpg"
              alt=""
              className="w-[20rem]"
            />
            <div className="title font-bold text-3xl">{b.title}</div>
            <div className="text font-semibold sm:w-[30vw]">{b.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
