/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [ './components/**/*.{html,js}',
    '*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ]
  
    ,
  darkMode: 'class',
  theme: {
 
      
      container: {
        // you can configure the container to be centered
      center: true,
      padding: '1rem',
  
        // or have default horizontal padding
        
  
        // default breakpoints but with 40px removed
        screens: {
          sm: "100%",
          md: "100%",
          lg: "992px",
          xl: "1240px"
       }
     
  
    },

 
   
    extend: {
      backgroundImage: {
        'touricon': "url('/images/icons/touricon.png')",
        'touricon1': "url('/images/icons/touricon1.png')",
        'offerBg1': "url('/images/home/offer.jpg')",
        'offerBg2': "url('/images/home/offer1.jpg')",
        'offerBg3': "url('/images/home/offer2.jpg')",
        'sign': "url('/images/background/Group.png')",
        'footer': "url('/images/background/footer.png')",
        'homeTwoBg-dark': "url('/images/background/bgtwo.jpg')",
        'previewBg': "url('/images/background/previewbg.png')",
        'preview': "url('/images/background/download 1.png')",
        'close-light': "url('/images/icons/closelight.jpg')",
        'close-dark': "url('/images/icons/closeDark.png')",       
      },
      zIndex: {
        '999': '999',
      },
      colors: {
        'title': '#0D2F3F',
        'body': '#23262F',
        'green': '#399F6E',
        'body-bg': '#FFFDF5',
        'body-bg-gray': '#F8F7F1',
        'gray': '#7D7E87',
        'gray-lite': '#d5d5d5',
        'yello': '#FFC62D',
        'green-lite': '#1F7F7B',
        'red': '#F03D1B',
        'gray-lite': '#F4F5F6',
        'black-lite': '#333333',
        'red': '#E79B8A',

        
        
      },
      boxShadow: {
        'icon': ' 0px 4px 50px rgba(0, 0, 0, 0.07)',
        'sign': ' 0px 4px 50px rgba(0, 0, 0, 0.04)',
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
]
}