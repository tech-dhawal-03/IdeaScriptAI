import Image from "next/image"

export default function Loading()
{

    return(
        // <Spinner />
        <div className="flex flex-col items-center">

        <Image 
         src="/assets/loading.svg" 
         alt="loading" 
         width={120} 
         height={20}
         className="" />

        <h1 className='text-light-1 justify-center'>Loading...</h1>



        </div>
       




    )
       

}