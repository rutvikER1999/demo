import { Link, Outlet, useNavigate } from "react-router-dom";


const Authentication = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Link to ='signup'>signup </Link>
        <Link to ='signin'>signin </Link>
        <Outlet />
    </div>
  );
};

export default Authentication;
