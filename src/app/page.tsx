import Navbar from "./Navbar/page";


export default function Home() {
  console.log("render page")

  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <Navbar />
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3><b style={{ fontSize: "70px" }}>H</b>ello i am abhay</h3>
        </div>
      </div>
    </>
  );
}
