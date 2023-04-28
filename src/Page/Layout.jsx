import React from "react";
import Draggable from "react-draggable";

const Layout = () => {
    const handleChange=(e)=>{
        
    }
  return (
    <div>
      <h1>Rank in order as your choice</h1>
      <div
        style={{
          marginTop: "80px",
          marginLeft: "20px",
          marginRight: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          style={{
            height: "300px",
            width: "20%",
            background:"#bba7a7",
            borderRadius:"10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Draggable  onMouseDown={()=>handleChange()}  handle=".handle" >
            <div
              className="handle"
              style={{
                height: "40px",
                width: "100px",
                marginBottom: "30px",
                paddingTop: "10px",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Samsung
            </div>
          </Draggable>
          <Draggable handle=".handle">
            <div
              className="handle"
              style={{
                height: "40px",
                width: "100px",
                marginBottom: "30px",
                paddingTop: "10px",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Asus
            </div>
          </Draggable>
          <Draggable handle=".handle">
            <div
              className="handle"
              style={{
                height: "40px",
                width: "100px",
                marginBottom: "30px",
                paddingTop: "10px",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Hp
            </div>
          </Draggable>
          <Draggable handle=".handle">
            <div
              className="handle"
              style={{
                height: "40px",
                width: "100px",
                marginBottom: "30px",
                paddingTop: "10px",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Dell
            </div>
          </Draggable>
          <Draggable handle=".handle">
            <div
              className="handle"
              style={{
                height: "40px",
                width: "100px",
                marginBottom: "30px",
                paddingTop: "10px",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Apple
            </div>
          </Draggable>
        </div>
        <div
          style={{borderRadius:"10px",background:"#bba7a7", height: "300px", width: "20%"}}
        ></div>
        <div
          style={{borderRadius:"10px",background:"#bba7a7", height: "300px", width: "20%"}}
        ></div>
        <div
          style={{borderRadius:"10px",background:"#bba7a7", height: "300px", width: "20%"}}
        ></div>
        <div
          style={{borderRadius:"10px",background:"#bba7a7", height: "300px", width: "20%"}}
        ></div>
      </div>
    </div>
  );
};

export default Layout;
