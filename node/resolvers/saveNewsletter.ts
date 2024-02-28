export async function saveNewsletter(_:unknown, props: any, ctx: Context) {
  try {
    const result = await ctx.clients.masterdata.createDocument({
      dataEntity: "mariannaTeste",
      schema: "testeMarianna",
      fields: {
        ...props
      }
    })
    return result
  } catch (error) {
    return error
  }
}
