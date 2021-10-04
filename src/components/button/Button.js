import "../button/styles/Button.scss";
const isOperator = (val) => {
  return (
    !isNaN(val) ||
    val === "," ||
    val === "=" ||
    val === "%" ||
    val === "C" ||
    val === "+/-"
  );
};
const isEqual = (val) => {
  return val === "=";
};
const isZero = (val) => {
  return val === "0";
};

const Button = ({ children, onClick }) => {
  return (
    <div
      className={`button ${
        isOperator(children)
          ? (isEqual(children) && "equal") || (isZero(children) && "zero")
          : "operator"
      }`}
      onClick={() => onClick(children)}
    >
      {children}
    </div>
  );
};
export default Button;
