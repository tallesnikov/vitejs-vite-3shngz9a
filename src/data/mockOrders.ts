import { Order } from '@/types';

export const MOCK_ORDERS: Order[] = [
  {
    id: '65269',
    status: 'need_artwork',
    sourcing_agent: 'MM',
    factory: 'Music Glass',
    details: {
      product_name: 'Your Moment - מיוזיקגלאס מנורת לילה עם שיר - לבן',
      thumbnail: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
      singer: 'שרית חדד',
      song_name: 'יש חתונה',
      music_platform: 'Spotify',
      base_engraving: 'No',
      color: 'White',
      design_preview: 'https://yourmoment.co.il/wp-content/uploads/2024/04/6668244_3393287_Mesa-de-trabajo-1-1-2048x2048.png',
      designer: 'Sarah'
    },
    comments: [
      { id: 1, text: "Need song timestamp", date: "2024-12-23 10:00", user: "Sarah" },
      { id: 2, text: "Timestamp added at 1:30", date: "2024-12-23 11:30", user: "Mike" }
    ]
  },
  {
    id: '65270',
    status: 'missing_info',
    sourcing_agent: 'Phil',
    factory: 'Stainless Steel',
    details: {
      product_name: 'Your Moment - תמונת נירוסטה עם שיר',
      thumbnail: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
      singer: 'עומר אדם',
      song_name: 'קסם',
      music_platform: 'Spotify',
      base_engraving: 'Yes',
      color: 'Silver',
      design_preview: 'https://yourmoment.co.il/wp-content/uploads/2024/04/6668244_3393287_Mesa-de-trabajo-1-1-2048x2048.png',
      designer: 'Mike'
    },
    comments: []
  },
  {
    id: '65271',
    status: 'can_produce',
    sourcing_agent: 'Own warehouse',
    factory: 'Flowers',
    details: {
      product_name: 'Your Moment - תמונת פרחים מוארת עם שיר',
      thumbnail: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
      singer: 'נועה קירל',
      song_name: 'פעם בחיים',
      music_platform: 'Spotify',
      base_engraving: 'No',
      color: 'White',
      design_preview: 'https://yourmoment.co.il/wp-content/uploads/2024/04/6668244_3393287_Mesa-de-trabajo-1-1-2048x2048.png',
      designer: 'Sarah'
    },
    comments: []
  }
];