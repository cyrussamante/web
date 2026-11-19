import { Outlet } from "react-router";

function CreativeLayout() {
    return (
        <div className="mx-auto w-full max-w-7xl flex-1 px-6 sm:px-8 lg:px-12">
            <Outlet />
        </div>
    );
}

export default CreativeLayout;
