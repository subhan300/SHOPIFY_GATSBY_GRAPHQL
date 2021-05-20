import React from "react"
import {ApolloProvider} from "@apollo/client"
import {client} from "./client"

export const wrapRootElement=({element})=>{
    return(
       

            <ApolloProvider client={client}>
                {element}
            </ApolloProvider>




    
    )

}



//"38ae9ce4cfdccf9d1aeef2587c287b84" my old shop access token but this shop is expired now
// "z-pro-shoes" shop name