import { useNavigate } from "react-router-dom";

const MyHero = () => {
  const navigate = useNavigate();

  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://wallup.net/wp-content/uploads/2016/01/118029-Mass_Effect.jpg')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="d-flex justify-content-center align-items-center h-100 py-3">
            <div className="text-white">
              <h1 className="mb-3">SPACEFLIGHT</h1>
              <h4 className="mb-3">The most accurate sci-fi web journal</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                Go to articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHero;
