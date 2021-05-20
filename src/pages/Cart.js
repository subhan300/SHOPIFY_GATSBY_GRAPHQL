// import React,{useEffect,useState} from 'react'
// import Client from 'shopify-buy';

// // Initializing a client to return content in the store's primary language

// const client = Client.buildClient({
//   domain:'dress-online-shopsss.myshopify.com',
//   storefrontAccessToken:'a7311c09653d246f1364ce28963a3c5c'
// });
// function Cart() {


    
//     return (
//         <>
//         <div style={{display:"flex",justifyContent:"center"}}>
//             <h1>WELCOME TO CART PAGE</h1>
//         </div>

//         <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
//         {session && session.lineItems?.map((items)=>{
//                 return(<div key={items.id} style={{padding:"10px",marginTop:"10px"}}>

//                          <div>  PRODUCTS : {items.title}</div>
//                          <div><img src={items.variant.image.src}></img></div>
//                          <div>PRICE IS ONLY {items.variant.price}</div>
//                          <div><button >
//                          GO FOR A CHECKOUT
//                          </button></div>


                       
                       
//                        </div>)
//             }) }
//         </div>
           
    
//        </>
//        )
// }

// export default Cart
import React, { useEffect, useState } from "react"

// import Client from 'shopify-buy'

// const client = Client.buildClient({
//   domain:'dress-online-shopsss.myshopify.com',
//     storefrontAccessToken:'a7311c09653d246f1364ce28963a3c5c'
// })

export default function Cart() {

    // const [checkoutSession, setCheckoutSession] = useState();
    // useEffect(()=>{
    //     (async()=>{
    //         const session = await client.checkout.fetch(localStorage.getItem("checkoutid"));
    //         setCheckoutSession(session);
    //         console.log("session loadded test = ",session);
    //         console.log("checkoutSession.lineItems = ",session.lineItems);
    //     })()
    // },[]);
    return (
        <div>
            <div>Cart</div>
            {/* <div>
                <button onClick={()=>{

                    window.open(checkoutSession.webUrl);

                }} >Checkout</button>
            </div>
            {
                checkoutSession && checkoutSession.lineItems.map((item)=>(
                    <div key={item.id} style={{border: "1px solid gray", borderRadius:"5px", margin:"10px", padding:"10px"}}>
                        <div>
                            Name: {item.title}
                        </div>
                        <div>
                            <img width="100px" src={item.variant.image.src} />
                        </div>
                        <div>
                            Price: {item.variant.price}
                        </div>
                        <div>
                            quantity: {item.quantity}
                        </div>
                        <div>
                            <button onClick={async()=>{
                                const sessionAdd = await client.checkout.updateLineItems(checkoutSession.id, [
                                    {
                                        id: item.id,
                                        quantity: item.quantity+1
                                    }
                                ])
                                setCheckoutSession(sessionAdd);
                                console.log("seesion after = ",sessionAdd);
                            }}>+</button>
                            <button onClick={async()=>{
                                const sessionMinus = await client.checkout.updateLineItems(checkoutSession.id, [
                                    {
                                        id: item.id,
                                        quantity: item.quantity-1
                                    }
                                ])
                                setCheckoutSession(sessionMinus);
                            }}>-</button>
                        </div>
                </div>
                ))
            } */}
        </div>
    );
}