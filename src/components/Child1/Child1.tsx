const Child1 = (props: { avatar: string; title: string }) => {
  const dataTodolist = [
    {
      avatar: "123.jpg", // lam avatar
      isRemove: false, // Neu true khong show len giao dien
      content: "lam bai tap",
      createdAt: new Date(),  // de ngay thang tao sat avatar
      isDone: false, // De chu mau xanh la cay
      description: "lam bai tap ve js + gia thuat toan",
      userName: "Truong"
    },
    {
      avatar: "123.jpg",
      isRemove: true,
      content: "nau an",
      createdAt: new Date(),
      isDone: false, 
      description: "lam mon thit luoc",
      userName: "Khoa"
    },
  ];
  const { avatar, title } = props;

  return (
    <div style={{ width: "200px", height: "250px", marginRight: "10px" }}>
      <img src={avatar} style={{ width: "100%", height: "100%" }} />
      <p>{title}</p>
    </div>
  );
};
export default Child1;
