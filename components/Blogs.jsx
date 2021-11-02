import Blog from "../components/Blog";

const posts = [
  {
    postImageSrc:
      "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    authorImageSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.95&w=512&h=512&q=80",
    title: "Enjoying the beach life while on a vacation",
    description:
      "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
    authorName: "Adam Cuppy",
    authorProfile: "Vlogger",
    url: "https://reddit.com",
    featured: true,
  },
  {
    postImageSrc:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    title: "Getting the most out of your vacation",
    description:
      "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
    authorName: "Aaron Patterson",
    url: "https://reddit.com",
  },
  {
    postImageSrc:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    title: "Choosing the perfect Safaris in Africa",
    description:
      "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
    authorName: "Sam Phipphen",
    url: "https://reddit.com",
  },
  {
    postImageSrc:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    title: "Hiking during the monsoon in Asia",
    description:
      "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
    authorName: "Tony Hawk",
    url: "https://timerse.com",
  },
  {
    postImageSrc:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    title: "Must carry items while travelling to Thailand",
    description:
      "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
    authorName: "Himali Turn",
    url: "https://timerse.com",
  },
];

function Blogs() {
  return (
    <div className="container-base">
      <div className="contentWithPaddingXL">
        <div className="heading-container">
          <div className="section-heading">Dashboard</div>
        </div>
        <div className="posts">
          {posts.map((post, index) => (
            <Blog
              key={index}
              postImageSrc={post.postImageSrc}
              title={post.title}
              url={post.url}
              description={post.description}
              featured={post.featured}
              authorProfile={post.authorProfile}
              authorImageSrc={post.authorImageSrc}
              authorName={post.authorName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
