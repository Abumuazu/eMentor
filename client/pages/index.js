import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import Link from "next/link";

const Index = ({ courses }) => {


  return (
    <>
           <div className="index-home">
            <div className="outter-container">
            <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
     {/* header  */}
    
     <section className="section ">

      <div className="content">

          <div>
          <div className="inner-container">
            <div className="inner-title wrapper">
            <h2 id="hero_header" className="h1" >Grow Your Skills Anywhere, Anytime</h2>
            </div>
            <div className="inner-text">
            <p className="hero_child ">Speed up you career path with our LMS system and modern architecture learning techniques </p>
            </div>
          </div>

          

          </div>

          <div  className="hero_div">
              
              <Link href= "/register">
       <button type="button" className="custom-btn btn-5">
       Get Started
       </button>
        </Link>
        </div>
      </div>
      <div className="imgBox hero_image">
          <img src="https://www.pngarts.com/files/4/Athlete-PNG-Download-Image.png" />
      </div>
           
    </section>
    {/* end og HEADER  */}
       {/* showcase1  */}

    
      {/* Show Courses  */}
   
    {/* FOOTER Section  */}
    
      </div>    

      </div>
      
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
