const MscBreadcrumb = ({ steps = 5 }) => {
  return (
    <ol className="msc-breadcrumb-container">
      {Array.from({ length: steps }).map((_, index) => (
        <li key={index}>
          <a className="msc-breadcrumb">breadcrumb</a>
          {index < steps - 1 && <span>/</span>}
        </li>
      ))}
    </ol>
  );
};

export default MscBreadcrumb;
