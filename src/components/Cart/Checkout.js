import classes from './Checkout.module.css';

const confirmHandler =(event)=>{
    event.preventDefault();
};
const Checkout = (props) => {
    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your className</label>
                <input type='text' id='name' />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
            <button type='button' onClick={props.onClose}>Cancle</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;
