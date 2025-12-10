import { createFileRoute } from '@tanstack/react-router';
import Corporate from '../components/corporate';

export const Route = createFileRoute('/corporate')({
  component: CorporatePage,
});

function CorporatePage() {
  return <Corporate />;
}
