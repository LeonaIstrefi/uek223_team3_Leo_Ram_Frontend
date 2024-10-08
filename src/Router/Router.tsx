import {Route, Routes} from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/pages/HomePage';
import UserTable from '../components/pages/UserPage/UserTable';
import UserPage from '../components/pages/UserPage/UserPage';
import authorities from '../config/Authorities';
import UserLoggedInHomePage from '../components/pages/UserPage/UserLoggedInHomePage';
import AdminHomePage from "../components/pages/AdminPage";
import GroupDetails from "../components/pages/GroupDetailsPage";
import GroupEditPage from "../components/pages/GroupEditPage";
import CreateGroupForm from "../components/pages/CreateGroupForm";

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
    //const { checkRole } = useContext(ActiveUserContext);

    /** navigate to different "home"-locations depending on Role the user have */

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>

            <Route
                path={'/users'}
                element={<PrivateRoute requiredAuths={[authorities.USER_MODIFY]} element={<UserTable/>}/>}
            />
            <Route
                path='/useredit'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.USER_CREATE]}
                        element={<UserPage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/useredit/:userId'
                element={
                    <PrivateRoute
                        requiredAuths={[]}
                        element={<UserPage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/user-home'
                element={
                    <PrivateRoute
                        requiredAuths={[]}
                        element={<UserLoggedInHomePage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/admin-home'
                element={
                    <PrivateRoute
                        requiredAuths={[]}
                        element={<AdminHomePage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/groups/:groupId'
                element={
                    <PrivateRoute
                        requiredAuths={[]}
                        element={<GroupDetails />}
                    />
                }
            />
            <Route
                path='/groups/edit/:groupId'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.GROUP_MODIFY]}
                        element={<GroupEditPage />}
                    />
                }
            />
            <Route
                path='/admin/create-group'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.GROUP_CREATE]}
                        element={<CreateGroupForm />}
                    />
                }
            />
            <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
    );
};

export default Router;
