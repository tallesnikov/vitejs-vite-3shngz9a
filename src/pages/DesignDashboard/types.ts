export interface Order {
  id: string;
  status: string;
  sourcing_agent: string;
  factory: string;
  details: {
    product_name: string;
    thumbnail: string;
    singer: string;
    song_name: string;
    music_platform: string;
    base_engraving: string;
    color: string;
    design_preview: string;
    designer: string;
  };
  comments: Array<{
    id: number;
    text: string;
    date: string;
    user: string;
  }>;
}

export interface Status {
  value: string;
  label: string;
  color: string;
}