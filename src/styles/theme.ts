import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
	    highlight: {
	      "100": "#FFBA08",
		  "50": "rgba(255, 186, 8, 0.5);"
        },
		dark: {
		  "black": "#000000",
		  "ht": "#47585B",
		  "info": "#999999",
		  "info50": "rgba(153, 153, 153, 0.5)"
		},
		light: {
		  "white": "#FFFFFF",
		  "ht": "#F5F8FA",
		  "info": "#DADADA"
		}
	},
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
	styles: {
		global: {
			body: {
				bg: 'light.ht',
				color: 'green.100',	
			}	
		}	
	}			
})