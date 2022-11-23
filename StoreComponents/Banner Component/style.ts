export const styles = {
    bannerText : {
        position:"absolute",
        right:"-20px",
        bottom:'2px',
        margin:' 0 auto',
        width: '45%',
        ["@media (max-width:1400px)"]: {
            bottom:'-16px',
        },
        ["@media (max-width:1145px)"]: {
            bottom:'-16px',
        }
    },
    FirstList : {
        color:' #1C1B1F',
        fontSize: '48px',
        ["@media (max-width:1145px)"]: {
            fontSize: '42px',
        }
    },
    FirstPara : {
        opacity: '0.64',
        fontSize: '22px',
        padding: '0 0 22px 0px',
        color:' #1C1B1F',
        ["@media (max-width:1145px)"]: {
            fontSize: '20px',
        }
    },
    creator:{
        background: '#1C1B1F',
        borderRadius:' 666px',
        borderWidth:' 0px',
        borderColor:' initial',
        color: '#F9F6F2',
        width:' 170px',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        fontSize:'21px',
        fontWeight:'900',
        padding: '15px 0',
        textTransform:' initial',
        marginRight:'28px',
        ["@media (max-width:1145px)"]: {
            width:' 152px',
            fontSize:' 18px',
            fontWeight: '900',
            padding: '12px 0',
        }
    },
    brands:{
        background: 'transparent',
        borderRadius:' 666px',
        borderWidth:' 0px',
        border:'1px solid #1C1B1F',
        color: '#1C1B1F',
        width:' 170px',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        fontSize:'21px',
        fontWeight:'900',
        padding: '15px 0',
        textTransform:' initial',
        ["@media (max-width:1145px)"]: {
            width:' 152px',
            fontSize:' 18px',
            fontWeight: '900',
            padding: '12px 0',
        }
    }
};
