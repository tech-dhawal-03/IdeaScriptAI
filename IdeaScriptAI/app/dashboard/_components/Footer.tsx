import React from "react"
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from "next/image";




function FooterSection() {
  return (
    <div className="mt-36">
         <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image
              
              src="/assets/logo-png.png"
              alt="Flowbite Logo"
              height = {250}
              width = {250}


            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">IdeaScriptAI</Footer.Link>
                <Footer.Link href="https://ai.google.dev/gemini-api/docs?gad_source=1&gbraid=0AAAAACn9t67-X508OJ_XAT8KI0RrX-RMY&gclid=EAIaIQobChMI_b7roIbjigMVMNEWBR1NMzlNEAAYASAAEgIBhvD_BwE">Gemini</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/in/dhawal-bathre-38205b286?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bt%2B8fs8VyQa%2Bb6YiIn%2BUrbA%3D%3D">LinkedIn</Footer.Link>
                <Footer.Link href="https://github.com/tech-dhawal-03/IdeaScriptAI.git">Github</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Ide@$criptAI™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:justify-center ">
            {/* <Footer.Icon href="#" icon={BsFacebook} /> */}
            <Footer.Icon href='https://www.linkedin.com/in/mansa-gupta-150921237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B92X5OVswRv6T3ZRYWdaK9w%3D%3D' icon={BsLinkedin} className="text-black" />
            <Footer.Icon href="https://www.instagram.com/dhawal_0304_?igsh=aXIzNjV5cGtwdWts&utm_source=qr" icon={BsInstagram} className="text-black" />
            {/* <Footer.Icon href="#" icon={BsTwitter} className="text-black" /> */}
            <Footer.Icon href="https://github.com/tech-dhawal-03/IdeaScriptAI.git" icon={BsGithub} className="text-black" />
            {/* <Footer.Icon href="#" icon={BsDribbble} className="text-black" /> */}
          </div>
        </div>
      </div>
    </Footer>
        
    </div>
  )
}

export default FooterSection