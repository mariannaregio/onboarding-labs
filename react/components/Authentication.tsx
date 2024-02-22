 import React from 'react'
 import { useRuntime } from 'vtex.render-runtime'
 import { useRenderSession } from "vtex.session-client"

 export default function Authentication() {

   const { navigate, route, binding   } = useRuntime()
   const { session } = useRenderSession()


  // @ts-ignore
   const user = session?.namespaces?.profile?.isAuthenticated?.value
   console.log( typeof user)
   console.log(binding?.canonicalBaseAddress)

   if (user == "false" && route.id === "store.home") {
     navigate({
       to: '/login'
     })

     return <h1>Redirecionando para a pagina de login</h1>
   }

   return null
 }
