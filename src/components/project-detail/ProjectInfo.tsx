
interface ProjectInfoProps {
  description: string;
  challenge: string;
  solution: string;
}

const ProjectInfoSection = ({ 
  title, 
  content 
}: { 
  title: string; 
  content: string 
}) => {
  return (
    <div className="mb-8 last:mb-0">
      <h2 className="text-2xl font-serif font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const ProjectInfo = ({ description, challenge, solution }: ProjectInfoProps) => {
  return (
    <div>
      <ProjectInfoSection title="Project Overview" content={description} />
      
      {challenge && (
        <ProjectInfoSection title="Challenge" content={challenge} />
      )}
      
      {solution && (
        <ProjectInfoSection title="Solution" content={solution} />
      )}
    </div>
  );
};

export default ProjectInfo;
