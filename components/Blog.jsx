import Image from 'next/image';

function Blog({ url, postImageSrc, title, description, authorName }) {
  return (
    <div className="post-container">
      <a className="post" href={url}>
        <Image height={256} width={256} className="post-image" src={postImageSrc}/>
        <div className="pl-8 pr-5">
            <h2 className="post-title hover:text-purple-500 mt-5">{title}</h2>
            <p className="mt-4 text-sm font-semibold text-gray-600 leading-relaxed">{description}</p>
            <div className="mt-8 flex items-center">
                <div className="text-xs text-gray-600">
                    <div className="text-gray-700 text-sm font-semibold mt-2 mb-5">{authorName}</div>
                </div>
            </div>
            <div className="flex justify-between mb-5">
                <button className="py-3 px-6 text-white rounded-lg bg-yellow-500 shadow-lg block md:inline-block">Edit</button> 
                <button className="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block">Delete</button> 
            </div>
            
        </div>
      </a>
    </div>
  );
}

export default Blog;
