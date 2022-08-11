class Project {
    constructor(title, description, tech, href, img) {
        if (!title
            || !description
            || !tech
            || !href
            || !img
        ) throw 'Improper project format'
        this.title = title
        this.description = description
        this.tech = tech
        this.href = href
        this.img = img
    }
}

const base = ['HTML', 'CSS', 'Responsive design']

export const projects = [
    // qr
    new Project(
        'QR Code Card Component',
        'Implementing a card-like design for a QR Code. Provided a single image asset and a mobile and desktop design.',
        [...base],
        'qr-code.html',
        ['qr-mobile.png'],
    ),
    new Project(
        'Perfume Product Card',
        'Implementing a detailed card design for a perfume product. Implementation involved modifying typography (letter-spacing, etc.) and aligning different elements relative to each other.',
        ['Typography', 'Flexbox','BEM naming conventions', ...base],
        'product-preview.html',
        ['perfume-mobile.png'],
    ),
    new Project(
        'Mult-Part Rating Component',
        'Implementing a multi-page rating form. Involved JavaScript DOM manipulation and event handling in addition to visual design aspects.',
        ['JavaScript', 'DOM manipulation', 'event handling', ...base],
        'rating-component.html',
        ['rating-mobile.png'],
    ),
    new Project(
        'NFT Product Card w/ Active States',
        'Implementing a product card with hover/active states. Unlike other cards, this has more tacticle feedback as well as the use of SVG icons',
        ['pseudo-elements', 'svg icons', ...base],
        'nft-preview-card.html',
        ['nft-mobile-2.png'],
    ),
    new Project(
        'Statistics Eye-Catch',
        'Implementing a flexible eye-catch component with supporting statistics. Flexbox is used to adjust card to a side-by-side design suited to higher resolution screens.',
        [...base, 'BEM naming conventions', 'Responsive design', 'Flexbox'],
        'stats-preview.html',
        ['stats-preview-mobile.png'],
    ),
    new Project(
        'Three-Column Product Card w/ Reusable Components',
        'Implementing a three-column design powered by Vue slots. This allows the components to be easily recreated and modified as necessary. This project was done with a single flexible Vue component utilized three times. Switches to a side-by-side display on wider screens.',
        ['Vue.js', 'JS Components', 'Slots', 'responsive design', ...base],
        '3-column-card.html',
        ['3-column-mobile.png'],
    )
]