import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className="btn btn-danger mt-3" style={{ cursor: "pointer" }}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className="btn btn-danger"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
