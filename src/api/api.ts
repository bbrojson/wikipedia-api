/* eslint-disable import/prefer-default-export */
import { PagesResponse } from '../types';

class HttpClient {
  // eslint-disable-next-line class-methods-use-this
  private get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public getPages(searchText: string) {
    return this.get<PagesResponse>(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${searchText}`);
  }
}

export const api = new HttpClient();
