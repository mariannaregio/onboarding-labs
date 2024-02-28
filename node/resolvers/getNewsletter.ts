export async function getNewsletter(_:unknown, props: any, ctx: Context) {
  try {
    const result = await ctx.clients.masterdata.getDocument({
      dataEntity: "mariannaTeste",
      id: props.id,
      fields: [
        "name",
        "email",
        "age"
      ]
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
