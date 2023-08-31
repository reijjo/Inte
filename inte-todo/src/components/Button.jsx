import Button from "@mui/material/Button";

const BasicButton = ({ variant, className, children, onClick, type }) => {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default BasicButton;
