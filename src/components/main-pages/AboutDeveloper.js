import React , {useEffect} from 'react';

const AboutDeveloper = () => {
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
    return (
        <div style={{paddingTop:"85px" , paddingBottom:"0.65rem" , backgroundColor:"rgb(20, 20, 20)" }}>
            <div className="text-white container p-3 rounded" style={{border:"1px solid rgb(48, 48, 48)" , backgroundColor:"rgb(32, 32, 32)" , minHeight:"75vh"}}>
            <div>
                <p className="lh-lg text-end text-end fs-13 fs-sm-15 ">
                : مشخصات طراح و توسعه دهنده پروژه
                <br />
                <br />
                نام و نام خانوادگی : محمد لبافی
                <br />
                <br />
                : مهارت ها
                <br />
                </p>
                <p className="lh-lg mt-2 text-start fs-13 fs-sm-15 ">
                HTML & CSS
                    <br/>
                    Java Script (ES 6)
                    <br />
                    bootstrap 5
                    <br />
                    SASS
                    <br />
                    Git & Git hub
                    <br />
                    React js (React hooks & functional)
                    <br/>
                    react router dom (SPA site)
                    <br />
                    Redux
                    <br />
                    GraphQL
                    <br />
                    responsive design
                    <br />
                    material UI
                    <br />
                </p>
            </div>
            </div>
        </div>
    );
};

export default AboutDeveloper;