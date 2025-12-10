import { createFileRoute } from '@tanstack/react-router';
import Academy from '../components/academy';

export const Route = createFileRoute('/academy')({
  component: AcademyPage,
});

function AcademyPage() {
  return <Academy />;
}
