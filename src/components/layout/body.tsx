import { createBrowserRouter, Outlet } from 'react-router';
import Browse from '../../pages/browse';
import Login from '../../pages/login';
import { RouterProvider } from 'react-router';

function Layout() {
	return <Outlet />;

	return (
		<div className="flex min-h-screen flex-col">
			<div className="w-full max-w-7xl grow flex gap-5 p-5 mx-auto">
				<Outlet />
			</div>
		</div>
	);
}

export default function Body() {
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Login />,
				},
				{
					path: '/browse',
					element: <Browse />,
				},
			],
			errorElement: <>Oops Route not found !!</>,
		},
	]);

	return <RouterProvider router={appRouter} />;
}
