import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '24px',
    baseLineHeight: 1.45,
    googleFonts: [
        {
            name: 'IBM Plex Sans Condensed',
            styles: [
                '200',
                '400',
            ],
        },
    ],
    headerFontFamily: ['IBM Plex Sans Condensed', 'sans-serif'],
    bodyFontFamily: ['IBM Plex Sans Condensed']
})

export default typography