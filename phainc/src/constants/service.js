// Import themes modules
import Icons from '../themes/Icons'

const DataService = {
  infoService: {
    titleText: 'Our Services',
    descriptionText: 'We provide all kind service',
    extendText: 'Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred.'
  },
  services: [
    {
      id: 1,
      src: Icons.tax,
      alt: 'tax',
      titleText: 'Tax Planning',
      descriptionText: 'Strategy experience and analytical expertise combine to enable decision making and create value.'
    },
    {
      id: 2,
      src: Icons.stray,
      alt: 'Strategic',
      titleText: 'Strategic Planning',
      descriptionText: 'Technology is an integral and potentially differentiating component of your business that  influences.'
    },
    {
      id: 3,
      src: Icons.stock,
      alt: 'stock',
      titleText: 'Trades & Stocks',
      descriptionText: 'Managing change effectively is a source of competitive advantage, yet few organizations do it well.'
    }
  ]
}

export default DataService
