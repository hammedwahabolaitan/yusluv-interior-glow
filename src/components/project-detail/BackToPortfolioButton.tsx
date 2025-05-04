
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BackToPortfolioButton = () => {
  return (
    <section className="py-12 text-center">
      <Button asChild variant="outline" className="mx-auto">
        <Link to="/portfolio" className="flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>
      </Button>
    </section>
  );
};

export default BackToPortfolioButton;
