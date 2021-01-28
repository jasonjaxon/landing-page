import { v4 as uuid } from "uuid";
function qty(children, ref) {
  const content = children.length ? (
    children.map(item => (
      <div ref={ref} key={uuid()}>
        {item}
      </div>
    ))
  ) : (
    <div ref={ref}>{children}</div>
  );
  return content;
}

export default qty;
