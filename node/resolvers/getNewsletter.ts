export async function getNewsletter(_:unknown, props: any, ctx: Context) {
  try {
    const result = await ctx.clients.masterdata.getDocument({
      dataEntity: "appNewsletter",
      id: props.id,
      fields: [
        "email",
        "preferences"
      ]
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
