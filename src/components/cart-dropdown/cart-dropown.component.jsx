import Button from '../button/button.component';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}

      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown; 