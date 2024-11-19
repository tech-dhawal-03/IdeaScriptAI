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
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
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
         className="flex justify-center text-xl mx-2 cursor-pointer p-6 mt-2 w-[25%] rounded-2xl hover:scale-110">
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