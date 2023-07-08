export default function WelcomeComponent() {
    return (
      <div
        style={{ flex: 0.7 }}
        className="d-flex  justify-content-center flex-column align-items-start"
      >
        <p className="heading">Welcome Back!!</p>
       
        <div
          style={{
            borderWidth: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#000",
            borderStyle: "solid",
            padding: 15,
          }}
        >
          <p
            style={{
              fontSize: 15,
              fontWeight: "bolder",
            }}
          >
            Skip the lag ?
          </p>
        </div>
      </div>
    );
  }
  