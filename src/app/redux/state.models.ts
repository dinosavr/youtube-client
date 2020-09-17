import { IStatistics, IThumbnailsTypes } from '../youtube/models/youtube-response-example/youtube-response-example.module';

export interface IAppState {
  customVideos: ICustomVideo[];
  videos: ICustomVideo[];
}

export interface IThumbnailsCustomVideo {
  default: IThumbnailsTypes;
}

interface ISnippetCustomVideo {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: IThumbnailsCustomVideo;
}

export interface ICustomVideo {
  id: string;
  snippet: ISnippetCustomVideo;
  statistics: IStatistics;
}
