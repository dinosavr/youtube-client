import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IThumbnailsTypes {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IThumbnailsTypes;
  medium: IThumbnailsTypes;
  high: IThumbnailsTypes;
  standard: IThumbnailsTypes;
  maxres: IThumbnailsTypes;
}

export interface ILocalized {
  title: string;
  description: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IYoutubeVideoResponseItems {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface IYoutubeVideoResponse {
  kind: string;
  eTag: string;
  pageInfo: IPageInfo;
  items:IYoutubeVideoResponseItems[];
}
