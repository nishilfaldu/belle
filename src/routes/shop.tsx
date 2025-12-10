import { createFileRoute } from '@tanstack/react-router';
import Shop from '../components/shop';
import { useCart } from '../components/patisserie-layout';

export const Route = createFileRoute('/shop')({
  component: ShopPage,
});

function ShopPage() {
  const { addToCart } = useCart();
  return <Shop addToCart={addToCart} />;
}
