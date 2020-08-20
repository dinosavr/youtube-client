import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface IThumbnailsTypes {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IThumbnailsTypes;
  medium: IThumbnailsTypes;
  high: IThumbnailsTypes;
  standard: IThumbnailsTypes;
  maxres: IThumbnailsTypes;
}

interface ILocalized {
  title: string;
  description: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ISortSearchResult {
  items: IResponseItems[];
  sort: string;
  desc: boolean;
}

export interface IResponseItems {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface IResponse {
  kind: string;
  eTag: string;
  pageInfo: IPageInfo;
  items: IResponseItems[];
}
