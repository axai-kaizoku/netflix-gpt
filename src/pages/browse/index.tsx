import { jsonStringify } from '@/lib/utils';
import { getCurrentUser } from '@/utils/firebase/userActions';
import { type User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Browse() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const res = await getCurrentUser();
			setUser(res);
			return res;
		};

		fetchUser();
	}, []);

	return (
		<div>
			Browse
			<pre>{jsonStringify(user)}</pre>
		</div>
	);
}
