import POSTS from "./list_of_blogs";
import { useParams } from 'react-router-dom';
import fullImg from './assets/images/full-img.jpg';
import './blog.css';


function parseContent(post: { id: string; title: string; content: string; date: string; } | undefined): { __html: string } {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post!.content, 'text/html');
    const body = doc.body;
    const content = body.innerHTML;
    return { __html: content };
}


export default function Blog() {
    const { id } = useParams();
    console.log(`query paremter: ${id}`);
    const post = POSTS.find((post) => post.id === id);
    const parsedContent = parseContent(post);

    if (!post) {
        return <div>Blog not found</div>;
    }

    return (
      <div>
        <section className="full-post">
          <div className="container">
            <div className="row">
              <div className="blog">
                <div className="blog-post">
                  <div className="thumbnail z-depth-1 animated">
                    <img src={fullImg} alt="" className="header-content" />
                    <div className="blog-details">
                      <div className="post-title">
                        <h3>{post.title}</h3>
                      </div>
                      <div className="post-details">
                        <div className="author-name">
                          <span>Franco Gutierrez</span>
                          <span>Date: {post.date}</span>
                        </div>

                        <div className="post-content" dangerouslySetInnerHTML={parsedContent}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </section>
      </div>
    );
}