import React from 'react'
import Topbar from './_components/Topbar';
import LeftSidebar from './_components/LeftSidebar';
import Bottombar from './_components/Bottombar';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (


//   <ClerkProvider>
//   <html lang="en">



//   <body>
    
//     <Topbar />       
//     <main className="flex flex-row ">
//       <LeftSidebar />
//       <section className="main-container">
//         <div className="w-full max-w-4xl">
//           {children}
//         </div>
//       </section>
//       {/* <RightBar /> */}
//     </main>
//     <Bottombar />
//   </body>
// </html>

// </ClerkProvider>



       

    <div className='bg-slate-100'>
            <div className='hidden w-1/6  fixed md:block'>
                <LeftSidebar />
            </div> 


            <div className='flex flex-col md:ml-36 lg:ml-52 xl:ml-64 absolute w-[80%]'>
                <div className='flex'>
                    <Topbar />
                </div>


                
                {children}
                

                <div className='block fixed  bottom-0 md:hidden'>
                    <Bottombar/>
                </div>

            </div>

               

        

        </div>





    )
}

export default layout