export async function saveNewsletter(_:unknown, props: any, ctx: Context) {
  try {
    const result = await ctx.clients.masterdata.createDocument({
      dataEntity: "appNewsletter",
      schema: "emailsNewsletter",
      fields: {
        ...props
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
