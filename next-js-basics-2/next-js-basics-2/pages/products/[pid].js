import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>title: {loadedProduct.title}</h1>
      <p>description: {loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const { products } = await getData();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
    revalidate: 100000,
  };
}

export async function getStaticPaths() {
  // const { products } = await getData();
  // const pathsWithParams = products.map((product) => ({ params: { pid: product.id } }));

  const pathsWithParams = [{ params: { pid: 'p1' } }];

  return { paths: [...pathsWithParams], fallback: true };
}

export default ProductDetailPage;
