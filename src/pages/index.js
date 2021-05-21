// import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react"

import Header from "../components/GlobalComponents/Header/Header"
import Footer from "../components/GlobalComponents/Header/Footer"
// const createCheckout = gql`
// mutation checkoutCreate($input: CheckoutCreateInput!) {
//   checkoutCreate(input: $input) {
//     checkout {
//       id
//       webUrl
//       lineItems(first:100){
//         edges{
//           node{
//             quantity
//             id
//             title,
//             variant{
//               id
//               priceV2{
//                 amount
//               }
//             }
//           }
//         }
//       }
//     }
//     checkoutUserErrors {
//       code
//       field
//       message
//     }
//   }
// }
// `

// const addLineItem = gql`
// mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
//   checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
//     checkout {
//       id
//       webUrl
//       lineItems(first:100){
//         edges{
//           node{
//             quantity
//             id
//             title,
//             variant{
//               id
//               priceV2{
//                 amount
//               }
//             }
//           }
//         }
//       }
//     }
//     checkoutUserErrors {
//       code
//       field
//       message
//     }
//   }
// }
// `





// ***************************************************************************************************

export default function Home({ data }) {
  // const [createCheckoutMutation, {data:checkoutData}] = useMutation(createCheckout);
  // const[ADD_LINE_ITEMS,{data:Add_checkoutData}]=useMutation(addLineItem)
  
 

  // useEffect(()=>{
  //   (async()=>{
      
  //     const response = await createCheckoutMutation({
  //       variables: {
  //         input: {}
  //       }
  //     });
     
    
  //   })()
    


  // },[])



  const Products_data = data.allShopifyProduct.edges
  // console.log(Products_data,">>>>>> this is my product call api")
  // console.log(checkoutData,"checkout aya k nahi add karny paar")

  return (
    <>
      {/* <h1>TOTAL AMOUNT HERE : RUPESS</h1> */}
      {/* <h3>items {cartCheckOut && cartCheckOut.lineItems.length}</h3> */}
      <Header />
      {/* <button onClick={() =>window.open(checkoutData.checkoutCreate.checkout.webUrl)}>GO to checkout</button> */}
      {/* <Link to="/Cart">CART PAGE</Link> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>ALL PRODUCTS </h1>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

            {!data && !data.allShopifyProduct ?
              <h1>...............laoding</h1>
              :
              Products_data.map(({ node }) => {
               
                const Img_Src = node.images[0].originalSrc


                return (
                  <>


                    <div style={{ paddingTop: "50px", marginLeft: "15px" }} key={node.shopifyId}>
                      <div>{node.title}</div>
                      <div >
                        <img alt="product"
                          src={Img_Src}></img>
                      </div>
                      <div><p>{node.description}</p></div>
                      <div>
                        <button 
                  //     onClick={async()=>{
                  //  const ResposneAfterAdd=await ADD_LINE_ITEMS({
                  //         variables:{
                  //           lineItems: [
                  //             {
                  //               quantity: 1,
                  //               variantId:node.variants[0].id.split("__")[2]
                  //             }
                  //           ],
                  //           checkoutId:checkoutData.checkoutCreate.checkout.id
                  //         }
                  //       })
                  // console.log(ResposneAfterAdd,"dekhaozara")
                  //     }
                   
                  //   }
                      >ADD TO CART</button>

                      {/* sir button */}
                   

                      {/* sir button */}
                      
                      
                      </div>
                    </div>



                  </>)


              })


            }








          </div>


        </div>



      </div>
      <br></br><br></br>    <br></br><br></br>
      <Footer />

    </>
  )
}







// *********************************************************************************************








export const query = graphql`
  {
    allShopifyProduct(sort: {fields: [title]}) {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          variants {
            id
          }
        }
      }
    }
  }
`
console.log(query, "graphql data ")



// import { gql, useMutation } from "@apollo/client";
// import React, { useEffect } from "react"

// const createCheckout = gql`
// mutation checkoutCreate($input: CheckoutCreateInput!) {
//   checkoutCreate(input: $input) {
//     checkout {
//       id
//       webUrl
//       lineItems(first:100){
//         edges{
//           node{
//             quantity
//             id
//             title,
//             variant{
//               id
//               priceV2{
//                 amount
//               }
//             }
//           }
//         }
//       }
//     }
//     checkoutUserErrors {
//       code
//       field
//       message
//     }
//   }
// }
// `

// const addLineItem = gql`
// mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
//   checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
//     checkout {
//       id
//       webUrl
//       lineItems(first:100){
//         edges{
//           node{
//             quantity
//             id
//             title,
//             variant{
//               id
//               priceV2{
//                 amount
//               }
//             }
//           }
//         }
//       }
//     }
//     checkoutUserErrors {
//       code
//       field
//       message
//     }
//   }
// }
// `

// export default function Home({data}) {

//   const [createCheckoutMutaiton, {data:checkoutData}] = useMutation(createCheckout);
//   const [addLineItemMuation, {data:addLineItemData}] = useMutation(addLineItem);


//   useEffect(()=>{
//     (async()=>{
      
//       const response = await createCheckoutMutaiton({
//         variables: {
//           input: {}
//         }
//       });
//       console.log("checkout session created ",response);
    
//     })()
    


//   },[])

//   return (
//     <div>
//         <div>Hello Shopify Gatsby Apollo</div>
//         <div>
//           <button onClick={()=>{
//             window.open(checkoutData.checkoutCreate.checkout.webUrl)
//           }}>
//             Checkout
//           </button>
//         </div>
//         <div>
//           {
//             data.allShopifyProduct.edges.map(({node})=>(
//               <div key={node.id} style={{border: "1px solid gray", borderRadius:"5px", margin:"10px", padding:"10px"}}>
//                 <div>
//                   Name: {node.title}
//                 </div>
//                 <div>
//                   Description: {node.description}
//                 </div>
//                 <div>
//                   <img width="100px" src={node.images[0].originalSrc} />
//                 </div>
//                 <div>
//                   Price: {node.variants[0].price}
//                 </div>
//                 <div>
//                   <button onClick={async()=>{
//                     console.log("add to cart clicked");

//                     const responseAfterAdd = await addLineItemMuation({
//                       variables:{
//                         lineItems:[
//                           {
//                             quantity:1,
//                             variantId: node.variants[0].id.split("__")[2]
//                           }
//                         ],
//                         checkoutId: checkoutData.checkoutCreate.checkout.id
//                       }
//                     });
//                     console.log("resposne after adding line item = ",responseAfterAdd);
//                   }}>Add to Cart</button>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//   )
// }



// export const query = graphql`
// {
//   allShopifyProduct {
//     edges {
//       node {
//         handle
//         id
//         title
//         shopifyId
//         variants {
//           price
//           sku
//           title
//           id
//         }
//         images {
//           originalSrc
//         }
//         description
//       }
//     }
//   }
// }
// `