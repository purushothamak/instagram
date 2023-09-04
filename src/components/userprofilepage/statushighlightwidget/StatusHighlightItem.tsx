interface StatusHighlightItemProps {
  imageSrc: string;
  highlightname: string;
}
function StatusHighlightItem({
  imageSrc,
  highlightname,
}: StatusHighlightItemProps) {
  return (
    <div className="status-highlight-item">
      <img src={imageSrc} alt="User's Status" className="status-image" />
      <p>{highlightname}</p>
    </div>
  );
}

export default StatusHighlightItem;
