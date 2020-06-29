import React from "react";
const styles = {
  text: {
    textAlign: "center",
  },
  mainImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  },
  product: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    display: "block",
    marginTop: "30px",
    width: "100%",
    textAlign: "center",
  },

  productImg: {
    marginTop: "40px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40px",
  },
};

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>Plants, Herbs & More</h1>
        <h4 style={styles.text}>Live a Natural Life</h4>
        <img
          style={styles.herbalismimg}
          src="https://i.pinimg.com/564x/51/10/01/51100121ddaf11d09f9a094269fb082b.jpg"
          alt="Herbalism Photo"
        />
      </div>
      <div style={styles.product}>
        <div>
          <img
            style={styles.productsimgs}
            src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_683/https://loveisinmytummy.com/wp-content/uploads/2019/04/Lavender-Syrup-6.jpg"
            alt="Lavender Lemonade"
          />
          <p>Lavender Lemonade</p>
          <p>12KD</p>
        </div>
        <div>
          <img
            style={styles.productsimgs}
            src="https://i.pinimg.com/564x/87/da/4b/87da4bdb0d58a5d8733cb4ef9626c8a6.jpg"
            alt="Lilac Honey Infusion"
          />
          <p>Lilac Honey Infusion</p>
          <p>20KD</p>
        </div>
        <div>
          <img
            style={styles.productsimgs}
            src="https://i.pinimg.com/564x/17/89/08/1789088308b19e4c8ccdcd6447530a22.jpg"
            alt="Lilac Syrup"
          />
          <p>Lilac Syrup</p>
          <p>18KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
