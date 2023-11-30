import React, { useEffect, useState } from 'react';
import Header from './Header';
import Card from '../Components/Card';

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const apiProductData = await response.json();
      setProducts(apiProductData);
      console.log(apiProductData, 'Dataaaaaaa');
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <Header />
      <div>
        {products.map((item) => {
          return <Card key={item.id} productData={item} />;
        })}
        <Card />
      </div>
    </>
  );
}

export default Home;
