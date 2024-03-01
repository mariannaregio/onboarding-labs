/* eslint-disable prettier/prettier */
import { MasterData  } from "@vtex/api";

export class Data extends MasterData {
  public async getNewsletterData() {
    return this.searchDocumentsWithPaginationInfo({
        dataEntity: 'appNewsletter',
        schema: 'emailsNewsletter',
        fields: ['email', 'preferences'],
        pagination: {
          page: 1,
          pageSize: 99,
        },
      })
  }
}
