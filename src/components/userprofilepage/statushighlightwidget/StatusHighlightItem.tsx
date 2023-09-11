import React from "react";
interface StatusHighlightItemProps {
  imageSrc: string;
  highlightname: string;
  imageFile?: File;
}

const StatusHighlightItem: React.FC<StatusHighlightItemProps> = ({
  imageSrc,
  highlightname,
}) => {
  return (
    <div className="status-highlight-item">
      <img className="status-image" src={imageSrc} alt={highlightname} />
      <p className="status-name">{highlightname}</p>
    </div>
  );
};

export default StatusHighlightItem;
