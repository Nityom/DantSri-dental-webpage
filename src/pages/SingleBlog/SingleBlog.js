 import React from 'react';
 import './SingleBlog.scss';
 import Navbar from '../../components/Navbar/Navbar';
 import { Link, useParams } from 'react-router-dom';
 import BlogData from '../../sections/Blogs/BlogData';
 import Footer from '../../sections/Footer/Footer';

 const SingleBlog = () => {
  const { url } = useParams();
  const blog = BlogData.find(blog => blog.url === url);
  const { title, img } = blog;

  return (
   <>
    <Navbar />
    <section className='section-bg pb-70 single-blog'>
     <div className="container">
      <div className="row">
       <div className="col-lg-9">
        <main className="single-blog-area">
         <p className="single-blog-category">TECHNOLOGY</p>
         <h2 className="single-blog-title">{title}</h2>
         <img className='single-blog-banner' src={img} alt="blog banner" />
         <p className="single-blog-text">The paper discusses the use of epoxy resins in construction and repair of offshore concrete structures. Typical properties of resin systems are described...</p>
         <p className='single-blog-text'>A few years ago, Bloomberg Businessweek published a feature story on Stripe...</p>
         <blockquote className='single-post-quote'>“ Proin gravida nibh vel velit auctor aliquet...”</blockquote>
         <p className="single-blog-text">The paper discusses the use of epoxy resins in construction and repair of offshore concrete structures...</p>
        </main>
       </div>

       <div className="col-lg-3">
        <div className="blog-sidebar">
         <div className="sidebar-subscribe mb-5">
          <h3 className="sidebar-heading">Get Latest Updates</h3>
          <form>
           <div className="form-group">
            <input type="email" className='form-control' placeholder='Subscribe to email' />
            <input className='btn btn-primary mt-1 w-100' type="button" value="Subscribe" />
           </div>
          </form>
         </div>

         <div className="sidebar-category mb-3">
          <h3 className="sidebar-heading">Categories</h3>
          <ul>
           <li><Link to="/">Technology</Link></li>
           <li><Link to="/">Root Canal</Link></li>
           <li><Link to="/">Teeth</Link></li>
           <li><Link to="/">Whitening</Link></li>
           <li><Link to="/">Dentures</Link></li>
          </ul>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
    <Footer />
   </>
  );
 };

 export default SingleBlog;
