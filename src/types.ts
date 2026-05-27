/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'start'
  | 'was-ist-katholisch'
  | 'mehr-als-ein-gebaeude'
  | 'glaube-im-alltag'
  | 'kirche-hilft'
  | 'feste-symbole'
  | 'kritische-fragen'
  | 'mach-den-test'
  | 'mitmachen'
  | 'kampagnenmaterial';

export interface CampaignMaterial {
  id: string;
  title: string;
  category: 'Plakat' | 'Social Media' | 'Flyer';
  description: string;
  slogan: string;
  content: string[];
  imageUrl: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'type1' | 'type2' | 'type3' | 'type4'; // Gemeinschaft, Sinnsuche, Helfer, Ruhe
  }[];
}

export interface QuizResult {
  id: 'type1' | 'type2' | 'type3' | 'type4';
  title: string;
  subtitle: string;
  description: string;
  advice: string;
  bgGradient: string;
}
