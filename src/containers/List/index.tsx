import Item from "../../components/Item";

const List = (props) => {
  const { listAhihi } = props;
  return (
    <div>
      {listAhihi.map((each) => (
        <Item label={each.title}></Item>
      ))}
    </div>
  );
};

export default List;
