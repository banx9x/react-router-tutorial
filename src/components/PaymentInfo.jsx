export default function PaymentInfo({ subTotal, shippingFee, total }) {
    return (
        <div className="payment-info">
            <div className="d-flex justify-content-between align-items-center">
                <span>Card details</span>
                <img
                    className="rounded"
                    src="https://i.imgur.com/WU501C8.jpg"
                    width={30}
                />
            </div>
            <span className="type d-block mt-3 mb-1">Card type</span>
            <label className="radio">
                {" "}
                <input
                    type="radio"
                    name="card"
                    defaultValue="payment"
                    defaultChecked=""
                />{" "}
                <span>
                    <img
                        width={30}
                        src="https://img.icons8.com/color/48/000000/mastercard.png"
                    />
                </span>{" "}
            </label>
            <label className="radio">
                {" "}
                <input type="radio" name="card" defaultValue="payment" />{" "}
                <span>
                    <img
                        width={30}
                        src="https://img.icons8.com/officel/48/000000/visa.png"
                    />
                </span>{" "}
            </label>
            <label className="radio">
                {" "}
                <input type="radio" name="card" defaultValue="payment" />{" "}
                <span>
                    <img
                        width={30}
                        src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                    />
                </span>{" "}
            </label>
            <label className="radio">
                {" "}
                <input type="radio" name="card" defaultValue="payment" />{" "}
                <span>
                    <img
                        width={30}
                        src="https://img.icons8.com/officel/48/000000/paypal.png"
                    />
                </span>{" "}
            </label>
            <div>
                <label className="credit-card-label">Name on card</label>
                <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="Name"
                />
            </div>
            <div>
                <label className="credit-card-label">Card number</label>
                <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="0000 0000 0000 0000"
                />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label className="credit-card-label">Date</label>
                    <input
                        type="text"
                        className="form-control credit-inputs"
                        placeholder="12/24"
                    />
                </div>
                <div className="col-md-6">
                    <label className="credit-card-label">CVV</label>
                    <input
                        type="text"
                        className="form-control credit-inputs"
                        placeholder={342}
                    />
                </div>
            </div>
            <hr className="line" />
            <div className="d-flex justify-content-between information">
                <span>Subtotal</span>
                <span>${subTotal}</span>
            </div>
            <div className="d-flex justify-content-between information">
                <span>Shipping</span>
                <span>${shippingFee}</span>
            </div>
            <div className="d-flex justify-content-between information">
                <span>Total(Incl. taxes)</span>
                <span>${total}</span>
            </div>
            <button
                className="btn btn-primary btn-block d-flex justify-content-between mt-3 w-100"
                type="button"
            >
                <span>${total}</span>
                <span>
                    Checkout
                    <i className="bi bi-caret-right"></i>
                </span>
            </button>
        </div>
    );
}
