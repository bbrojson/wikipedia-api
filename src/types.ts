export type Page = {
  pageid: number,
  snippet: string,
  title: string,
};

// TODO any - NO TIME
export type PagesResponse = {
  batchcomplete: any,
  continue: any,
  query: {
    search: Page[],
    searchInfo: any,
  },
};
