class Project {
    constructor(title, description, tech, href, img, repository) {
        if (!title
            || !description
            || !tech
            || !href
            || !img
        ) {
            console.log('received')
            console.log(title)
            console.log(description)
            console.log(tech)
            console.log(href)
            console.log(img)
            throw 'Improper project format'
        }
        this.title = title
        this.description = description
        this.tech = tech
        this.href = href
        this.img = img
        this.repository = repository || `https://github.com/sinjin25/front-end-mentor-problems`
    }
}

const base = ['HTML', 'CSS', 'Responsive design']
const QR = new Project(
    'QR Code Card Component',
    'Implementing a card-like design for a QR Code. Provided a single image asset and a mobile and desktop design.',
    [...base],
    'front-end-mentor-problems/qr-code.html',
    ['qr-mobile.png', 'qr-desktop.png'],
)
const PERFUME = new Project(
    'Perfume Product Card',
    'Implementing a detailed card design for a perfume product. Implementation involved modifying typography (letter-spacing, etc.) and aligning different elements relative to each other.',
    ['Typography', 'Flexbox','BEM naming conventions', ...base],
    'front-end-mentor-problems/product-preview.html',
    ['perfume-mobile.png', 'perfume-desktop.png'],
)
const RATING = new Project(
    'Mult-Part Rating Component',
    'Implementing a multi-page rating form. Involved JavaScript DOM manipulation and event handling in addition to visual design aspects.',
    ['JavaScript', 'DOM manipulation', 'event handling', ...base],
    'front-end-mentor-problems/rating-component.html',
    ['rating-mobile.png', 'rating-mobile-2.png', 'rating-desktop.png', 'rating-desktop-2.png'],
)
const NFT = new Project(
    'NFT Product Card w/ Active States',
    'Implementing a product card with hover/active states. Unlike other cards, this has more tacticle feedback as well as the use of SVG icons',
    ['pseudo-elements', 'svg icons', ...base],
    'front-end-mentor-problems/nft-preview-card.html',
    ['nft-mobile.png', 'nft-mobile-2.png', 'nft-desktop-2.png', 'nft-desktop.png'],
)
const STATS = new Project(
    'Statistics Eye-Catch',
    'Implementing a flexible eye-catch component with supporting statistics. Flexbox is used to adjust card to a side-by-side design suited to higher resolution screens.',
    [...base, 'BEM naming conventions', 'Responsive design', 'Flexbox'],
    'front-end-mentor-problems/stats-preview.html',
    ['stats-preview-mobile.png', 'stats-preview-desktop.png'],
)
const THREE_COL = new Project(
    'Three-Column Product Card w/ Reusable Components',
    'Implementing a three-column design powered by Vue slots. This allows the components to be easily recreated and modified as necessary. This project was done with a single flexible Vue component utilized three times. Switches to a side-by-side display on wider screens.',
    ['Vue.js', 'JS Components', 'Slots', 'responsive design', ...base],
    'front-end-mentor-problems/3-column-card.html',
    ['3-column-mobile.png', '3-column-desktop.png'],
)
const CHART = new Project(
    'Expenses Chart w/ Vue CLI',
    'Implementing a week long expense graph with Vue.js. This is done with Vue CLI so it\'s being compiled using Webpack. Each "element" is its own component which are kept generic for possible reusability. A lot of slots are used to help with this.',
    ['Vue.js', 'Webpack', 'SPA Deployment', 'Slots', 'Responsive Design'],
    `fme-expenses-chart/`,
    ['expense-chart-mobile.png', 'expense-chart-desktop.png'],
    `https://github.com/sinjin25/fme-expenses-chart`
)

export const projects = [
    PERFUME, CHART, RATING, NFT, QR, STATS, THREE_COL
]