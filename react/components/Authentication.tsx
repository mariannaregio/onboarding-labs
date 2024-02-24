 import React from 'react'
 import { useRuntime } from 'vtex.render-runtime'
 import { useRenderSession } from "vtex.session-client"

 export default function Authentication() {

   const { navigate, route   } = useRuntime()
   const { session } = useRenderSession()


  // @ts-ignore
   const user = session?.namespaces?.profile?.isAuthenticated?.value
   console.log( typeof user)

   if (user == "false" && route.id === "store.home") {
     navigate({
       to: '/login'
     })

     return <h1>Redirecionando para a pagina de login</h1>
   }

   return null
 }
