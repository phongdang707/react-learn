const Child2 = (props: any) => {
  const { avatar, title } = props;
  return (
    <div style={{ width: "200px", height: "250px" }}>
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        style={{ width: "100%", height: "100%" }}
      />
      <p>Dien thoai & phu kien</p>
    </div>
  );
};
export default Child2;