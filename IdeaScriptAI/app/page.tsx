"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";
import FooterSection from "./dashboard/_components/Footer";


export default function Home()
{

  const products = [
    {
      title: "Moonbeam",
      thumbnail:
        "/assets/landing.png",
    },
    {
      title: "Cursor",
      thumbnail:
        "/assets/history.png",
    },
    {
      title: "Rogue",
      thumbnail:
        "/assets/template1.png",
    },
   
    {
      title: "Editorially",
      thumbnail:
        "/assets/template2.png",
    },
    {
      title: "Editrix AI",
      thumbnail:
        "/assets/profile1.png",
    },
    {
      title: "Pixel Perfect",
      thumbnail:
        "/assets/profile2.png",
    },
   
    {
      title: "Algochurn",
      thumbnail:
        "/assets/signin.png",
    },
    {
      title: "Aceternity UI",
      thumbnail:
        "/assets/signup.png",
    },
    {
      title: "Tailwind Master Kit",
      thumbnail:
        "/assets/logo-png.png",
    },
    {
      title: "SmartBridge",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    // {
    //   title: "Creme Digital",
    //   thumbnail:
    //     "/assets/landing.png",
    // },
    // {
    //   title: "Golden Bells Academy",
    //   thumbnail:
    //     "/assets/dashboard.png",
    // },
    // {
    //   title: "Invoker Labs",
    //   thumbnail:
    //     "/assets/logo-png.png",
    // },
    // {
    //   title: "E Free Invoice",
    //   thumbnail:
    //     "/assets/logo-png.png",
    // },
  ];

  return(
    <>
    {/* <div className="flex flex-row gap-10 mt-5">
      <h1 className="text-black">Welcome to IdeaScriptAI... This is the landing page for our website</h1>
      
     
    </div> */}
    <div className="flex flex-col overflow-hidden">
    
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Transform Your Ideas into Engaging Content <br />
              <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                Experience the power of
              <div className="flex justify-center">
                <Image src="/assets/logo-png.png"
                  alt="logo"
                  width={350}
                  height={450}
                  className="my-5"
                  />

</div>    
              </span>
            </h1>


          </>
        }
      >
        <Image
          src={"/assets/dashboard.png"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <HeroParallax products={products} />

    <div className="flex justify-center mt-20">
      <Button 
         className="flex justify-center text-xl mx-2 cursor-pointer p-6 mt-2  w-[35%] md:w-[25%] rounded-2xl hover:scale-110">
          <Link href="/sign-in">
          Get Started
          </Link>
       </Button>
       </div>       



        {/* footer section */}
        <FooterSection  />

      </div>
    </>
  ) 
}