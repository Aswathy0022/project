export default function WelcomeComponent() {
  return (
    <div
      style={{ flex: 1 }}
      className="d-flex  justify-content-center flex-column align-items-start"
    >
      <p className="heading">Welcome Back!!</p>

      <button
       className="skip-lag"
      >
        Skip the lag ?
      </button>
    </div>
  );
}
