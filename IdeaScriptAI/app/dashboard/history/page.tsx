import { getDatafromDB } from "@/lib/actions/content.actions"
import { currentUser } from "@clerk/nextjs/server";
import React from "react"
import History from "./_components/History";

// genIdeas is the list of user defined template....


async function getHistory() {
    const user = await currentUser();
    const email = user?.emailAddresses[0].emailAddress;
    const history = await getDatafromDB(email);
    // console.log(history);

    





    

  return (
    <History
      history={history}/>
  )
}

export default getHistory