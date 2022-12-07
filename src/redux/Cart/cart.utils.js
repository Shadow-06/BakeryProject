export const existingCartItem = ({
  prevCartItems,
  nextCartItem,
  customisenextCartItem 
}) => {
 

  if (customisenextCartItem ){
  return prevCartItems.find(
    cartItem => JSON.stringify(cartItem.items) === JSON.stringify(nextCartItem.items)
  );
}
  return prevCartItems.find(
    cartItem => cartItem.documentID === nextCartItem.documentID
  );
};

export const handleAddToCart = ({
  prevCartItems,
  nextCartItem
}) => {
  let customisenextCartItem= nextCartItem.customise
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem ,customisenextCartItem  });

  if (cartItemExists) 
  { if (customisenextCartItem){
    return prevCartItems.map(cartItem =>
      JSON.stringify(cartItem.items) == JSON.stringify(nextCartItem.items)
        ? {
          ...cartItem,
          quantity: cartItem.quantity + quantityIncrement
        } : cartItem
    );
  }
    return prevCartItems.map(cartItem =>
      cartItem.documentID == nextCartItem.documentID
        ? {
          ...cartItem,
          quantity: cartItem.quantity + quantityIncrement
        } : cartItem
    );
    
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement
    }
  ];
};

export const handleRemoveCartItem = ({
  prevCartItems,
  cartItemToRemove
}) => {
  let customisenextCartItem= cartItemToRemove.customise
  if (customisenextCartItem ){
    return prevCartItems.filter(
      Item => JSON.stringify(Item.items) !== JSON.stringify(cartItemToRemove.items)
    );
  }
  return prevCartItems.filter(item => item.documentID !== cartItemToRemove.documentID);
}

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce
}) => {
  let customisenextCartItem= cartItemToReduce.customise
  if (customisenextCartItem ){
    const existingCartItem = prevCartItems.find(
      cartItem => JSON.stringify(cartItem.items) === JSON.stringify(cartItemToReduce.items)
    );
    if (existingCartItem.quantity === 1){
    return prevCartItems.find(
      cartItem => JSON.stringify(cartItem.items) !== JSON.stringify(cartItemToReduce.items)
    );
  }
  return prevCartItems.map(cartItem =>
    JSON.stringify(cartItem.items) === JSON.stringify(cartItemToReduce.items) ?
    {
      ...cartItem,
      quantity: cartItem.quantity - 1
    } : cartItem)
  }


  const existingCartItem = prevCartItems.find(cartItem =>
    cartItem.documentID === cartItemToReduce.documentID);

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      cartItem => cartItem.documentID !== existingCartItem.documentID
    );
  }

  return prevCartItems.map(cartItem =>
    cartItem.documentID === existingCartItem.documentID ?
    {
      ...cartItem,
      quantity: cartItem.quantity - 1
    } : cartItem)
};