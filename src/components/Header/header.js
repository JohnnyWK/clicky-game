import React from "./node_modules/react";

const styles = {
    head: {
        background: "black",
        width: "100%",
        height: "12%",
        color: "white"
    },
    headtext: {
        // width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
        justifyContent: "center",
        alignItems: "center"
    }
};

function Header() {
    return (
        <div style={styles.head}>
            <h3 style={styles.headtext}>To begin, click on a picture.  If you click the same picture more than once, YOU LOSE!</h3>
        </div>
    );
}

export default Header;