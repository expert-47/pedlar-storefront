const styles = {
    container: {
        justifyContent: "center",
        display: "flex",
    },
    typography: {
        textAlign: "left", fontSize: "14px", fontWeight: "700", color: "#1C1B1F"
    },
    select: {
        borderRadius: "50px",
        height: "46px",
        width: "100%",
        borderColor: "#000000 20%",
        textAlign: "left",
        fontSize: "14px",
        fontWeight: "400",
    },
    descriptionGrid: {
        marginTop: "24px", borderTop: "thin solid lightgray;", justifyContent: "space-between"
    },
    descriptionTypography: {
        fontSize: "14px", fontWeight: "400", paddingTop: "30px", color: "#1C1B1F", textAlign: "start"
    },
    accordianGrid: {
        alignItems: "center", paddingTop: "25px", display: { md: "block" }
    },
    accordianTypography: {
        fontWeight: "700", fontSize: "14px", color: "#1C1B1F"
    }
}

export default styles;