import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/queries';
import Spinner from './Spinner';
import Error from './Error'
const Blog = () => {
    const {slug} = useParams();
    const {loading , data , error} = useQuery(GET_BLOG_INFO , {
        variables:{slug}
    });

    return (
        <div className="text-light" style={{paddingTop:"80px" , paddingBottom:"0.65rem"}}>
            <div className="container mt-1 p-3 pt-4" style={{backgroundColor:"rgb(32, 32, 32)" , minHeight:"75vh"}}>
                {
                    loading &&
                    <Spinner />
                }
                {
                    error &&
                    <Error />
                }
                {
                    data &&
                    <div>
                        <div className="d-flex align-items-center flex-column">
                             <p className="fs-5">{data.article.title}</p>
                             <p className="fs-15 text-warning mb-2 fw-200">نوشته شده در : {data.article.date}</p>
                             <img className="rounded" style={{width:"300px" , height:"250px"}} src={data.article.coverPhoto.url} />
                             <div className="d-flex justify-content-center pb-2 align-items-center mt-3 border-bottom w-100">
                                <div className="d-flex flex-column align-items-end me-2">
                                    <p className="mb-1">{data.article.author.name}</p>
                                    <p className="fs-13 fw-200 mb-0 text-warning ">برنامه نویس وب</p>
                                 </div>
                                 <img width="50px" className="rounded-circle" src={data.article.author.authorPhoto.url} />
                             </div>
                        </div>
                        <p className="lh-lg fs-15 fw-200 text-end pt-2" dangerouslySetInnerHTML={{__html:data.article.content.html}}>
                            
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Blog;