export async function getNewsletter(_: unknown, __: unknown, ctx: Context) {
  try {
    const result = await ctx.clients.masterdata.searchDocumentsWithPaginationInfo(
      {
        dataEntity: 'appNewsletter',
        schema: 'emailsNewsletter',
        fields: ['email', 'preferences'],
        pagination: {
          page: 1,
          pageSize: 100,
        },
      }
    )

    return result.data
  } catch (error) {
    return error
  }

  /* try {
    const res: any = await ctx.clients.data.getNewsletter()
    const items = await res.data.map(
      (data: { email: string; preferences: [string] }) => data
    )
    return items
  } catch (error) {
    console.log(error)
  } */
}
