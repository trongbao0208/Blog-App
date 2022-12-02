import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts =[
    {
      id: 1,
      title: "Test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur molestiae quas voluptas porro nesciunt eum nihil maxime soluta, ullam maiores sit tenetur. Atque facilis numquam non exercitationem a dicta.",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur molestiae quas voluptas porro nesciunt eum nihil maxime soluta, ullam maiores sit tenetur. Atque facilis numquam non exercitationem a dicta.",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur molestiae quas voluptas porro nesciunt eum nihil maxime soluta, ullam maiores sit tenetur. Atque facilis numquam non exercitationem a dicta.",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      title: "Test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur molestiae quas voluptas porro nesciunt eum nihil maxime soluta, ullam maiores sit tenetur. Atque facilis numquam non exercitationem a dicta.",
      img: "https://via.placeholder.com/150"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={posts.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home