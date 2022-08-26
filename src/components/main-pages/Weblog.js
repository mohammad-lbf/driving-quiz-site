import React , {useEffect} from 'react';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import Spinner from '../shared/Spinner';
import Error from '../shared/Error';
import BlogCard from '../shared/BlogCard';

const Weblog = () => {
    useEffect(()=>{
        scrollTop()
    } , [])
        const scrollTop = ()=>{
            window.scrollTo({
                top:-100,
                left:-100,
                behavior:'smooth'
            })
        }
    const {loading , data , error} = useQuery(GET_BLOGS_INFO)
    return (
        <div className="text-light" style={{paddingTop:"80px" , paddingBottom:"0.65rem"}}>
            <div className="container mt-1 p-3 pt-4" style={{backgroundColor:"rgb(32, 32, 32)" , minHeight:"75vh"}}>
                    <div className="border-bottom text-center">
                    <h3 className="w-100 text-center">
                        مقالات رانندگی
                    </h3>
                    <p className="fs-15 mt-3 text-warning">جدیدترین مقالات درباره راهنمایی و رانندگی</p>
                    </div>
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
                        <div className="row text-center flex-row-reverse justify-content-start mt-2">
                            {data.articles.map(item => <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center">
                                <BlogCard {...item} />
                            </div>)}
                        </div>
                    }  
            </div>
        </div>
    );
};

export default Weblog;