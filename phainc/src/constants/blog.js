// Import themes modules
import Images from '../themes/Images'

const DataBlog = {
  infoBlog: {
    titleText: 'Latest news',
    descriptionText: 'Latest Blog Posts',
    extendText: 'Proprietary data, expert analysis and provocative points of view for leaders seeking sustained, profitable growth.'
  },
  blog: [
    {
      id: 1,
      src: Images.board,
      alt: 'board',
      date: '08 Aug, 2018',
      category: 'Marketing',
      titleBlog: 'New Age for Trade and Supply Finance',
      href: '#'
    },
    {
      id: 2,
      src: Images.group,
      alt: 'group',
      date: '18 Feb, 2018',
      category: 'Marketing',
      titleBlog: 'Rebooting a Digital Solution to Finance',
      href: '#'
    },
    {
      id: 3,
      src: Images.lead,
      alt: 'lead',
      date: '21 Jan, 2018',
      category: 'Corporate',
      titleBlog: 'What Gets in the Way of Strategy?',
      href: '#'
    }
  ]
}

export default DataBlog
