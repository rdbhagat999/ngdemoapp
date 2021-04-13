import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private readonly title: Title, private readonly meta: Meta) { }

  getPageTitle() {
    return this.title.getTitle();
  }

  getMetaData(attrSelector: string) {
    return this.meta.getTag(attrSelector);
  }

  setPageTitle(title: string) {
    this.title.setTitle(title);
  }

  addMetaData(tag: MetaDefinition, forceCreation: boolean = false) {
    this.meta.addTag(tag, forceCreation);
  }

  addMetaDataArray(tags: MetaDefinition[], forceCreation: boolean = false) {
    this.meta.addTags(tags, forceCreation);
  }

  updateMetaData(tag: MetaDefinition, selector?: string) {
    this.meta.updateTag(tag, selector);
  }

  deleteMetaData(attrSelector: string) {
    this.meta.removeTag(attrSelector);
  }

  setFacebookCardMetaData(appId: string = 'fbapp-123456', siteName: string = 'Github.io', cardTitle: string = 'Angular SSR App',
    cardDescription: string, siteURL: string = 'https://rdbhagat999.github.io/ngdemoapp/',
    imageURL: string = 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200') {
    this.addMetaDataArray([
      { name: 'fb:app_id', content: appId },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:title', content: cardTitle },
      { name: 'og:description', content: cardDescription },
      { name: 'og:type', content: 'article' },
      { name: 'og:url', content: siteURL },
      { name: 'og:site_name', content: siteName },
      { name: 'og:image', content: imageURL },
      { name: 'og:image:secure_url', content: imageURL },
    ]);
  }

  setTwitterCardMetaData(cardTitle: string = 'Angular SSR App', cardDescription: string,
    siteURL: string = 'https://rdbhagat999.github.io/ngdemoapp/',
    imageURL: string = 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200') {
    this.addMetaDataArray([
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: siteURL },
      { name: 'twitter:title', content: cardTitle },
      { name: 'twitter:description', content: cardDescription },
      { name: 'twitter:text:description', content: cardDescription },
      { name: 'twitter:image', content: imageURL },
    ]);
  }
}
