import React, {createContext, useContext, useState} from 'react'

export const ProductsContext = createContext([]);

export const UseProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
    const [CartList, SetCartList] = useState([]);
    const AddProduct = (item, itemQuantity) => {
      const index = CartList.findIndex((i) => i.id === item.id);

      if (index > -1 ) {  
        CartList[index].cantidad += itemQuantity
        SetCartList(CartList);
      } else {
        item.cantidad = itemQuantity
        SetCartList([...CartList, item]);
      }
    };

    const ClearCart = () => {
      SetCartList([]);
    };

    const RemoveProduct = (item) => {
      const index = CartList.findIndex((i) => {
        return i.id === item.id
      });

        if (index > -1 ) {
          CartList.splice(index, 1);
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