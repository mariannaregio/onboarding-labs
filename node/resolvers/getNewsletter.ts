/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */

// export async function getNewsletter(_:unknown, props: any, ctx: Context) {
//   try {
//     const result = await ctx.clients.masterdata.searchDocumentsWithPaginationInfo({
//       dataEntity: "appNewsletter",
//       schema: "emailsNewsletter",
//       fields: [
//         "email",
//          "preferences"
//       ],
//       pagination: {
//         page: 1,
//         pageSize: 100
//       }
//     })

//     return result
//   } catch (error) {
//     console.log(error)
//     return error
//   }
// }

export async function getNewsletter( _: unknown,  _props: any, ctx: Context
) {
  try{
    const res: any = await ctx.clients.data.getNewsletter()
    const items = await res.data.map((data: { email: string, preferences: [string] }) => data)
    return items
  } catch(error){
    console.log(error)
  }
}
