import { cn as bem } from "@bem-react/classname";
import "./style.css";

interface IPagination {
  page: number;
  limit: number;
  count: number;
  indent: number;
  onChange: Function;
  makeLink: Function;
}

const Pagination = (props: IPagination) => {
  const length = Math.ceil(props.count / Math.max(props.limit, 1));

  let left = Math.max(props.page - props.indent, 1);
  let right = Math.min(left + props.indent * 2, length);

  left = Math.max(right - props.indent * 2, 1);

  let items: any = [];

  if (left > 1) items.push(1);
  if (left > 2) items.push(null);
  for (let page = left; page <= right; page++) items.push(page);
  if (right < length - 1) items.push(null);
  if (right < length) items.push(length);

  const onClickHandler = number: number => e: any => {
      e.preventDefault();
      props.onChange(number);
  };

  const cn = bem("Pagination");
  return (
    <ul className={cn()}>
      {items.map((number, index) => (
        <li
          key={index}
          className={cn("item", { active: number === props.page, split: !number })}
          onClick={onClickHandler(number)}
        >
          {number ? props.makeLink ? <a href={props.makeLink(number)}>{number}</a> : number : "..."}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
