export const styles={
    mainGrid : {
        marginTop:"150px",
        background: '#FFFFFF',
        borderRadius:'16px',
        boxShadow:' 0 8px 10px grey',
        padding: '40px 0',
        width:"100%",
        ['@media (max-width:1224px)']: {
            padding: '0 20px',
        }
    },
   
    gridboxText : {
        fontSize: '54px',
        color: '#1C1B1F',
        padding: '0 0 100px 0',
        fontWeight:' 700',
        ['@media (max-width:1100px)']: {
            padding: '0 0 71px 0',
            fontSize: '42px',
        },
        ['@media (max-width:767px)']: {
            fontSize: '25px',
            padding: '0 0 39px 0',
        }
    },
    gridinnerPara: {
        color:'#1C1B1E',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '22px',
        opacity: '0.64',
        ['@media (max-width:1199px)']: {
            fontSize: '18px',
        }
    },
    gridinnereText: {
        color:'#1C1B1E',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '22px',
        ['@media (max-width:1199px)']: {
            fontSize: '22px',
        }
    },
    creator:{
        color:'#8652FF',
        fontWeight:'600',
        fontSize:'22px',
        paddingLeft:"22px" ,
        ['@media (max-width:1199px)']: {
            fontSize: '17px',
        } 
    },
    gridimgBox :{
      
        ['@media (max-width:767px)']: {
           display:"flex",
        }  
    },
    gridimgBoxInner : {
        marginTop:"10px",
        ['@media (max-width:767px)']: {
           marginTop:"0px",
           marginLeft:' 12px',
           maxWidt:'40%',
        }  
    }
};