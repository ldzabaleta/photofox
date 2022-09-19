import React, {createContext, useContext, useState} from 'react'

export const ProductsContext = createContext({items: [], total: 0});

export const UseProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
    const [CartList, SetCartList] = useState({items: [], total: 0});
    const AddProduct = (item, itemQuantity) => {
      const index = CartList.items.findIndex((i) => i.id === item.id);

      if (index > -1 ) {  
        CartList.items[index].cantidad += itemQuantity
        CartList.total += itemQuantity * CartList.items[index].price
        SetCartList(CartList);
      } else {
        item.cantidad = itemQuantity
        CartList.total += item.cantidad * item.price
        SetCartList({
          items: [...CartList.items , item],
          total: CartList.total
        } );
      }
    };

    const ClearCart = () => {
      SetCartList({items: [], total: 0});
    };

    const RemoveProduct = (item) => {
      console.log('lalalalal')
      const index = CartList.items.findIndex((i) => {
        return i.id === item.id
      });

        if (index > -1 ) {
          CartList.total -= CartList.items[index].cantidad * CartList.items[index].price
          CartList.items.splice(index, 1);
          SetCartList(CartList); 
        }
      };
      
    return (
        <ProductsContext.Provider
          value={{
            CartList,
            SetCartList,
            AddProduct,
            ClearCart,
            RemoveProduct
        }}
        >
          {children}
        </ProductsContext.Provider>
      );
}

export default ProductsProvider;