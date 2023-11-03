import "./App.css";
import Child1 from "./components/Child1/Child1";
import List from "./containers/List";

const arrayItem = [
  // {
  //   title: "Thoi trang nam",
  //   avatar:
  //     "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
  // },
  {
    title: "Thiet bi dien tu",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
  },
  // {
  //   title: "Nhà Sách Online",
  //   avatar:
  //     "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn",
  // },
  {
    title: "Sức Khỏe",
    avatar:
      "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
  },
];

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* <List listAhihi={arrayItem}></List> */}

      {/* lv1 */}
      {/* <Child1
        title="123"
        avatar="123"
      />
      <Child1
        title="456"
        avatar="456"
      />
     */}

      {/* lv0 */}
      {/* <Child1 />
      <Child2 />
      <Child3 />
      <Child4 /> */}
    </div>
  );
}

export default App;
