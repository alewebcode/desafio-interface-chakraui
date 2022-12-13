import { extendTheme } from "@chakra-ui/react"



const theme = extendTheme({
    colors: { 
        gray: {
            "900":"#999999", 
            "800":"#47585B",
            "700":"#DADADA",      
            "600": "#F5F8FA",
            
            
        },  
        yellow:{
            "500": "#FFBA08"
        }
    },

    fonts:{
        heading:'Poppins',
        body:'Poppins'
    },
    styles:{
        global: {
            body:{
                margin:0,
                padding:0,
                bg: 'gray.600',
                overflowX:'hidden'
               
            }
        },
        
    }
})

export default theme