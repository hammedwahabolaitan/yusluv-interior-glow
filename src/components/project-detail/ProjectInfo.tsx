
interface ProjectInfoProps {
  description: string;
  challenge: string;
  solution: string;
}

const ProjectInfo = ({ description, challenge, solution }: ProjectInfoProps) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-semibold mb-4">Challenge</h2>
        <p className="text-gray-700 leading-relaxed">{challenge}</p>
      </div>
      
      <div>
        <h2 className="text-2xl font-serif font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 leading-relaxed">{solution}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
