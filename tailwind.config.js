/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter'],
                bitter: ['Bitter'],
                opensans: ['OpenSans'],
            },
            screens: {
                '2xl': '1536px',
            },
            height: {
                navbar: 'var(--navbar-height)',
            },
            colors: {
                offBlack: '#0e1111',
                offWhite: '#f3f8f9',
                floodgate: '#55c5ef',
                floodgateDark: '#191749',
            },
            margin: {
                xSmallXOffset: 'var(--xsmall-margin-x-offset)',
                smallXOffset: 'var(--small-margin-x-offset)',
                xOffset: 'var(--margin-x-offset)',
            },
            animation: {
                shadowSlideOut:
                    '1s ease-in-out 0.5s 1 normal both running shadowSlideOut',
                shadowSlideIn:
                    '0.5s ease-in-out 0s 1 normal both running shadowSlideIn',
            },
            keyframes: {
                shadowSlideOut: {
                    '0%': {
                        boxShadow: '0px 0px #55c5ef',
                    },
                    '100%': {
                        boxShadow: '20px 20px #55c5ef',
                    },
                },
                shadowSlideIn: {
                    '0%': {
                        boxShadow: '20px 20px #55c5ef',
                    },
                },
            },
        },
    },
    plugins: [],
};
