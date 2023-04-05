import { Footer, Header } from "@/components";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { db } from "../../../lib/db";

export async function getServerSideProps(context) {
  const { id, postId } = context.query;
  const data = await db.post.findMany({
    where: { id: postId },
    include: { comments: true },
  });

  const post: typeof data = JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    })
  );
  return {
    props: {
      post: post[0],
    },
  };
}

interface BlogPostProps {
  //FIXME: fix any type
  post: any;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log({ post });
  return (
    <>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="blog-detail-ct">
                <h1>{post.title}</h1>
                <span className="time">{post.date}</span>
                <img src="images/uploads/blog-detail.jpg" alt="" />
                <p>{post.content}</p>
                <div className="comments">
                  <h4>04 Comments</h4>
                  <div className="cmt-item flex-it">
                    <img src="images/uploads/author.png" alt="" />
                    <div className="author-infor">
                      <div className="flex-it2">
                        <h6>
                          <a href="#">Steve Perry</a>
                        </h6>{" "}
                        <span className="time"> - 27 Mar 2017</span>
                      </div>
                      <p>
                        Even though Journeys classNameic vocalist Steve Perry
                        didn’t reunite with the band during their Rock Hall
                        performance (to the dismay of hopeful fans), he did
                        offer up a touching speech.
                      </p>
                      <p>
                        <a className="rep-btn" href="#">
                          + Reply
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="cmt-item flex-it reply">
                    <img src="images/uploads/author2.png" alt="" />
                    <div className="author-infor">
                      <div className="flex-it2">
                        <h6>
                          <a href="#">Joss Whedon</a>
                        </h6>{" "}
                        <span className="time"> - 27 Mar 2017</span>
                      </div>
                      <p>
                        Prince died not long after the 2016 Rock Hall ceremony,
                        so this years edition featured Lenny Kravitz and a full
                        gospel choir performing a swamp-funk take on When Doves
                        Cry.
                      </p>
                    </div>
                  </div>
                  <div className="cmt-item flex-it reply">
                    <img src="images/uploads/author3.png" alt="" />
                    <div className="author-infor">
                      <div className="flex-it2">
                        <h6>
                          <a href="#">Dave McNary</a>
                        </h6>{" "}
                        <span className="time"> - 27 Mar 2017</span>
                      </div>
                      <p>
                        Blue Sky Studios is one of the world’s leading digital
                        animation movie studios and we are proud of their
                        commitment to stay and grow in Connecticut.
                      </p>
                    </div>
                  </div>
                  <div className="cmt-item flex-it">
                    <img src="images/uploads/author4.png" alt="" />
                    <div className="author-infor">
                      <div className="flex-it2">
                        <h6>
                          <a href="#">Margot Robbie</a>
                        </h6>{" "}
                        <span className="time"> - 27 Mar 2017</span>
                      </div>
                      <p>
                        Joan Baez was the sharpest of the Rock Hall inductees,
                        singing about deportees and talking social activism as
                        well as joking about her age and the likelihood that a
                        good portion of the Barclays.{" "}
                      </p>
                      <p>
                        <a className="rep-btn" href="#">
                          + Reply
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <h4>Leave a comment</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-4">
                        <input type="text" placeholder="Your name" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" placeholder="Your email" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          name="message"
                          id=""
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <input
                      className="submit"
                      type="submit"
                      placeholder="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="sb-search sb-it">
                  <h4 className="sb-title">Search</h4>
                  <input type="text" placeholder="Enter keywords" />
                </div>
                <div className="sb-cate sb-it">
                  <h4 className="sb-title">Categories</h4>
                  <ul>
                    <li>
                      <a href="#">Awards (50)</a>
                    </li>
                    <li>
                      <a href="#">Box office (38)</a>
                    </li>
                    <li>
                      <a href="#">Film reviews (72)</a>
                    </li>
                    <li>
                      <a href="#">News (45)</a>
                    </li>
                    <li>
                      <a href="#">Global (06)</a>
                    </li>
                  </ul>
                </div>
                <div className="sb-recentpost sb-it">
                  <h4 className="sb-title">most popular</h4>
                  <div className="recent-item">
                    <span>01</span>
                    <h6>
                      <a href="#">
                        Korea Box Office: Beauty and the Beast Wins Fourth
                      </a>
                    </h6>
                  </div>
                  <div className="recent-item">
                    <span>02</span>
                    <h6>
                      <a href="#">Homeland Finale Includes Shocking Death </a>
                    </h6>
                  </div>
                  <div className="recent-item">
                    <span>03</span>
                    <h6>
                      <a href="#">
                        Fate of the Furious Reviews What the Critics Saying
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="sb-tags sb-it">
                  <h4 className="sb-title">tags</h4>
                  <ul className="tag-items">
                    <li>
                      <a href="#">Batman</a>
                    </li>
                    <li>
                      <a href="#">film</a>
                    </li>
                    <li>
                      <a href="#">homeland</a>
                    </li>
                    <li>
                      <a href="#">Fast & Furious</a>
                    </li>
                    <li>
                      <a href="#">Dead Walker</a>
                    </li>
                    <li>
                      <a href="#">King</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
