// "id": 22,
// "slug": "murgi-r-mangsho",
// "nameBn": "মুরগির মাংস",
// "category": "mangsho",
// "categoryNameBn": "মাংস",
// "categoryIcon": "🍗",
// "unit": "kg",
// "image": "🍗",
// "today": 225,
// "yesterday": 228,
// "lastWeek": 220,
// "lastMonth": 215,
// "change": {
// "dir": "down",
// "pct": -1.3
// emoji + name + দাম টাকা/একক + ▲/▼ %

export default interface MarqueeType {
  id: number;
  slug: string;
  nameBn: string;
  categoryIcon: string;
  today: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}
