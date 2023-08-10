import path from 'path';
import fs from 'fs/promises';

import { useRouter } from 'next/router';
import Link from 'next/link';

function ProductsPage(props) {
  const { products } = props;

  const router = useRouter();

  let content;
  if (products && products.length > 0) {
    content = products.map((product) => (
      <li key={product.id}>
        Go to product:{' '}
        <Link href={router.pathname + '/' + product.id}>{product.title}</Link>
      </li>
    ));
  } else {
    content = <p>No products found.</p>;
  }

  return <ul>{content}</ul>;
}

export async function getStaticProps() {
  console.log(
    '%c-> developmentConsole: HomePage | getStaticProps=> (Re-)Generating... ',
    'color:#77dcfd'
  );

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: [...data.products],
    },
    revalidate: 10,
  };
}

export default ProductsPage;
